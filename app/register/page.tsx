"use client"

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function Register() {
  const { t } = useLanguage()
  const { isAuthenticated, user, login, register, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [showPasswordReset, setShowPasswordReset] = useState(false)

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    role: '',
  })

  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!loginData.email || !loginData.password) {
      setError('Please fill in all fields')
      return
    }

    try {
      await login(loginData.email, loginData.password)
      router.push('/')
    } catch (err) {
      setError('Login failed. Please try again.')
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!registerData.name || !registerData.email || !registerData.password) {
      setError('Please fill in all required fields')
      return
    }

    try {
      await register(registerData)
      router.push('/')
    } catch (err) {
      setError('Registration failed. Please try again.')
    }
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (isAuthenticated && user) {
    return (
      <>
        {/* Hero Banner */}
        <section className="relative h-64 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
          <div className="relative container-custom h-full flex items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('auth.account_details')}</h1>
              <p className="text-xl text-primary-100">{t('auth.welcome_user', { name: user.name })}</p>
            </div>
          </div>
        </section>

        {/* Account Details */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-2xl">
            <div className="card space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('auth.account_info')}</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-custom"><span className="text-secondary">{t('auth.field_name')}:</span><span className="font-medium">{user.name}</span></div>
                  <div className="flex justify-between py-3 border-b border-custom"><span className="text-secondary">{t('auth.field_email')}:</span><span className="font-medium">{user.email}</span></div>
                  {user.company && <div className="flex justify-between py-3 border-b border-custom"><span className="text-secondary">{t('auth.field_company')}:</span><span className="font-medium">{user.company}</span></div>}
                  {user.role && <div className="flex justify-between py-3 border-b border-custom"><span className="text-secondary">{t('auth.field_role')}:</span><span className="font-medium">{user.role}</span></div>}
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <button onClick={() => setShowPasswordReset(!showPasswordReset)} className="btn-outline w-full">{t('auth.reset_password')}</button>

                {showPasswordReset && (
                  <div className="card bg-surface space-y-4">
                    <h3 className="font-semibold">{t('auth.reset_password')}</h3>
                    <input type="password" placeholder={t('auth.current_password')} className="input-field" />
                    <input type="password" placeholder={t('auth.new_password')} className="input-field" />
                    <input type="password" placeholder={t('auth.confirm_new_password')} className="input-field" />
                    <button className="btn-primary w-full">{t('auth.update_password')}</button>
                  </div>
                )}

                <button onClick={handleLogout} className="btn-secondary w-full">{t('auth.logout')}</button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
        <div className="relative container-custom h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{activeTab === 'login' ? t('auth.login') : t('auth.register')}</h1>
            <p className="text-xl text-primary-100">{t('auth.access_prompt')}</p>
          </div>
        </div>
      </section>

      {/* Auth Forms */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-md">
          {/* Tabs */}
          <div className="flex space-x-2 rtl:space-x-reverse mb-8">
            <button onClick={() => setActiveTab('login')} className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${activeTab === 'login' ? 'bg-primary-600 text-white' : 'bg-surface text-secondary hover:bg-surface-hover'}`}>
              {t('auth.login')}
            </button>
            <button onClick={() => setActiveTab('register')} className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${activeTab === 'register' ? 'bg-primary-600 text-white' : 'bg-surface text-secondary hover:bg-surface-hover'}`}>
              {t('auth.register')}
            </button>
          </div>

          {error && <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">{error}</div>}

          {/* Login Form */}
          {activeTab === 'login' && (
            <form onSubmit={handleLogin} className="card space-y-6">
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium mb-2">{t('auth.email')}</label>
                <input id="login-email" type="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} className="input-field" required />
              </div>

              <div>
                <label htmlFor="login-password" className="block text-sm font-medium mb-2">{t('auth.password')}</label>
                <input id="login-password" type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} className="input-field" required />
              </div>

              <button type="submit" className="btn-primary w-full">{t('auth.login_btn')}</button>

              <p className="text-center text-sm text-secondary">{t('auth.no_account')}{' '}<button type="button" onClick={() => setActiveTab('register')} className="text-primary-600 dark:text-primary-400 hover:underline">{t('auth.register')}</button></p>
            </form>
          )}

          {/* Register Form */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegister} className="card space-y-6">
              <div>
                <label htmlFor="register-name" className="block text-sm font-medium mb-2">{t('auth.name')}</label>
                <input id="register-name" type="text" value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} className="input-field" required />
              </div>

              <div>
                <label htmlFor="register-email" className="block text-sm font-medium mb-2">{t('auth.email')}</label>
                <input id="register-email" type="email" value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} className="input-field" required />
              </div>

              <div>
                <label htmlFor="register-password" className="block text-sm font-medium mb-2">{t('auth.password')}</label>
                <input id="register-password" type="password" value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} className="input-field" required />
              </div>

              <div>
                <label htmlFor="register-company" className="block text-sm font-medium mb-2">{t('auth.company')}</label>
                <input id="register-company" type="text" value={registerData.company} onChange={(e) => setRegisterData({ ...registerData, company: e.target.value })} className="input-field" />
              </div>

              <div>
                <label htmlFor="register-role" className="block text-sm font-medium mb-2">{t('auth.role')}</label>
                <input id="register-role" type="text" value={registerData.role} onChange={(e) => setRegisterData({ ...registerData, role: e.target.value })} className="input-field" placeholder={t('auth.role_placeholder')} />
              </div>

              <button type="submit" className="btn-primary w-full">{t('auth.register_btn')}</button>

              <p className="text-center text-sm text-secondary">{t('auth.have_account')}{' '}<button type="button" onClick={() => setActiveTab('login')} className="text-primary-600 dark:text-primary-400 hover:underline">{t('auth.login')}</button></p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
 

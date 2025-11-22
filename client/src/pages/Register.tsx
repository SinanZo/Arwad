import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface User {
  name: string;
  email: string;
  company: string;
  role: string;
}

export default function Register() {
  const { t } = useTranslation();
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('mockUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    role: '',
  });

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Mock login
    const mockUser: User = {
      name: 'John Doe',
      email: loginData.email,
      company: 'Sample Company',
      role: 'Manager',
    };
    localStorage.setItem('mockUser', JSON.stringify(mockUser));
    setUser(mockUser);
    toast.success('Logged in successfully!');
  };

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    // Mock signup
    const newUser: User = {
      name: signupData.name,
      email: signupData.email,
      company: signupData.company,
      role: signupData.role,
    };
    localStorage.setItem('mockUser', JSON.stringify(newUser));
    setUser(newUser);
    toast.success('Account created successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('mockUser');
    setUser(null);
    toast.success('Logged out successfully!');
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[200px] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{t('register.title')}</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-2xl">
          {!user ? (
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{t('register.login.title')}</TabsTrigger>
                <TabsTrigger value="signup">{t('register.signup.title')}</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('register.login.title')}</CardTitle>
                    <CardDescription>
                      {t('register.login.noAccount')} <a href="#signup" className="text-primary hover:underline">{t('register.login.createAccount')}</a>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <Label htmlFor="login-email">{t('register.login.email')}</Label>
                        <Input
                          id="login-email"
                          type="email"
                          value={loginData.email}
                          onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="login-password">{t('register.login.password')}</Label>
                        <Input
                          id="login-password"
                          type="password"
                          value={loginData.password}
                          onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        {t('register.login.submit')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('register.signup.title')}</CardTitle>
                    <CardDescription>
                      {t('register.signup.hasAccount')} <a href="#login" className="text-primary hover:underline">{t('register.signup.signIn')}</a>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div>
                        <Label htmlFor="signup-name">{t('register.signup.name')}</Label>
                        <Input
                          id="signup-name"
                          value={signupData.name}
                          onChange={(e) => setSignupData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-email">{t('register.signup.email')}</Label>
                        <Input
                          id="signup-email"
                          type="email"
                          value={signupData.email}
                          onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-password">{t('register.signup.password')}</Label>
                        <Input
                          id="signup-password"
                          type="password"
                          value={signupData.password}
                          onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-company">{t('register.signup.company')}</Label>
                        <Input
                          id="signup-company"
                          value={signupData.company}
                          onChange={(e) => setSignupData(prev => ({ ...prev, company: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-role">{t('register.signup.role')}</Label>
                        <Input
                          id="signup-role"
                          value={signupData.role}
                          onChange={(e) => setSignupData(prev => ({ ...prev, role: e.target.value }))}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        {t('register.signup.submit')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>{t('register.account.title')}</CardTitle>
                <CardDescription>
                  {t('register.account.welcome')}, {user.name}!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-muted-foreground">{t('register.account.email')}</Label>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">{t('register.account.company')}</Label>
                  <p className="font-medium">{user.company}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">{t('register.account.role')}</Label>
                  <p className="font-medium">{user.role}</p>
                </div>
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full">
                    {t('register.account.resetPassword')}
                  </Button>
                  <Button variant="destructive" className="w-full" onClick={handleLogout}>
                    {t('register.account.logout')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
}

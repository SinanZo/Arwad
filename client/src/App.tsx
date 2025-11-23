import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nProvider } from "./contexts/I18nContext";
import "./lib/i18n";
import Home from "./pages/Home";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import QuoteOrder from "./pages/QuoteOrder";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminQuotes from "./pages/admin/Quotes";
import AdminContacts from "./pages/admin/Contacts";
import AdminAnalytics from "./pages/admin/Analytics";
import ProtectedRoute from "./components/ProtectedRoute";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/industries" component={Industries} />
      <Route path="/products" component={Products} />
      <Route path="/our-services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route path="/quote-order" component={QuoteOrder} />
      <Route path="/admin">
        <ProtectedRoute requireAdmin>
          <AdminDashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/quotes">
        <ProtectedRoute requireAdmin>
          <AdminQuotes />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/contacts">
        <ProtectedRoute requireAdmin>
          <AdminContacts />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/analytics">
        <ProtectedRoute requireAdmin>
          <AdminAnalytics />
        </ProtectedRoute>
      </Route>
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nProvider } from "./contexts/I18nContext";
import "./lib/i18n";
import Home from "./pages/Home";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import QuoteOrder from "./pages/QuoteOrder";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminQuotes from "./pages/admin/Quotes";
import AdminContacts from "./pages/admin/Contacts";
import AdminAnalytics from "./pages/admin/Analytics";
import ProtectedRoute from "./components/ProtectedRoute";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/industries" component={Industries} />
      <Route path="/products" component={Products} />
      <Route path="/our-services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route path="/quote-order" component={QuoteOrder} />
      <Route path="/admin">
        <ProtectedRoute requireAdmin>
          <AdminDashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/quotes">
        <ProtectedRoute requireAdmin>
          <AdminQuotes />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/contacts">
        <ProtectedRoute requireAdmin>
          <AdminContacts />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/analytics">
        <ProtectedRoute requireAdmin>
          <AdminAnalytics />
        </ProtectedRoute>
      </Route>
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable
      >
        <I18nProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </I18nProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;        switchable
      >
        <I18nProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </I18nProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

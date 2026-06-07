import {
  Show,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton
} from '@clerk/react'
import PageLoader from './componenets/PageLoader'
import Layout from './componenets/Layout'
import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import OrdersPage from './pages/OrdersPage'
import CheckoutReturnPage from './pages/CheckoutReturnPage'
import ProductDetailPage from './pages/ProductDetailPage'
import { SentryDemoPage } from './pages/SentryDemoPage'
import OrderDetailPage from './pages/OrderDetailPage'
import OrderChatPage from './pages/OrderChatPage'
import OrderSummaryPage from './pages/OrderSummarytPage'
import OrderVideoPage from './pages/OrderVideoPage'

function App () {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) return <PageLoader />

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:slug' element={<ProductDetailPage />} />
        <Route
          path='/orders'
          element={isSignedIn ? <OrdersPage /> : <Navigate to={'/'} replace />}
        />
        <Route path='/checkout/return' element={<CheckoutReturnPage />} />
        <Route path='/demo-sentry' element={<SentryDemoPage />} />
        <Route
          path='/order/:id/call'
          element={
            isSignedIn ? <OrderVideoPage /> : <Navigate to={'/'} replace />
          }
        />

        <Route path='/orders/:id' element={<OrderDetailPage />}>
          <Route index element={<OrderSummaryPage />} />
          <Route path='chat' element={<OrderChatPage />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App

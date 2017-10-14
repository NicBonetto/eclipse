import SearchPage from '../components/search-page/search-page.jsx'
import DiscoverPage from '../components/discover-page/discover-page.jsx'

const routes = [
  {
    path: '/',
    exact: true,
    component: SearchPage
  },
  {
    path: '/discover',
    exact: true,
    component: DiscoverPage
  }
]

export default routes
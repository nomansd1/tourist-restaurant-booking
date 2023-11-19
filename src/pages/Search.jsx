import { SearchJumbotron, SearchProductGrid } from '../components/search-page/index'
import { SidebarProvider } from '../context/SidebarContext'
import  { Header, Footer } from '../components/home/index'

export default function Search() {
    return (
        <>
            <SidebarProvider>
                <Header/>
                <SearchJumbotron />
                <SearchProductGrid />
                <Footer/>
            </SidebarProvider>
        </>
    )
}
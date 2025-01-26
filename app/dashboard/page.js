import Login from '@/components/Login';
import Main from '../../components/Main';
import Dashboard from '@/components/Dashboard';

export const metadata = {
    title: 'Home',
}

export default function dashboardPage() {

    const isAuthenticated = false;
    const children = (
        <Login />
    )

    if (!isAuthenticated){
        children = (
            <Dashboard />
        )
    }

    return (
        <Main>
            <div>
                {children}
            </div>
        </Main>
    )
}
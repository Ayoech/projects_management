import { Outlet } from "react-router";


const DashboardLayout = () => {
    
    //const {isAuthenticated, isLoading} = useAuth();
    return(
    <div className = "flex h-screen w-full">
        <div className= "flex flex-1 flex-col h-full">
            <main className="flex-1 overflow-y-auto h-auto h-full w-full">
                <div className="container mx-auto p-4 w-full h-full">
                    <Outlet />
                </div>             
            </main>

        </div>

    </div>);
    
}
export const loader = () => null;
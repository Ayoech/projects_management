
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../../../../~/components/ui/dialog';
import CreateProjectForm from '../project/CreateProjectForm';
import { Button } from '../../../../~/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '../../../../~/components/ui/dropdown-menu';
import { PersonIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between bg-black">
        <div className="flex items-center gap-3">
            <p className="cursor pointer">Project Management</p>
            <Dialog>
                <DialogTrigger>
                    <Button variant="ghost">New Project</Button>
                </DialogTrigger>
                
                <DialogContent>
                    <DialogHeader className="text-black"> Create New Project</DialogHeader>
                    Create a project    
                    
                    <CreateProjectForm />
                </DialogContent>

            </Dialog>
            <Button variant="ghost">
                Logout
            </Button>
        </div>
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button>
                        <PersonIcon />
                    </Button>
                </DropdownMenuTrigger>      
            </DropdownMenu>
            <p>Username</p>
        </div>
    </div>
  )
}

export default Navbar;
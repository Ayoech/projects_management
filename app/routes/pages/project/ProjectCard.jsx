import React from "react"
import { Card    } from "../../../../~/components/ui/card";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "../../../../~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../../~/components/ui/dropdown-menu";
import { Badge } from "../../../../~/components/ui/badge";
import { useNavigate } from "react-router";


const ProjectCard = () => {
    const navigate = useNavigate();
    return (
        <Card className="p-5  lg-max-w-3xl shadow-lg border-0 mt-12 w-auto">
            <div className="space-y-5">
                <div className="flex justify-between">
                    <div className="flex items-center gap-5">
                        <h1 className="cursor-pointer font-bold text-lg" onClick={() => navigate("/project/1")}>
                            Create Ecommerce project
                        </h1>
                        <DotFilledIcon />
                        <p className="text-sm text-gray-400">fullstack</p>

                    </div>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="bg-white ">
                                <Button variant="ghost" className="bg-blue-400 rounded-full p-1">
                                    <DotsVerticalIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Update
                                </DropdownMenuItem>
                                 <DropdownMenuItem>
                                    Delete
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </div>
                <p className="text-gray-500 text-sm"> 
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

            </div>
            <div>
                {[1,1,1,1,1].map((item) => <Badge key={item}  className= "ml-2 border-0 shadow-lg" variant="outline">{"frontend"}</Badge>)}
            </div>
        </Card>
    )
}
export default ProjectCard;
import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../../~/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "../../../../~/components/ui/button";



const IssueCard = () => {
    return (
        <div className="w-full border p-5 rounded-lg shadow-lg">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button className="rounded-full bg-blue-400">
                        <DotsVerticalIcon/>

                        
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        In Progress
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Done
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default IssueCard;
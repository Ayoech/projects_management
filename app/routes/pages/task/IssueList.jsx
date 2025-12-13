import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../../../~/components/ui/card";
import IssueCard from "./IssueCard";
import { Dialog } from "../../../../~/components/ui/dialog";

import { Button } from "../../../../~/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../../../../~/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "@radix-ui/react-icons";

const IssueList = () => {
    return (
        <div className="w-full border p-5 rounded-lg shadow-lg">
         
                <Card className="w-full border-0 p-5 rounded-lg shadow-lg">
                    <CardHeader className="relative">
                        <CardTitle className="inline">To do</CardTitle>
                        <Button className="flex items-center gap-2 rounded-full w-8 h-6 bg-green-500 absolute left-64 top-0 text-white">
                            <CheckIcon className="w-4 h-4" />

                        </Button>
                    </CardHeader>
                    <CardContent className="px-2 border-0">
                        <div>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className="space-y-2 mt-8 pl-58 ">
                           <Button className="rounded-full bg-blue-400 pl-30">
                                <DotsVerticalIcon/>
                           
                                                   
                            </Button>

                        </div>
                    </CardContent>
                   
                </Card>
        
        </div>
    )
}

export default IssueList;
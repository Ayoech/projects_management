import React from "react";
import Navbar from "../navbar/Navbar";
import { ScrollArea } from "../../../../~/components/ui/scroll-area";
import IssueList from "../task/IssueList";
import CheckBox from "../task/Checkbox";
import { Button } from "../../../../~/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";


const ProjectDetails = () => {
    return (
        <>
        
         <Navbar className="fixed left-0 top-0"/>
        <div className="mt-5 lg:px-10">
            <div className="lg:flex gap-5 justify-between pb-4">

                <ScrollArea className="h-screen lg:w-[69%] pr-2">
                    <div className="text-black pb-10 w-full">
                        <h1 className="font-bold text-2xl pb-2">Create Ecommerce project</h1>
                    </div>
                    <div className="w-full md:max-w-lg lg:max-w-xl text-black">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="flex mt-8">
                        <p className="text-black font-bold mx-2">category : </p>
                        <p className="text-black"> fullstack</p>
                    </div>
                    <section>
                        <p className="py05 border-b text-lg -tracking-wider mx-2 my-8 text-black font-bold">Tasks</p>
                        <Button className="flex items-center gap-2 bg-blue-500">
                            <PlusIcon className="w-4 h-4" />
                            New Task
                        </Button>
                        <div className="flex mt-4 gap-2">
                            < IssueList status="pending" title="Todo List"/>
                            < IssueList status="in_progress" title="In progress"/>
                            < IssueList status="done" title="Done"/>
                        </div>
                    </section>
                </ScrollArea>
                <div className = "bg-green-400 border-0 w-60 ml-0 absolute left-180 top-48 h-36 shadow-lg">
                    <div className="text-center font-bold text-2xl mt-8"> 24 </div>
                    <div className="text-center  mt-6"> Completed Tasks </div>

                </div>
                <div className = "bg-orange-300  border-0 w-60 ml-0 absolute left-260 top-48 h-36 shadow-lg">
                    <div className="text-center font-bold text-2xl mt-8"> 12 </div>
                    <div className="text-center  mt-6"> Pending </div>

                </div>
                <div className = "bg-red-400  border-0 w-60 ml-0 absolute left-340 top-48 h-36 shadow-lg">
                    <div className="text-center font-bold text-2xl mt-8"> 6 </div>
                    <div className="text-center  mt-6"> Over due </div>

                </div>
                <div>

                    
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectDetails;
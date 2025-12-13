import React from "react";
import { Card, CardContent } from "../../../../~/components/ui/card";
import { Button } from "../../../../~/components/ui/button";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "../../../../~/components/ui/scroll-area";
import {RadioGroup, RadioGroupItem} from "../../../../~/components/ui/radio-group";
import {Label} from "../../../../~/components/ui/label";
import { Input } from "../../../../~/components/ui/input";
import { useState } from "react";
import ProjectCard from "../project/ProjectCard";
import Navbar from "../navbar/Navbar";


const ProjectList = () => {
    const keyword = useState("");
    const handleFilterChange = (value) =>  {
        console.log("value : ", value);
    }
    const handleSearchChange = (e) =>  {
        setKeyword(e.target.value);
    }
    const tags = [
     "All", "react", "Next js", "Spring Boot", "Mysql", "mongodb", "python", "django", "flask"
    ];
  return (
    <div className="relative">
        <Navbar className="fixed left-0 top-0"/>
    
    <div className="relative ml-0 lg:px-0 lg:flex gap-5 justify-center py-5 bg-gray-100  ">
        

      <section className="filterSelection  left-0 top-24">
        <Card className="p-5 sticky top-10 border-0 shadow-lg m-0 flex-1">

          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl font-semibold">Filters</p>

            <Button className="bg-blue-400">
                <MixerHorizontalIcon />
            </Button>
          </div>

          <CardContent className="mt-5">
            <ScrollArea className="space-y-4 h-[70vh]">
                <div className="mb-12">
                    <h1 className="pb-3 text-gray-600 semi-bold border-b">
                        Categrory

                    </h1>
                    <div className="pt-5 ">
                        <RadioGroup onValueChange={(value) =>handleFilterChange(value)}>
                            <div className="flex item-center gap-2 space-y-4">
                                <RadioGroupItem value="all" id="r1" />
                                <Label htmlFor="r1">All</Label>
                               
                            </div>
                             <div className="flex item-center gap-2 space-y-4">
                                <RadioGroupItem value="fullstack" id="r2" />
                                <Label htmlFor="r2">Full stack</Label>
                               
                            </div>
                             <div className="flex item-center gap-2 space-y-4">
                                <RadioGroupItem value="frontend" id="r3" />
                                <Label htmlFor="r3">Frontend</Label>
                               
                            </div>
                             <div className="flex item-center gap-2 space-y-4">
                                <RadioGroupItem value="backend" id="r4" />
                                <Label htmlFor="r4">Backend</Label>
                               
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                 <div>
                    <h1 className="pb-3 text-gray-600 semi-bold border-b">
                        Tags

                    </h1>
                    <div className="pt-5">
                        <RadioGroup onValueChange={(value) =>handleFilterChange(value)}>
                           { tags.map((tag, index)=> {
                                return (
                                <div className="flex item-center gap-2 space-y-4">
                                    <RadioGroupItem value={tag} id={`r-${index}`} />
                                    <Label htmlFor={`r-${index}`}> {tag} </Label>
                               
                                </div>)})}               
                             
                        </RadioGroup>
                    </div>
                </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>
      <section className="projectList w-full lg:w-[70%]">
        <div className="flex gap-2 items-centerpb-5 justify-between">
            <div className="relative p-0 w-full">
                <Input className = "40% px-9 py-6 w-200 ml-36" placeholder = "search project" onChange={handleSearchChange}/>
                {/*<MagnifyGlassIcon className="absolute top-3 left-4"></MagnifyGlassIcon>*/}
            </div>               
        </div>
        <div className="space-y-5 min-h-[74h]">
            {
                keyword?[1,1,1].map((item) => <ProjectCard key={item} />):[1,1,1,1].map((item) =><ProjectCard key={item} />)
            }
        </div>

      </section>

    </div>
    </div>
  );
};

export default ProjectList;

import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../~/components/ui/form';
import {Button} from '../../../../~/components/ui/button';
import { Input } from '../../../../~/components/ui/input';
import { useForm } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../~/components/ui/select';
import { Cross1Icon } from '@radix-ui/react-icons';



const CreateProjectForm = () => {
    const tags = [
     "All", "react", "Next js", "Spring Boot", "Mysql", "mongodb", "python", "django", "flask"
    ];
   const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      tags: ["react"],
    }
  });
  const handleSubmit = (data) => {
    console.log("form submitted", data);
  } 
  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues("tags");
    const updatedTags = currentTags.includes(newValue)?
    currentTags.filter(tag=>tag !== newValue) : [...currentTags, newValue];
    form.setValue("tags", updatedTags, { shouldDirty: true });
    
}
 
  return (
    <div>
         <Form {...form}>
                <form className="grid gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField control={form.control} name="title" render={({ field }) => (
                        <FormItem className="mb-4">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                    <Input placeholder="give your project a title" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                                )} />   
                                <FormField control={form.control} name="description" render={({ field }) => (
                                    <FormItem className="mb-4">
                                        <FormLabel>description</FormLabel>
                                        <FormControl>
                                            <Input placeholder="describe your project" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />   
                        <FormField
  control={form.control}
  name="category"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Category</FormLabel>
      <Select value={field.value} onValueChange={field.onChange}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="fullstack">Fullstack</SelectItem>
          <SelectItem value="frontend">Frontend</SelectItem>
          <SelectItem value="backend">Backend</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="tags"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Tags</FormLabel>

      <Select onValueChange={handleTagsChange}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select tags" />
          </SelectTrigger>
        </FormControl>

        <SelectContent>
          {tags.map(tag => (
            <SelectItem key={tag} value={tag}>
              {tag}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex gap-1 flex-wrap mt-2">
        {field.value.map((item) => (
          <div
            key={item}
            onClick={() => handleTagsChange(item)}
            className="cursor-pointer flex rounded-full border-0 shadow-lg items-center w-32 text-center  gap-2 py-1"
          >
            <span className ="text-black text-center px-6">{item}</span>
            <Cross1Icon className="h-6 w-4 pr-0.5 text-gray-700" />
          </div>
        ))}
      </div>

      <FormMessage />
    </FormItem>
  )}
/>

                                <Button type="submit" className="bg-blue-500 ml-38 w-24 mt-4">Add Project</Button>
        
                              
                            </form>
        </Form>
    </div>
);
}

export default CreateProjectForm;
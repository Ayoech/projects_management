import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/lib/schema";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../../~/components/ui/card";
import {Form, FormItem, FormLabel, FormControl, FormField, FormMessage} from "../../../~/components/ui/form";
import { Input } from "../../../~/components/ui/input";
import { Button } from "../../../~/components/ui/button";
import { Link } from "react-router";
type SignUpFormData = z.infer<typeof signUpSchema>;
const SignUp = () => {
    const form = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        }
    });
    const handleSubmit = (data: SignUpFormData) => {
        console.log(data);
    }
    return(
    <div className="min-h-screen flex-col items-center  bg-gray-100 shadow-lg justify-center p-4">
        <Card className="w-full max-w-md mx-auto  shadow-lg mt-16 border-0">
            <CardHeader className="mb-4">
                <CardTitle className="text-2xl text-center">Welcome</CardTitle>
                <CardDescription className="text-xl text-center">Please sign up for a new account</CardDescription> 
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4">
                        <FormField control={form.control} name="firstname" render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your first name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />   
                        <FormField control={form.control} name="lastname" render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your last name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />   
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />   
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />  
                        <Button type="submit" className="bg-blue-500 ml-38 w-24 mt-4">Sign up</Button>

                      
                    </form>
                </Form>
                <CardFooter className="flex items-center justify-center mt-6">
                    <div className="flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">
                            Do you have an account? 
                            <Link to="/sign-in">Sign in</Link>
                        </p>
                    </div>
                </CardFooter>

            </CardContent>

        </Card>
    </div>);
}

export default SignUp;


import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/lib/schema";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "~/components/ui/card";
import {Form, FormItem, FormLabel, FormControl, FormField, FormMessage} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
type SigninFormData = z.infer<typeof signInSchema>;
const SignIn = () => {
    const form = useForm<SigninFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const handleSubmit = (data: SigninFormData) => {
        console.log(data);
    }
    return(
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 p-4 shadow-lg ">
        <Card className="w-full max-w-md mx-auto mt-32 shadow-lg border-0">
            <CardHeader className="mb-4">
                <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
                <CardDescription className="text-xl text-center">Please sign in to your account</CardDescription> 
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4">
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
                        <Button type="submit" className="bg-blue-500 ml-38 w-24 mt-4">Sign in</Button>

                      
                    </form>
                </Form>
                <CardFooter className="flex items-center justify-center mt-6">
                    <div className="flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">
                            Don&apos;t have an account? 
                            <Link to="/sign-up">Sign up</Link>
                        </p>
                    </div>
                </CardFooter>

            </CardContent>

        </Card>
    </div>);
}

export default SignIn;


import {ThemeProvider} from "@/components/ui/theme-provider";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {ModeToggle} from "./components/ui/mode-toggle";
function App() {
  return (
    <>
      <div className="mb-2">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login </CardTitle>
          <CardDescription>Input your credentials here.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input id="name" placeholder="Enter your password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Position</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Admin</SelectItem>
                    <SelectItem value="sveltekit">User</SelectItem>
                    <SelectItem value="astro">Guest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;

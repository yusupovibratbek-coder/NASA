import { NavigationMenu } from "@/components/ui/navigation-menu";
import Navigation from "./Navigation";
import { NavigationMenuDemo } from "./Navigationtwo";

export default function Navbar() {
    return (
        <div className="bg-black h-18">
            <div className="flex flex-wrap justify-around">
                <div className="flex items-center pt-2">
                    <Navigation />
                    <input className="text-white bg-black border-gray-700 border-2 w-50" placeholder="Search" type="text" />
                </div>
                <div>
                    <img className="w-30" src="https://th.bing.com/th/id/R.6099842fdaa23fbcaa3260f73c528545?rik=QpL7FNGrPpAgJQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnasa-logo-png-nasa-logo-3400.png&ehk=Otq520jAiA7u5aOyTZqDIhduR0Sw95%2bki1ZkhqyxK0k%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className="items-center pt-4 flex">
                    <NavigationMenuDemo/>
                    <h1 className="text-xl text-white font-bold">NASA+</h1>
                    <div className="pl-2">
                        <h1 className="text-white font-mono rounded-lg hover:bg-red-700 border-red-700 border-1  w-13 text-center">Live</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
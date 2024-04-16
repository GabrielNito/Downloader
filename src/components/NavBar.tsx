import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-[98vw] flex justify-end px-8 py-4">
        <NavigationMenuItem>
          <Button variant="ghost">About</Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;

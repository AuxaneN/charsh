/// <reference types="react" />
interface IProps {
    children: JSX.Element;
    name: string;
    url: string;
}
declare const NavItem: ({ name, url, children }: IProps) => JSX.Element;
export default NavItem;

import { NavLink } from 'react-router'

const nav = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
]

export const Header = () => {

    return (
        <header className="bg-blue-600 text-white p-4 mb-6">
            <div className="max-w-md mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Todo list</h1>
                <div className="flex items-center gap-4">
                    {
                        nav?.map((item, index) => (
                            <NavLink key={index} className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={item.path}>{item.name}</NavLink>
                        ))
                    }
                </div>
            </div>
        </header>
    );
};
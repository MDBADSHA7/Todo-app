import React from "react";
import todo from "../../../src/Todo.jpg";
import { NavLink } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import Footer from "../Footer/Footer";
import useTitle from "../Hooks/UseTitle";
const Home = () => {
    useTitle("Home");
    return (
        <>
            <div className="bg-base-100">
                <section className="body-font bg-base-100">
                    <div className="container mx-auto flex px-5 py-28 lg:py-36 items-center justify-center flex-col">
                        <img
                            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-2xl"
                            alt="todo"
                            src={todo}
                        />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                Daily Task To Do
                            </h1>
                            <b className="mb-8">
                                To Do List App is a kind of app that generally used to maintain
                                our day-to-day tasks or list everything that we have to do, with
                                the most important tasks at the top of the list, and the least
                                important tasks at the bottom. It is helpful in planning our
                                daily schedules.
                            </b>
                            <br />
                            <div className="flex justify-center mt-10">
                                <NavLink to="/todo/add" className="btn btn-primary text-white">
                                    <MdAddCircleOutline className="mr-1 text-xl" /> Add Your First
                                    ToDo Task
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;


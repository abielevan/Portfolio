import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Profile(props){
    let buka = "{"
    let tutup = "}"
    return(
        <>
            <Head title={props.title}></Head>
            <Navbar></Navbar>
            <div className="jumbotron w-full min-h-screen bg-sky-100 text-white">
                <div className="backdrop-blur-xl  w-full min-h-screen">
                    <div className="container mx-auto grid grid-rows-1 grid-cols-2 gap-4">
                        <div className="about min-h-screen flex items-center">
                            <div className="title text-right">
                                <h1 className="font-medium text-7xl">Full Stack Software Enginer</h1>
                                <p>passionate about helping businesses establish a strong online presence through strategic planning, creative design, and
                                seamless execution.</p>
                            </div>
                        </div>
                        <div className="desc min-h-screen flex items-center ">
                            <div className="mockup-code bg-transparent">
                                <pre data-prefix="$"><code>public function <code className="text-cyan-500">AboutMe</code><code className="text-orange-500">()</code>{buka}</code></pre> 
                                <pre data-prefix=">" className="text-warning"><code>&emsp;&emsp;&emsp;&emsp;return<code className="text-orange-500"> mySelf(<code className="text-cyan-600">[</code></code> </code></pre> 
                                <pre data-prefix=">" className="text-green-400">
                                    <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'name'&emsp;</code>
                                    <code className="text-cyan-500">=&gt;</code>
                                    <code className="text-green-600">&emsp;"Abielevan Meidialmo",</code>
                                </pre> 
                                <pre data-prefix=">" className="text-green-400">
                                    <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'birth'&emsp;</code>
                                    <code className="text-cyan-500">=&gt;</code>
                                    <code className="text-green-600">&emsp;"Denpasar, 13 May 2001",</code>
                                </pre> 
                                <pre data-prefix=">" className="text-green-400">
                                    <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'age'&emsp;</code>
                                    <code className="text-cyan-500">=&gt;</code>
                                    <code className="text-red-400">&emsp;23,</code>
                                </pre> 
                                <pre data-prefix=">" className="text-green-400">
                                    <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'find_me'&emsp;</code>
                                    <code className="text-cyan-500">=&gt;</code>
                                    <code className="text-green-600">&emsp;<code className="text-cyan-600">[</code></code>
                                </pre> 
                                <pre data-prefix=">" className="text-success">
                                    <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'instagram'&emsp;</code>
                                    <code className="text-cyan-500">=&gt;</code>
                                    <code>&emsp;"@abielevan"<code className="text-white">,</code></code>
                                </pre>
                                <pre data-prefix=">" className="text-success">
                                    <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'LinkedIn'&emsp;</code>
                                    <code className="text-cyan-500">=&gt;</code>
                                    <code>&emsp;"abielevan-meidialmo"<code className="text-white">,</code></code>
                                </pre>
                                <pre data-prefix=">" className="text-success">
                                    <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'gitHub'&emsp;</code>
                                    <code className="text-cyan-500">=&gt;</code>
                                    <code>&emsp;"abielevan"<code className="text-white">,</code></code>
                                </pre>
                                <pre data-prefix=">" className="text-success">
                                    <code className="text-cyan-600">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;]</code>
                                    <code className="text-white">,</code>
                                </pre>
                                <pre data-prefix=">" className="text-success">
                                    <code className="text-cyan-600">&emsp;&emsp;&emsp;&emsp;]<code className="text-orange-500">)</code></code>
                                    <code className="text-white">;</code>
                                </pre>
                                <pre data-prefix=">" className="text-success">
                                    <code className="text-white">{'}'};</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
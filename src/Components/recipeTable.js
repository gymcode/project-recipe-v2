import "./main.css"

const RecipeTable = () => {
    return (
        <>
            <table class="table-fixed w-full rounded-xl">
                <thead className="rounded-xl">
                    <tr className="h-20 bg-[#ebedf0dc] imprima-font">
                        <th className="text-left">Recipe Name</th>
                        <th className="text-left">Recipe Type</th>
                        <th className="text-left">Status</th>
                        <th className="text-left">Recipe Rating</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-20 border-b imprima-font hover:bg-[#ebedf0dc]">
                        <td className="text-gray-800">
                            The Sliding Mr. Bones (Next Stop, Pottersville)
                        </td>
                        <td className="text-gray-800">Continental</td>
                        <td>
                            <div className="border border-[#75D166] rounded-lg flex justify-center items-center h-9 w-28">
                                <div className="text-sm text-gray-800">Approved</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-checks"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#75D166"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 12l5 5l10 -10"></path>
                                    <path d="M2 12l5 5m5 -5l5 -5"></path>
                                </svg>
                            </div>
                        </td>
                        <td className="text-gray-800">Malcolm Lockyer</td>
                        <td className="text-center text-gray-800 flex h-[8.3vh] justify-center items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                            </div>
                        </td>
                    </tr>
                    <tr className="h-20 border-b imprima-font hover:bg-[#ebedf0dc]">
                        <td className="text-gray-800">
                            The Sliding Mr. Bones (Next Stop, Pottersville)
                        </td>
                        <td className="text-gray-800">Continental</td>
                        <td>
                            <div className="border border-[#75D166] rounded-lg flex justify-center items-center h-9 w-28">
                                <div className="text-sm text-gray-800">Approved</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-checks"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#75D166"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 12l5 5l10 -10"></path>
                                    <path d="M2 12l5 5m5 -5l5 -5"></path>
                                </svg>
                            </div>
                        </td>
                        <td className="text-gray-800">Malcolm Lockyer</td>
                        <td className="text-center text-gray-800">1961</td>
                    </tr>
                    <tr className="h-20 border-b imprima-font">
                        <td className="text-gray-800">
                            The Sliding Mr. Bones (Next Stop, Pottersville)
                        </td>
                        <td className="text-gray-800">Continental</td>
                        <td>
                            <div className="border border-[#75D166] rounded-lg flex justify-center items-center h-9 w-28">
                                <div className="text-sm text-gray-800">Approved</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-checks"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#75D166"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 12l5 5l10 -10"></path>
                                    <path d="M2 12l5 5m5 -5l5 -5"></path>
                                </svg>
                            </div>
                        </td>
                        <td className="text-gray-800">Malcolm Lockyer</td>
                        <td className="text-center text-gray-800">1961</td>
                    </tr>
                    <tr className="h-20 border-b imprima-font">
                        <td className="text-gray-800">
                            The Sliding Mr. Bones (Next Stop, Pottersville)
                        </td>
                        <td className="text-gray-800">Continental</td>
                        <td>
                            <div className="border border-[#75D166] rounded-lg flex justify-center items-center h-9 w-28">
                                <div className="text-sm text-gray-800">Approved</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-checks"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#75D166"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 12l5 5l10 -10"></path>
                                    <path d="M2 12l5 5m5 -5l5 -5"></path>
                                </svg>
                            </div>
                        </td>
                        <td className="text-gray-800">Malcolm Lockyer</td>
                        <td className="text-center text-gray-800">1961</td>
                    </tr>
                    <tr className="h-20 border-b imprima-font">
                        <td className="text-gray-800">
                            The Sliding Mr. Bones (Next Stop, Pottersville)
                        </td>
                        <td className="text-gray-800">Continental</td>
                        <td>
                            <div className="border border-red-400 rounded-lg flex justify-center items-center h-9 w-28">
                                <div className="text-sm text-gray-800">Rejected</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="red"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </td>
                        <td className="text-gray-800">Malcolm Lockyer</td>
                        <td className="text-center text-gray-800">1961</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default RecipeTable
import React from 'react';


const HomeSearch = () => {
    return (
        <>
            <form >
                <div className="search_btn_wrapper">
                    <input className="search_field" type="search" placeholder='  Find Searvices for your business' />
                    <input className="search_btn" type="submit" value="Search Now" />

                </div>
            </form>


        </>

    )
}




export default HomeSearch;
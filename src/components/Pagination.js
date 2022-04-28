import {useEffect, useState} from "react";

const Pagination = ({pages, setCurrentPage}) => {

    //const pages = 5;

    const numOfPages = [];

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
    }

    const [currentBtn, setCurrentBtn] = useState(1);

    useEffect(() => {
        setCurrentPage(currentBtn);
    }, [currentBtn, setCurrentPage])

    return(
        <div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
				<ul className="pagination">
                    <li className={`${currentBtn === 1 ? 'page-item disabled' : 'page-item'}`}><a href="#!"
                        onClick={ () => setCurrentBtn((prev) => prev === 1 ? prev : prev - 1)}
                    >Previous</a></li>

                   { 
                        numOfPages.map((page, index) => {
                            return (
                                <li key={index} className={`${currentBtn === page ? 'page-item active' : 'page-item'}`}><a href="#!" className="page-link" 
                                    onClick = {() => setCurrentBtn(page)}
                                >{page}</a></li>
                                )
                        })
                    }

                    <li className={`${currentBtn === numOfPages.length ? 'page-item disabled' : 'page-item'}`}><a href="#!"
                        onClick={ () => setCurrentBtn((next) => next === numOfPages.length ? next : next + 1)}
                    >Next</a></li>      
				</ul>
        </div>

    )
}

export default Pagination;

// <li className="page-item disabled"><a href="#!">Previous</a></li>
// <li className="page-item"><a href="#!" className="page-link">1</a></li>
// <li className="page-item"><a href="#!" className="page-link">2</a></li>
// <li className="page-item active"><a href="#!" className="page-link">3</a></li>
// <li className="page-item"><a href="#!" className="page-link">4</a></li>
// <li className="page-item"><a href="#!" className="page-link">5</a></li>
// <li className="page-item"><a href="#!" className="page-link">Next</a></li>
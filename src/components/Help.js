import React, {useState, useEffect} from "react"
import Decoration from "../assets/Decoration.svg"
import Pagination from "./pagination/Pagination"
import Organizations from "./pagination/Organizations"
import org from "../organizations.json"

function Help() {
    const [organizations, setOrganizations] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [orgPerPage] = useState(3)
    const [type, setType] = useState(1)


    useEffect(() => {
        setOrganizations(org)
    }, [])

    const Filter = organizations.filter(element => element.type === type)

    const indexOfLastOrg = currentPage * orgPerPage;
    const indexOfFirstOrg = indexOfLastOrg - orgPerPage;
    const currentOrganizations = Filter.slice(indexOfFirstOrg, indexOfLastOrg);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <section className="help">
                <div className="help-container">
                    <div className="help-content">
                        <h3>Komu pomagamy?</h3>
                        <div className="help-decoration"><img src={Decoration} alt="decoration"/></div>
                        <div className="help-buttons">
                            <button onClick={() => {
                                setType("fundation")
                            }} className="help-button">Fundacjom
                            </button>
                            <button onClick={() => {
                                setType("organization")
                            }} className="help-button">Organizacjom pozarządowym
                            </button>
                            <button onClick={() => {
                                setType("fundraising")
                            }} className="help-button">Lokalnym zbiórkom
                            </button>
                        </div>
                        <p className="help-description">
                            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                        <div className="help-list">

                            <Organizations organizations={currentOrganizations}/>
                            <Pagination
                                orgPerPage={orgPerPage}
                                totalElements={Filter.length}
                                paginate={paginate}/>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Help
export function Tabs(){
    const tabs = ['All', 'In-progress', 'Completed']
    //in react whenever we use the mapping tecnique we need to identify all the different buns with a unique key
    return (
        <nav>
            {tabs.map((tab,tabIndex) => (
                return(
                    <button key={tabIndex}>
                        <h4>{tab}</h4>
                    </button>
                )
            ))}
        </nav>
    )
}
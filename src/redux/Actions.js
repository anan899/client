 const getBeauty = async () => {
    const response = await fetch('https://beauty-form.herokuapp.com/beauty', {
        method: 'GET'
    });
    return response.json();
}      ;

const addBeauty = async (Name,Spouse,Title,Intro) => {
    const response = await fetch('https://beauty-form.herokuapp.com/beauty', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Name,
            Spouse,
            Title,
            Intro
        })
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};


const deleteBeauty = async(id)=>{
     fetch('https://beauty-form.herokuapp.com/beauty/'+id,{
        method:'DELETE'
    }).then(res=>res.json());
}

const updateBeauty = async({id,Name,Spouse,Title,Introduction})=>{

    const response = await fetch('https://beauty-form.herokuapp.com/beauty/'+id ,{
        method:'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id,
        Name,
        Spouse,
        Title,
        Introduction
    })

});

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;

}



export default {
    addBeauty,
    getBeauty,
    deleteBeauty,
    updateBeauty

};



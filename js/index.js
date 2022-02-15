function symptom_fetcher() {
    let query=document.getElementById("symptom_fetcher").value

    let res=fetch(`https://medical-api-lioncat2002.vercel.app/${query}`)

    res.then(
        r=>r.json()
    ).then(
        d=>
        document.getElementById('result').innerText=`You might have: ${d.disease}`
    )

}
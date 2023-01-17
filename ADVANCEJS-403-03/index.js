function calculate()
    {
        const billamount= +document.getElementById("billamount").value
        const serviceQuality= +document.getElementById("select").value
        const billpeople= +document.getElementById("billpeople").value

        const amt=(billamount*serviceQuality)/billpeople
        const total=document.getElementById("text")
        total.innerText=amt.toFixed(2)


    }

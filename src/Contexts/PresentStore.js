import { createContext, useEffect, useState } from "react";

export const PresentStore = createContext();

const PresentStoreProvider = (props) => {
  // current company
  const [ccn, setCcn] = useState(() => {
    const saved = localStorage.getItem("ccn");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [ccs, setCcs] = useState("");
  const [ccm, setCcm] = useState(() => {
    const saved = localStorage.getItem("ccm");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  //   Basic form
  const [mangername, setMangername] = useState(() => {
    const saved = localStorage.getItem("mangername");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [mangerposition, setMangerposition] = useState(() => {
    const saved = localStorage.getItem("mangerposition");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [mangertel, setMangertel] = useState(() => {
    const saved = localStorage.getItem("mangertel");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [mangermob, setMangermob] = useState(() => {
    const saved = localStorage.getItem("mangermob");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [mangerfax, setMangerfax] = useState(() => {
    const saved = localStorage.getItem("mangerfax");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [mangeremail, setMangeremail] = useState(() => {
    const saved = localStorage.getItem("mangeremail");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [mangeraddress, setMangeraddress] = useState(() => {
    const saved = localStorage.getItem("mangeraddress");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [headtel, setHeadtel] = useState(() => {
    const saved = localStorage.getItem("headtel");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [headmob, setHeadmob] = useState(() => {
    const saved = localStorage.getItem("headmob");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [headfax, setHeadfax] = useState(() => {
    const saved = localStorage.getItem("headfax");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [heademail, setHeademail] = useState(() => {
    const saved = localStorage.getItem("heademail");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [factorytel, setFactorytel] = useState(() => {
    const saved = localStorage.getItem("factorytel");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [factoryfax, setFactoryfax] = useState(() => {
    const saved = localStorage.getItem("factoryfax");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [workersnum, setWorkersnum] = useState(() => {
    const saved = localStorage.getItem("workersnum");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [firstmoney, setFirstmoney] = useState(() => {
    const saved = localStorage.getItem("firstmoney");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [seglmoney, setSeglmoney] = useState(() => {
    const saved = localStorage.getItem("seglmoney");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [taxs, setTaxs] = useState(() => {
    const saved = localStorage.getItem("taxs");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [moneyval, setMoneyval] = useState(() => {
    const saved = localStorage.getItem("moneyval");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [moneyy1, setMoneyy1] = useState(() => {
    const saved = localStorage.getItem("moneyy1");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [moneyy2, setMoneyy2] = useState(() => {
    const saved = localStorage.getItem("moneyy2");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [t1, setT1] = useState(() => {
    const saved = localStorage.getItem("t1");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [t2, setT2] = useState(() => {
    const saved = localStorage.getItem("t2");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [t3, setT3] = useState(() => {
    const saved = localStorage.getItem("t3");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [t4, setT4] = useState(() => {
    const saved = localStorage.getItem("t4");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [t5, setT5] = useState(() => {
    const saved = localStorage.getItem("t5");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [t6, setT6] = useState(() => {
    const saved = localStorage.getItem("t6");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [t7, setT7] = useState(() => {
    const saved = localStorage.getItem("t7");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [t8, setT8] = useState(() => {
    const saved = localStorage.getItem("t8");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [t9, setT9] = useState(() => {
    const saved = localStorage.getItem("t9");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [factoryAddress, setFactoryAddress] = useState(() => {
    const saved = localStorage.getItem("factoryAddress");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
// multiselect 
  const [list, setList] = useState([]);
  const addList = (mt1, mt2) =>{
      setList([...list, {mt1 , mt2}])
  }
  const removeItem=(e)=>{
    let x = e.target.getAttribute("removeName");
    setList(list.filter((item) => item.mt1 !== x));
  }
//   material table
const [savemsn, setSavemsn] = useState([]);
const addSavedata=(msn)=>{
    setSavemsn([...savemsn, {msn}])
}
const removeSavedata=(e)=>{
    let x = e.target.getAttribute("removeName");
    setSavemsn(savemsn.filter((item) => item.msn !== x));
}

// single select
const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC" },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];
  const NumberCode = [
    { value: "02", label: "02", isFixed: true },
    { value: "03", label: "03" },
    { value: "04", label: "04" },
    { value: "05", label: "05" },
    { value: "06", label: "06" },
    { value: "07", label: "07" },
    { value: "08", label: "08" },
    { value: "09", label: "09" },
    { value: "013", label: "013" },
    { value: "045", label: "045" },
  ];
  const [select1, setSelect1] = useState(colourOptions.value);
  const [select2, setSelect2] = useState(colourOptions.value);
  const [selectnumber, setSelectnumber] = useState(NumberCode.value);
  const ddhandler = e =>{
    setSelect1(e.value)
  }
  const ddhandler2 = e =>{
    setSelect2(e.value)
  }

  useEffect(() => {
    localStorage.setItem("ccm", JSON.stringify(ccm));
  }, [ccm]);
  useEffect(() => {
    localStorage.setItem("ccn", JSON.stringify(ccn));
  }, [ccn]);
  useEffect(() => {
    localStorage.setItem("mangername", JSON.stringify(mangername));
  }, [mangername]);
  useEffect(() => {
    localStorage.setItem("mangerposition", JSON.stringify(mangerposition));
  }, [mangerposition]);
  useEffect(() => {
    localStorage.setItem("mangertel", JSON.stringify(mangertel));
  }, [mangertel]);
  useEffect(() => {
    localStorage.setItem("mangermob", JSON.stringify(mangermob));
  }, [mangermob]);
  useEffect(() => {
    localStorage.setItem("mangerfax", JSON.stringify(mangerfax));
  }, [mangerfax]);
  useEffect(() => {
    localStorage.setItem("mangeremail", JSON.stringify(mangeremail));
  }, [mangeremail]);
  useEffect(() => {
    localStorage.setItem("mangeraddress", JSON.stringify(mangeraddress));
  }, [mangeraddress]);
  useEffect(() => {
    localStorage.setItem("headtel", JSON.stringify(headtel));
  }, [headtel]);
  useEffect(() => {
    localStorage.setItem("headmob", JSON.stringify(headmob));
  }, [headmob]);
  useEffect(() => {
    localStorage.setItem("headfax", JSON.stringify(headfax));
  }, [headfax]);
  useEffect(() => {
    localStorage.setItem("heademail", JSON.stringify(heademail));
  }, [heademail]);
  useEffect(() => {
    localStorage.setItem("factorytel", JSON.stringify(factorytel));
  }, [factorytel]);
  useEffect(() => {
    localStorage.setItem("factoryfax", JSON.stringify(factoryfax));
  }, [factoryfax]);
  useEffect(() => {
    localStorage.setItem("workersnum", JSON.stringify(workersnum));
  }, [workersnum]);
  useEffect(() => {
    localStorage.setItem("firstmoney", JSON.stringify(firstmoney));
  }, [firstmoney]);
  useEffect(() => {
    localStorage.setItem("seglmoney", JSON.stringify(seglmoney));
  }, [seglmoney]);
  useEffect(() => {
    localStorage.setItem("taxs", JSON.stringify(taxs));
  }, [taxs]);
  useEffect(() => {
    localStorage.setItem("moneyval", JSON.stringify(moneyval));
  }, [moneyval]);
  useEffect(() => {
    localStorage.setItem("moneyy1", JSON.stringify(moneyy1));
  }, [moneyy1]);
  useEffect(() => {
    localStorage.setItem("moneyy2", JSON.stringify(moneyy2));
  }, [moneyy2]);
  useEffect(() => {
    localStorage.setItem("t1", JSON.stringify(t1));
  }, [t1]);
  useEffect(() => {
    localStorage.setItem("t2", JSON.stringify(t2));
  }, [t2]);
  useEffect(() => {
    localStorage.setItem("t3", JSON.stringify(t3));
  }, [t3]);
  useEffect(() => {
    localStorage.setItem("t4", JSON.stringify(t4));
  }, [t4]);
  useEffect(() => {
    localStorage.setItem("t5", JSON.stringify(t5));
  }, [t5]);
  useEffect(() => {
    localStorage.setItem("t6", JSON.stringify(t6));
  }, [t6]);
  useEffect(() => {
    localStorage.setItem("t7", JSON.stringify(t7));
  }, [t7]);
  useEffect(() => {
    localStorage.setItem("t8", JSON.stringify(t8));
  }, [t8]);
  useEffect(() => {
    localStorage.setItem("t9", JSON.stringify(t9));
  }, [t9]);
  useEffect(() => {
    localStorage.setItem("factoryAddress", JSON.stringify(factoryAddress));
  }, [factoryAddress]);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      window.location.pathname = "/updateSteps";
      setValidated(true);
    }
  };

  return (
    <PresentStore.Provider
      value={{
        ccn,
        setCcn,
        ccs,
        setCcs,
        ccm,
        setCcm,
        validated,
        setValidated,
        handleSubmit,
        mangername,
        setMangername,
        mangerposition,
        setMangerposition,
        mangertel,
        setMangertel,
        mangermob,
        setMangermob,
        mangerfax,
        setMangerfax,
        mangeremail,
        setMangeremail,
        mangeraddress,
        setMangeraddress,
        headtel,
        setHeadtel,
        headmob,
        setHeadmob,
        headfax,
        setHeadfax,
        heademail,
        setHeademail,
        factorytel,
        setFactorytel,
        factoryfax,
        setFactoryfax,
        workersnum,
        setWorkersnum,
        firstmoney,
        setFirstmoney,
        seglmoney,
        setSeglmoney,
        taxs,
        setTaxs,
        moneyval,
        setMoneyval,
        moneyy1,
        setMoneyy1,
        moneyy2,
        setMoneyy2,
        t1,
        setT1,
        t2,
        setT2,
        t3,
        setT3,
        t4,
        setT4,
        t5,
        setT5,
        t6,
        setT6,
        t7,
        setT7,
        t8,
        setT8,
        t9,
        setT9,
        list,setList,addList,removeItem,savemsn,setSavemsn,addSavedata,removeSavedata,
        colourOptions,select1,setSelect1,select2,setSelect2 ,ddhandler,ddhandler2,NumberCode,selectnumber,setSelectnumber,factoryAddress,setFactoryAddress
      }}
    >
      {props.children}
    </PresentStore.Provider>
  );
};
export default PresentStoreProvider;

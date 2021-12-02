import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

const api = {
    urlPostConnection: "http://localhost:9000/login/",
    urlPostUser: "http://localhost:9000/user/inscription",
    urlGetUser: "http://localhost:9000/user",
    urlPutUserId: "http://localhost:9000/user/modify/:id",
    urlDeleteUserId: "http://localhost:9000/user/delete/:id",
    urlPostEntreprise: "http://localhost:9000/entreprise/inscription",
    urlGetEntreprise: "http://localhost:9000/entreprise",
    urlPutEntrepriseId: "http://localhost:9000/entreprise/modify/:id",
    urlDeleteEntrepriseId: "http://localhost:9000/entreprise/delete/:id",
    urlPostAdds: "http://localhost:9000/adds/create",
    urlGetAdds: "http://localhost:9000/adds",
    urlDeleteAddsId: "http://localhost:9000/adds/delete/:id",
    urlPutAddsId: "http://localhost:9000/adds/modify/:id",
    urlPostMail: "http://localhost:9000/mail/post"
};
export default function DataContextProvider(props) {
  /** cont pour export les route des post */
    const urlPostUser = api.urlPostUser;
    const urlPostEntreprise = api.urlPostEntreprise;
    const urlPostConnection = api.urlPostConnection;
    const urlPostAdds = api.urlPostAdds;
    const urlPostMail = api.urlPostMail ;
    const urlPutUserId = api.urlPutUserId;
    const urlPutEntrepriseId = api.urlPutEntrepriseId;
    const urlPutAddsId = api.urlPutAddsId;
    const urlDeleteUserId = api.urlDeleteUserId;
    const urlDeleteEntrepriseId = api.urlDeleteEntrepriseId;
    const urlDeleteAddsId = api.urlDeleteAddsId;
  /** state user, entreprise, adds, admin */
    const [apiDataUser, setApiDataUser]= useState(null);
    const [apiDataEntreprise, setApiDataEntreprise] = useState(null);
    const [apiDataAdds, setApiDataAdds] = useState(null);
  /** ---------------------------- questionnement de l'api --------------------------------- */
  //api user get
    const getAPIDataUser = async () => {
        const res = await axios.get(api.urlGetUser);
        setApiDataUser(res.data)
    };
    useEffect(() => {
        console.log("getApiUser");
        getAPIDataUser();
    }, []);
  //api entreprise get
    const getAPIDataEntreprise = async () => {
      const res = await axios.get(api.urlGetEntreprise);
      setApiDataEntreprise(res.data)
    };
    useEffect(() => {
      console.log("getApiEtreprise");
      getAPIDataEntreprise();
    }, []);
  //api adds get
    const getAPIDataAdds = async () => {
      const res = await axios.get(api.urlGetAdds);
      setApiDataAdds(res.data)
    };
    useEffect(() => {
      console.log("getApiAdds");
      getAPIDataAdds();
    }, []);
  
  /** -------------------------------- fin du questionnement de l'api ------------------------------ */
    return (
      <DataContext.Provider
        value={{
          apiDataUser,
          apiDataEntreprise,
          apiDataAdds,
          urlPostUser,
          urlPostEntreprise,
          urlPostMail,
          urlPostConnection,
          urlPostAdds,
          urlPutAddsId,
          urlPutEntrepriseId,
          urlPutUserId,
          urlDeleteAddsId,
          urlDeleteEntrepriseId,
          urlDeleteUserId
        }}
      >
        {props.children}
      </DataContext.Provider>
        
    );
}
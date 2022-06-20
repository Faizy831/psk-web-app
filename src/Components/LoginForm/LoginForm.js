import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useStyles } from "./LoginFormStyle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "./Btn";
import { useNavigate } from "react-router-dom";
import PlayerAPI from "../../api/PlayerAPI";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiFormLabel-root": {
      display: "none",
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: 400,
    height: 30,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    ["@media (max-width: 453px)"]: {
      width: 300,
    },
  },
}))(InputBase);

const LoginForm = () => {
  const classes = useStyles();

  const Navigate = useNavigate();

  const [idCard, SetIdCard] = useState(null);
  const [nationality, SetNationality] = useState(null);
  const [open, setOpen] = React.useState(false);

  const Login = async () => {
    const data = await PlayerAPI.getPlayerByIDCardAndNationality(
      idCard,
      nationality
    );
    if (data.length) {
      Navigate("/TraningSession", { state: { id: data[0].id } });
    }
    if (!data.length) {
      setOpen(true);
    }
  };

  return (
    <div className={classes.LoginContainer}>
      <form className={classes.root} noValidate>
        <div className={classes.IdCardWrapper}>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            className={classes.InputLable}
          >
            ID CARD
          </InputLabel>
          <FormControl>
            <BootstrapInput
              placeholder="ID CARD"
              id="bootstrap-input"
              type="number"
              value={idCard}
              onChange={(e) => SetIdCard(e.target.value)}
            />
          </FormControl>
        </div>
        <div className={classes.DropDownContianer}>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            className={classes.DropDownLable}
          >
            NATIONALITY
          </InputLabel>
          <Autocomplete
            id="combo-box-demo"
            options={nationalities}
            getOptionLabel={(option) => option.value}
            className={classes.DropDown}
            hiddenLabel="true"
            value={nationalities[nationality]}
            position="top"
            onChange={(event, value) => {
              SetNationality(value.key);
            }}
            renderInput={(params) => (
              <TextField
                placeholder="NATIONALITY"
                {...params}
                variant="outlined"
              />
            )}
          />
        </div>
        <div className={classes.ButtonWrapper}>
          <Button
            title="Login"
            onClick={() => {
              Login();
            }}
          />
        </div>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert severity="error">Invalid Credentials!</Alert>
      </Snackbar>
    </div>
  );
};

export default LoginForm;

const nationalities = [
  { key: "AND", value: "Andorran" },
  { key: "ARE", value: "Emirati" },
  { key: "AFG", value: "Afghan" },
  { key: "ATG", value: "Antiguan" },
  { key: "AIA", value: "Anguillian" },
  { key: "ALB", value: "Albanian" },
  { key: "ARM", value: "Armenian" },
  { key: "ANT", value: "Dutch" },
  { key: "AGO", value: "Angolan" },
  { key: "ATA", value: "Antarctica" },
  { key: "ARG", value: "Argentinean" },
  { key: "ASM", value: "American" },
  { key: "AUT", value: "Austrian" },
  { key: "AUS", value: "Australian" },
  { key: "ABW", value: "Aruban" },
  { key: "ALA", value: "Swedish" },
  { key: "AZE", value: "Azerbaijani" },
  { key: "BIH", value: "Bosnian" },
  { key: "BRB", value: "Barbadian" },
  { key: "BGD", value: "Bangladeshi" },
  { key: "BEL", value: "Belgian" },
  { key: "BFA", value: "Burkinabe" },
  { key: "BGR", value: "Bulgarian" },
  { key: "BHR", value: "Bahraini" },
  { key: "BDI", value: "Burundian" },
  { key: "BEN", value: "Beninese" },
  { key: "BLM", value: "Saint Barthélemy Islander" },
  { key: "BMU", value: "Bermudian" },
  { key: "BRN", value: "Bruneian" },
  { key: "BOL", value: "Bolivian" },
  { key: "BES", value: "Dutch" },
  { key: "BRA", value: "Brazilian" },
  { key: "BHS", value: "Bahamian" },
  { key: "BTN", value: "Bhutanese" },
  { key: "BVT", value: "Bouvet" },
  { key: "BWA", value: "Motswana" },
  { key: "BLR", value: "Belarusian" },
  { key: "BLZ", value: "Belizean" },
  { key: "CAN", value: "Canadian" },
  { key: "CCK", value: "Cocos" },
  { key: "COD", value: "Congolese" },
  { key: "CAF", value: "Central" },
  { key: "COG", value: "Congolese" },
  { key: "CHE", value: "Swiss" },
  { key: "CIV", value: "Ivorian" },
  { key: "COK", value: "Cook" },
  { key: "CHL", value: "Chilean" },
  { key: "CMR", value: "Cameroonian" },
  { key: "CHN", value: "Chinese" },
  { key: "COL", value: "Colombian" },
  { key: "CRI", value: "Costa" },
  { key: "SCG", value: "Montenegrins" },
  { key: "CTE", value: "Canton" },
  { key: "CUB", value: "Cuban" },
  { key: "CPV", value: "Cape" },
  { key: "CXR", value: "Christmas" },
  { key: "CYP", value: "Cypriot" },
  { key: "CZE", value: "Czech" },
  { key: "DEU", value: "German" },
  { key: "DJI", value: "Djibouti" },
  { key: "DNK", value: "Danish" },
  { key: "DMA", value: "Dominican" },
  { key: "DOM", value: "Dominican" },
  { key: "DZA", value: "Algerian" },
  { key: "ECU", value: "Ecuadorean" },
  { key: "EST", value: "Estonian" },
  { key: "EGY", value: "Egyptian" },
  { key: "ESH", value: "Sahrawi" },
  { key: "ERI", value: "Eritrean" },
  { key: "ESP", value: "Spanish" },
  { key: "ETH", value: "Ethiopian" },
  { key: "FIN", value: "Finnish" },
  { key: "FJI", value: "Fijian" },
  { key: "FLK", value: "Falkland" },
  { key: "FSM", value: "Micronesian" },
  { key: "FRO", value: "Faroese" },
  { key: "ATF", value: "French" },
  { key: "FRA", value: "French" },
  { key: "FXX", value: "Metropolitan" },
  { key: "GAB", value: "Gabonese" },
  { key: "GBR", value: "British" },
  { key: "GRD", value: "Grenadian" },
  { key: "GEO", value: "Georgian" },
  { key: "GUF", value: "French" },
  { key: "GGY", value: "Channel" },
  { key: "GHA", value: "Ghanaian" },
  { key: "GIB", value: "Gibraltar" },
  { key: "GRL", value: "Greenlandic" },
  { key: "GMB", value: "Gambian" },
  { key: "GIN", value: "Guinean" },
  { key: "GLP", value: "Guadeloupian" },
  { key: "GNQ", value: "Equatorial" },
  { key: "GRC", value: "Greek" },
  { key: "SGS", value: "South" },
  { key: "GTM", value: "Guatemalan" },
  { key: "GUM", value: "Guamanian" },
  { key: "GNB", value: "Guinea-Bissauan" },
  { key: "GUY", value: "Guyanese" },
  { key: "HKG", value: "Chinese" },
  { key: "HMD", value: "Heard" },
  { key: "HND", value: "Honduran" },
  { key: "HRV", value: "Croatian" },
  { key: "HTI", value: "Haitian" },
  { key: "HUN", value: "Hungarian" },
  { key: "IDN", value: "Indonesian" },
  { key: "IRL", value: "Irish" },
  { key: "ISR", value: "Israeli" },
  { key: "IMN", value: "Manx" },
  { key: "IND", value: "Indian" },
  { key: "IOT", value: "Indian" },
  { key: "IRQ", value: "Iraqi" },
  { key: "IRN", value: "Iranian" },
  { key: "ISL", value: "Icelander" },
  { key: "ITA", value: "Italian" },
  { key: "JEY", value: "Channel" },
  { key: "JAM", value: "Jamaican" },
  { key: "JOR", value: "Jordanian" },
  { key: "JPN", value: "Japanese" },
  { key: "JTN", value: "Johnston" },
  { key: "KEN", value: "Kenyan" },
  { key: "KGZ", value: "Kirghiz" },
  { key: "KHM", value: "Cambodian" },
  { key: "KIR", value: "I-Kiribati" },
  { key: "COM", value: "Comoran" },
  { key: "KNA", value: "Kittian" },
  { key: "PRK", value: "North" },
  { key: "KOR", value: "South" },
  { key: "KWT", value: "Kuwaiti" },
  { key: "CYM", value: "Caymanian" },
  { key: "KAZ", value: "Kazakhstani" },
  { key: "LAO", value: "Laotian" },
  { key: "LBN", value: "Lebanese" },
  { key: "LCA", value: "Saint" },
  { key: "LIE", value: "Liechtensteiner" },
  { key: "LKA", value: "Sri" },
  { key: "LBR", value: "Liberian" },
  { key: "LSO", value: "Mosotho" },
  { key: "LTU", value: "Lithuanian" },
  { key: "LUX", value: "Luxembourger" },
  { key: "LVA", value: "Latvian" },
  { key: "LBY", value: "Libyan" },
  { key: "MAR", value: "Moroccan" },
  { key: "MCO", value: "Monegasque" },
  { key: "MDA", value: "Moldovan" },
  { key: "MNE", value: "Montenegrin" },
  { key: "MAF", value: "Saint" },
  { key: "MDG", value: "Malagasy" },
  { key: "MHL", value: "Marshallese" },
  { key: "MID", value: "Midway" },
  { key: "MKD", value: "Macedonian" },
  { key: "MLI", value: "Malian" },
  { key: "MMR", value: "Myanmar" },
  { key: "MNG", value: "Mongolian" },
  { key: "MAC", value: "Chinese" },
  { key: "MNP", value: "American" },
  { key: "MTQ", value: "French" },
  { key: "MRT", value: "Mauritanian" },
  { key: "MSR", value: "Montserratian" },
  { key: "MLT", value: "Maltese" },
  { key: "MUS", value: "Mauritian" },
  { key: "MDV", value: "Maldivan" },
  { key: "MWI", value: "Malawian" },
  { key: "MEX", value: "Mexican" },
  { key: "MYS", value: "Malaysian" },
  { key: "MOZ", value: "Mozambican" },
  { key: "NAM", value: "Namibian" },
  { key: "NCL", value: "New" },
  { key: "NER", value: "Nigerian" },
  { key: "NFK", value: "Norfolk" },
  { key: "NGA", value: "Nigerian" },
  { key: "NIC", value: "Nicaraguan" },
  { key: "NLD", value: "Dutch" },
  { key: "NOR", value: "Norwegian" },
  { key: "NPL", value: "Nepalese" },
  { key: "ATN", value: "Dronning" },
  { key: "NRU", value: "Nauruan" },
  { key: "NTZ", value: "Neutral" },
  { key: "NIU", value: "Niuean" },
  { key: "NZL", value: "New" },
  { key: "OMN", value: "Omani" },
  { key: "PAN", value: "Panamanian" },
  { key: "PCI", value: "Pacific" },
  { key: "PER", value: "Peruvian" },
  { key: "PYF", value: "French" },
  { key: "PNG", value: "Papua" },
  { key: "PHL", value: "Filipino" },
  { key: "PAK", value: "Pakistani" },
  { key: "POL", value: "Polish" },
  { key: "SPM", value: "French" },
  { key: "PCN", value: "Pitcairn" },
  { key: "PRI", value: "Puerto" },
  { key: "PSE", value: "Palestinian" },
  { key: "PRT", value: "Portuguese" },
  { key: "PUS", value: "U.S." },
  { key: "PLW", value: "Palauan" },
  { key: "PRY", value: "Paraguayan" },
  { key: "PCZ", value: "Panama" },
  { key: "QAT", value: "Qatari" },
  { key: "REU", value: "French" },
  { key: "ROU", value: "Romanian" },
  { key: "SRB", value: "Serbian" },
  { key: "RUS", value: "Russian" },
  { key: "RWA", value: "Rwandan" },
  { key: "SAU", value: "Saudi" },
  { key: "SLB", value: "Solomon" },
  { key: "SYC", value: "Seychellois" },
  { key: "SDN", value: "Sudanese" },
  { key: "SWE", value: "Swedish" },
  { key: "SGP", value: "Singaporean" },
  { key: "SHN", value: "Saint" },
  { key: "SVN", value: "Slovene" },
  { key: "SJM", value: "Norwegian" },
  { key: "SVK", value: "Slovak" },
  { key: "SLE", value: "Sierra" },
  { key: "SMR", value: "Sammarinese" },
  { key: "SEN", value: "Senegalese" },
  { key: "SOM", value: "Somali" },
  { key: "SUR", value: "Surinamer" },
  { key: "STP", value: "Sao" },
  { key: "SLV", value: "Salvadoran" },
  { key: "SYR", value: "Syrian" },
  { key: "SWZ", value: "Swazi" },
  { key: "TCA", value: "Turks" },
  { key: "TCD", value: "Chadian" },
  { key: "ATF", value: "French" },
  { key: "TGO", value: "Togolese" },
  { key: "THA", value: "Thai" },
  { key: "TJK", value: "Tadzhik" },
  { key: "TKL", value: "Tokelauan" },
  { key: "TLS", value: "East" },
  { key: "TKM", value: "Turkmen" },
  { key: "TUN", value: "Tunisian" },
  { key: "TON", value: "Tongan" },
  { key: "TUR", value: "Turkish" },
  { key: "TTO", value: "Trinidadian" },
  { key: "TUV", value: "Tuvaluan" },
  { key: "TWN", value: "Taiwanese" },
  { key: "TZA", value: "Tanzanian" },
  { key: "UKR", value: "Ukrainian" },
  { key: "UGA", value: "Ugandan" },
  { key: "UMI", value: "American" },
  { key: "USA", value: "American" },
  { key: "URY", value: "Uruguayan" },
  { key: "UZB", value: "Uzbekistani" },
  { key: "VAT", value: "Italian" },
  { key: "VCT", value: "Saint" },
  { key: "VDR", value: "North" },
  { key: "VEN", value: "Venezuelan" },
  { key: "VGB", value: "Virgin" },
  { key: "VIR", value: "Virgin" },
  { key: "VNM", value: "Vietnamese" },
  { key: "VUT", value: "Ni-Vanuatu" },
  { key: "WLF", value: "Wallis" },
  { key: "WAK", value: "Wake" },
  { key: "WSM", value: "Samoan" },
  { key: "YEM", value: "Yemeni" },
  { key: "MYT", value: "French" },
  { key: "ZAF", value: "South" },
  { key: "ZMB", value: "Zambian" },
  { key: "ZWE", value: "Zimbabwean" },
];

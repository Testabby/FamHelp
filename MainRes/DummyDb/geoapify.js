import React, { useState } from 'react'
import { View , TextInput,TouchableOpacity,Text} from 'react-native';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
// import '@geoapify/geocoder-autocomplete/styles/minimal.css'

const AutocompleteAdd = () => {
    const [SearchText, setSearchTex] = useState("")
return(
    <View>
        <TextInput
        style={{ 
            height: 40, backgroundColor:"white",
            marginHorizontal:30, paddingLeft:20, borderRadius:10 }}
        placeholder=" Search your location"
        // onChangeText={text => this.searchItems(text)}
        value={SearchText}
      >
       
      </TextInput>
    </View>
   ) };

    export default AutocompleteAdd;
//     const[value,setvalue]=useState('rewa');
//     const [type, settype] = useState('street')

//   function onPlaceSelect(value) {
//     console.log(value);
//   }

//   function onSuggectionChange(value) {
//     console.log(value);
//   }

//   function preprocessHook(value) {
//     return `${value}, Munich, Germany`
//   }

//   function postprocessHook(feature) {
//     return feature.properties.street;
//   }

//   function suggestionsFilter(suggestions) {
//     const processedStreets = [];

//     const filtered = suggestions.filter(value => {
//       if (!value.properties.street || processedStreets.indexOf(value.properties.street) >= 0) {
//         return false;
//       } else {
//         processedStreets.push(value.properties.street);
//         return true;
//       }
//     })

//     return filtered;
//   }

//   return <GeoapifyContext apiKey="0e919525615c40d3b0ffbcdc309f68c1">

//       <GeoapifyGeocoderAutocomplete
//         placeSelect={onPlaceSelect}
//         suggestionsChange={onSuggectionChange}
//       />

// <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
//         value={value}
//         type={type}
//         lang={value}
//         position={value}
//         countryCodes={value}
//         limit={value}
//         filterByCountryCode={value}
//         filterByCircle={value}
//         filterByRect={value}
//         filterByPlace={value}
//         biasByCountryCode={value}
//         biasByCircle={value}
//         biasByRect={value}
//         biasByProximity={value}
        
//         placeSelect={onPlaceSelect}
//         suggestionsChange={onSuggectionChange}
// />
    

//       <GeoapifyGeocoderAutocomplete
//         placeSelect={onPlaceSelect}
//         suggestionsChange={onSuggectionChange}
//         preprocessHook={preprocessHook}
//         postprocessHook={postprocessHook}
//         suggestionsFilter={suggestionsFilter}
//       />
//     </GeoapifyContext>


//   <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
    //     value={value}
    //     type={type}
    //     lang={language}
    //     position={position}
    //     countryCodes={countryCodes}
    //     limit={limit}
    //     filterByCountryCode={filterByCountryCode}
    //     filterByCircle={filterByCircle}
    //     filterByRect={filterByRect}
    //     filterByPlace={filterByPlace}
    //     biasByCountryCode={biasByCountryCode}
    //     biasByCircle={biasByCircle}
    //     biasByRect={biasByRect}
    //     biasByProximity={biasByProximity}

    //     placeSelect={onPlaceSelect}
    //     suggestionsChange={onSuggectionChange}
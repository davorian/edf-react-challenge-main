"use client"

import {JSX} from "react"
import {Flex} from "@chakra-ui/react"
import {RawCountryType} from "../types.ts"

const CountryListItem = ({ name: {common, official}, flag, capital }: RawCountryType): JSX.Element => {

    return (
        <li>
            <Flex
                direction="row"
                alignItems="center"
                layerStyle="card"
                flex={1}
                marginTop={2}
            >
                    <Flex style={{fontSize:'36px', paddingRight:'4px'}} flex={1}>
                            <i aria-hidden="true" title={official}>{flag}</i>
                            <span hidden>{`${official} flag`}</span>
                    </Flex>
                    <Flex style={{paddingRight:'4px'}} flex={5}><p style={{fontSize:'24px'}}>{common}</p></Flex>
                    <Flex flex={2}><p style={{fontSize:'24px'}}>{Array.isArray(capital) ? capital[capital.length-1]:capital ? capital : '-'}</p></Flex>

            </Flex>
        </li>
    )
}

export default CountryListItem

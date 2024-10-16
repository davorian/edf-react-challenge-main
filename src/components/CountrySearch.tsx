import {useState} from "react"

import {Button, Flex, Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import {useCountry} from "../hooks/useCountry.ts"

const CountrySearch = () => {
    const [search, setSearch] = useState("")
    const { fetchCountries } = useCountry()

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
        await fetchCountries(search)
    }

    return (
        <Flex as="form" layerStyle="card" onSubmit={handleSubmit}>
            <InputGroup size="lg">
                <Input
                    fontSize="24px"
                    pr="4rem"
                    placeholder="Search for a country..."
                    size='lg'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <InputRightElement width="6em">
                    <Button fontSize="24px" color={"white"} bg="#C82C00" _hover={{ bg: "#A02300" }} h="3rem" size="lg" type="submit">
                        Search
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Flex>
    )
}

export default CountrySearch
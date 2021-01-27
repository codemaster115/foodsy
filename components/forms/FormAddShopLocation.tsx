import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import {
  FormControl,
  Input,
  FormLabel,
  Select,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react"
import {
  LocationType,
  ShopLocationCreateInput,
} from "../../apollo/@types/codegen/graphql"

type FormAddShopLocationProps = {
  onSubmit: SubmitHandler<ShopLocationCreateInput>
}

const FormAddShopLocation: React.FC<FormAddShopLocationProps> = ({
  onSubmit,
}) => {
  const { register, handleSubmit, errors, formState } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="name" isRequired isInvalid={errors.name}>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          placeholder="Name"
          ref={register({ required: "Name is required" })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl id="city" isRequired isInvalid={errors.city}>
        <FormLabel>City</FormLabel>
        <Input
          name="city"
          placeholder="City"
          ref={register({ required: "City is required" })}
        />
        <FormErrorMessage>
          {errors.city && errors.city.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl id="locationType" isRequired isInvalid={errors.locationType}>
        <FormLabel>Location Type</FormLabel>
        <Select
          name="locationType"
          placeholder="Select country"
          ref={register({ required: "Location type is required" })}
        >
          <option value={LocationType.TrainStation}>Train Situation</option>
          <option value={LocationType.City}>City</option>
        </Select>
        <FormErrorMessage>
          {errors.locationType && errors.locationType.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl id="lat">
        <FormLabel>Latitude</FormLabel>
        <Input name="lat" placeholder="Latitude" ref={register} />
      </FormControl>
      <FormControl id="lon">
        <FormLabel>Longitude</FormLabel>
        <Input name="lon" placeholder="Longitude" ref={register({})} />
      </FormControl>
      <Button
        mt={4}
        colorScheme="teal"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  )
}

export default FormAddShopLocation

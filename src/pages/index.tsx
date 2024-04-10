import CustomHead from "@/components/CustomHead";
import FormWrapper from "@/components/FormWrapper";
import NumericFormatCustom from "@/components/NumericFormat";
import { resolveCommonRules } from "@/utils/resolvers";
import { MenuItem, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const initialValues = {
  name: "",
  lastName: "",
  rol: "",
  amount: "",
};

export default function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    mode: "all",
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <CustomHead title="Home" customRoute={"/"} />{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-bold text-2xl mt-5 text-primary px-5">
          athena-app
        </h2>
        <FormWrapper btnTitle="Guardar" isLoading={false}>
          <p className="default_title">Information</p>
          {/* Form */}

          <div className="inline-flex flex-col gap-5">
            <Controller
              name="name"
              control={control}
              rules={{
                ...resolveCommonRules({ fieldName: "Name" }),
              }}
              render={({ field, fieldState }) => (
                <TextField
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                  type="text"
                  error={fieldState.error?.message !== undefined}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{
                ...resolveCommonRules({ fieldName: "LastName" }),
              }}
              render={({ field, fieldState }) => (
                <TextField
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                  type="text"
                  error={fieldState.error?.message !== undefined}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  helperText={errors.lastName?.message}
                />
              )}
            />
            <Controller
              name="rol"
              control={control}
              rules={{
                ...resolveCommonRules({ fieldName: "Type" }),
              }}
              render={({ field, fieldState }) => (
                <>
                  <TextField
                    select
                    variant={"outlined"}
                    style={{ width: "100%" }}
                    label="Type of User"
                    value={field.value}
                    onChange={(e) => field.onChange(e)}
                    helperText={errors.rol?.message}
                    error={fieldState.error?.message !== undefined}
                  >
                    {["Administrator", "Customer", "Provider"].map((type) => (
                      <MenuItem value={type} key={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </>
              )}
            />
            <Controller
              name="amount"
              control={control}
              rules={{
                ...resolveCommonRules({ fieldName: "Amount" }),
              }}
              render={({ field, fieldState }) => (
                <TextField
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                  name="amount"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                  error={fieldState.error?.message !== undefined}
                  id={field.name}
                  label="Amount"
                  variant="outlined"
                  helperText={errors.amount?.message}
                  className="w-full"
                />
              )}
            />
          </div>
        </FormWrapper>
      </form>
    </>
  );
}

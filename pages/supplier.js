import { useState } from "react";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AddSupplier = () => {
  const [supplierName, setSupplierName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSupplier = {
      supplierName,
      address,
      phoneNumber,
    };

    const response = await fetch("/api/suppliers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSupplier),
    });

    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add Supplier
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="supplierName"
            label="Supplier Name"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddSupplier;
import { useState } from 'react';
import { Container, TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { Gemini } from './Gemini';
import { test } from './firebase';
import Markdown from 'react-markdown';
function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setResult(prompt);
    try {
      const gresult = await Gemini(prompt);
      setResult(gresult)
    }
    catch (error) {
      console.log(error);
    }
    // Process the prompt and set the result
    // Replace this with your actual prompt processing logic
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Enter your prompt"
              variant="outlined"
              fullWidth
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Result</Typography>
            <Markdown>{result}</Markdown>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

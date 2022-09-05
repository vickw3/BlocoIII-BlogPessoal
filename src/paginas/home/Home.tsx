import "./Home.css";

import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="container">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo-h3">Bem-Vindo!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo-h5">Projeto Blog Pessoal - Generation (Turma 56)</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="btn">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://img.freepik.com/vetores-premium/raposa-de-desenho-animado-bonito-em-estilo-simples-simples-moderno_192760-108.jpg?w=2000" alt="" width="433px" height="512px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                  
                </Grid>
            </Grid>
    </>
  );
}

export default Home;
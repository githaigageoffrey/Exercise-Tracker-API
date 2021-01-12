const config = require('./@project/config');

const app = config.express()
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
config.mongo.connect(uri,{useNewUrlParser: true, useCreateIndex:true,useUnifiedTopology:true});



app.use(config.cors());
app.use(config.express.json());


app.use('/exercises',config.exercisesRouter);
app.use('/users',config.usersRouter);

app.listen(port, ()=>{
    console.log("Listening to port: "+port);
});


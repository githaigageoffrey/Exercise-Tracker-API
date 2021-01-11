const config = require('./@project/config');

const app = config.express()
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
config.mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex:true,useUnifiedTopology:true});

const connection = config.mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb successfully established");
});

app.use(config.cors());
app.use(config.express.json());


app.use('/exercises',config.usersRouter);
app.use('/users',config.usersRouter);

app.listen(port, ()=>{
    console.log("Listening to port: "+port);
});


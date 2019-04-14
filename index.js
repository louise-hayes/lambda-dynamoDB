console.log('Loading function');

exports.handler = function (event, context, cb) {
    console.log(JSON.stringify(event, null, 2));
    event.Records.forEach(function (record) {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log('DynamoDB Record: %j', record.dynamodb);
        console.log('DynamoDB content:', context);

    });
    cb(null, "louise message");
};

exports.handler2 = function (event, context) {
    return new Promise( (resolve, reject) =>{
        console.log(JSON.stringify(event, null, 2));
        event.Records.forEach(function (record) {
            console.log(record.eventID);
            console.log(record.eventName);
            console.log('DynamoDB Record: %j', record.dynamodb);
            console.log('DynamoDB content:', context);
        })
        resolve("louise message2")
    })
};

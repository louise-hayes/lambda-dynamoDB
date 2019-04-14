const index = require('../index');
// import index from ('../index');

let event =
{
    "Records": [
        {
            "eventID": "1",
            "eventName": "INSERT",
            "eventVersion": "1.0",
            "eventSource": "aws:dynamodb",
            "awsRegion": "us-east-1",
            "dynamodb": {
                "Keys": {
                    "Id": {
                        "N": "101"
                    }
                },
                "NewImage": {
                    "Message": {
                        "S": "New item!"
                    },
                    "Id": {
                        "N": "101"
                    }
                },
                "SequenceNumber": "111",
                "SizeBytes": 26,
                "StreamViewType": "NEW_AND_OLD_IMAGES"
            },
            "eventSourceARN": "stream-ARN"
        },
        {
            "eventID": "2",
            "eventName": "MODIFY",
            "eventVersion": "1.0",
            "eventSource": "aws:dynamodb",
            "awsRegion": "us-east-1",
            "dynamodb": {
                "Keys": {
                    "Id": {
                        "N": "101"
                    }
                },
                "NewImage": {
                    "Message": {
                        "S": "This item has changed"
                    },
                    "Id": {
                        "N": "101"
                    }
                },
                "OldImage": {
                    "Message": {
                        "S": "New item!"
                    },
                    "Id": {
                        "N": "101"
                    }
                },
                "SequenceNumber": "222",
                "SizeBytes": 59,
                "StreamViewType": "NEW_AND_OLD_IMAGES"
            },
            "eventSourceARN": "stream-ARN"
        },
        {
            "eventID": "3",
            "eventName": "REMOVE",
            "eventVersion": "1.0",
            "eventSource": "aws:dynamodb",
            "awsRegion": "us-east-1",
            "dynamodb": {
                "Keys": {
                    "Id": {
                        "N": "101"
                    }
                },
                "OldImage": {
                    "Message": {
                        "S": "This item has changed"
                    },
                    "Id": {
                        "N": "101"
                    }
                },
                "SequenceNumber": "333",
                "SizeBytes": 38,
                "StreamViewType": "NEW_AND_OLD_IMAGES"
            },
            "eventSourceARN": "stream-ARN"
        }
    ]
}

test('message contains louise message', (done) => {
    index.handler(event, {}, function callback(err, result) {
        expect(result).toBe("louise message");
        done();
    });


});

test('message contains louise message2', (done) => {
    index.handler2(event, {})
        .then(result => {
            expect(result).toBe("louise message2");
            done();
        })
});


test('blah', (done) => {


    index.handler2(event, {})
        .then(result => {
            expect(result).toBe("louise message");
            done();

        })
        .catch(rej => {
            console.log(rej);
        });

});
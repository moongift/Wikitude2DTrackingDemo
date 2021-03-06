// 作成したトラッカー（WTCファイル）を指定
var tracker = new AR.ClientTracker("assets/tracker.wtc");

// 表示する3Dモデルを指定
var modelDragon = new AR.Model("assets/dragon_floating.wt3", {
                                     scale: {
                                        x: 0.0007,
                                        y: 0.0007,
                                        z: 0.0007
                                     },
                                     translate: {
                                        x: 0.0,
                                        y: 0.0,
                                        z: 0.0
                                     },
                                     rotate: {
                                        roll: 25,
                                        tilt: -100.0,
                                     }
                                     });

// 2つの情報を設定
var trackable = new AR.Trackable2DObject(tracker, "*", {
                                                    drawables: {
                                                        cam: [modelDragon]
                                                    },
                                            });

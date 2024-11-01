# import tensorflow
# from tensorflow.keras.models import load_model

# model = load_model('crop_model.h5')
# import os
# print(os.path.abspath('model/crop_model.h5'))

from keras.models import load_model
# model = load_model(r'C:\Users\Denis\Desktop\crop-recommendation\model\crop_model.h5')
import os

model_path = 'C:/Users/Denis/Desktop/crop-recommendation/j_models/jessee_model/jessee_crop_model.h5'
print(f"Does the model file exist? {os.path.exists(model_path)}")


# print(model.summary())

# if model:
#     print('model available!')
    
# else:
#     print("Can't load")
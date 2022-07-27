
from flask_caching import Cache
from flask import Flask,render_template,request
import pandas as pd
from flask_caching import Cache
import joblib
import numpy as np

clf=joblib.load("shealth.pkl")
cache=Cache()
app=Flask(__name__)
app.config['CACHE_TYPE']='simple'
cache.init_app(app)

i=0
ds=pd.read_csv("Bk.csv",encoding="unicode_escape")
df=pd.read_csv("Bk.csv",encoding="unicode_escape")
a=ds.columns.to_numpy()
dsa=ds.to_numpy()
dataset=dsa

@app.route('/',methods=['GET','POST'])

def main():
        
    if request.method=="POST":
        global i
        i=i+1
        data=request.form['disease']
        if data=='1':
            q=a[i]
            asd,dd=dat1()
            lendf=len(asd)
            if lendf==0:
                dummy=pred(dd)
                return f'<h1>  {dummy}</h1>'
            
            return render_template('main.html',quest=q,length=lendf,disease=dd,daata=asd)
  

        if data=='0':  
            q=a[i]
            asd,dd=dat2()
            lendf=len(asd)
            if lendf==0:
                dummy=pred(dd)
                return f'<h1>  {dummy}</h1>'
            return render_template('main.html',quest=q,length=lendf,disease=dd,daata=asd)
  
    else:
        return render_template('main.html',quest='Itching')  

# @cache.cached(timeout=1)
def dat1():
    asdf=1
    qd=a[i-1]
    dis=df.iloc[0:1 , -1:].to_numpy()
    df.drop(df.index[df[qd] != asdf], inplace=True)
    return df,dis

# @cache.cached(timeout=0)
def dat2():
    asdf=0
    qd=a[i-1]
    dis=df.iloc[0:1 , -1:].to_numpy()
    df.drop(df.index[df[qd] != asdf], inplace=True)
    return df,dis 

def pred(dd):
    dss=pd.read_csv("Bk.csv",encoding="unicode_escape")

    dff=dss.to_numpy()


    for i in range(len(dff)):
        if dff[i][132]==dd:
            j=i
    bb=dff[j]
    asd=np.delete(bb,-1)
    asd=[asd]
    predicted=clf.predict(asd)[0]
    return predicted
    

if __name__=="__main__":
    app.run(debug=True)
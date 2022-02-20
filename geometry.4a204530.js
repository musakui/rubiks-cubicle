import{V as v,B as he,T as ee,e as nt,a as I,b as z,S as ce,C as _e,c as V,M as Q,_ as fe,D as ze,d as rt,f as J,A as at,g as Fe,h as Y,Q as N,i as M,j as ne,N as Se,k as He,l as ot,m as G,L as me,G as st,s as E,n as ae,o as Be,p as L,I as lt,P as ft,q as x,r as ut,t as ht,u as Me,v as Ie,w as ge,x as Oe,W as Ue,y as q,E as oe,z as Ve,F as X,H as xe,J as ct,K as dt,O as Ge,R as w,U as Xe}from"./scene.c7026f2c.js";import{_ as W,O as se,L as re,x as F,C as pt,v as Re,z as g,S as pe,E as H,G as D,P as ye}from"./vendor.db607760.js";import"./index.22ca5c64.js";var We;(function(o){o[o.CW=0]="CW",o[o.CCW=1]="CCW"})(We||(We={}));var vt=function(){function o(){}return o.Interpolate=function(t,e,i,n,r){for(var a=1-3*n+3*e,s=3*n-6*e,f=3*e,l=t,u=0;u<5;u++){var h=l*l,c=h*l,p=a*c+s*h+f*l,d=1/(3*a*h+2*s*l+f);l-=(p-t)*d,l=Math.min(1,Math.max(0,l))}return 3*Math.pow(1-l,2)*l*i+3*(1-l)*Math.pow(l,2)*r+Math.pow(l,3)},o}(),Ae=function(){function o(t,e){this.width=t,this.height=e}return o.prototype.toString=function(){return"{W: "+this.width+", H: "+this.height+"}"},o.prototype.getClassName=function(){return"Size"},o.prototype.getHashCode=function(){var t=this.width|0;return t=t*397^(this.height|0),t},o.prototype.copyFrom=function(t){this.width=t.width,this.height=t.height},o.prototype.copyFromFloats=function(t,e){return this.width=t,this.height=e,this},o.prototype.set=function(t,e){return this.copyFromFloats(t,e)},o.prototype.multiplyByFloats=function(t,e){return new o(this.width*t,this.height*e)},o.prototype.clone=function(){return new o(this.width,this.height)},o.prototype.equals=function(t){return t?this.width===t.width&&this.height===t.height:!1},Object.defineProperty(o.prototype,"surface",{get:function(){return this.width*this.height},enumerable:!1,configurable:!0}),o.Zero=function(){return new o(0,0)},o.prototype.add=function(t){var e=new o(this.width+t.width,this.height+t.height);return e},o.prototype.subtract=function(t){var e=new o(this.width-t.width,this.height-t.height);return e},o.Lerp=function(t,e,i){var n=t.width+(e.width-t.width)*i,r=t.height+(e.height-t.height)*i;return new o(n,r)},o}(),Ye=function(){function o(){}return Object.defineProperty(o,"ForceFullSceneLoadingForIncremental",{get:function(){return o._ForceFullSceneLoadingForIncremental},set:function(t){o._ForceFullSceneLoadingForIncremental=t},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ShowLoadingScreen",{get:function(){return o._ShowLoadingScreen},set:function(t){o._ShowLoadingScreen=t},enumerable:!1,configurable:!0}),Object.defineProperty(o,"loggingLevel",{get:function(){return o._loggingLevel},set:function(t){o._loggingLevel=t},enumerable:!1,configurable:!0}),Object.defineProperty(o,"CleanBoneMatrixWeights",{get:function(){return o._CleanBoneMatrixWeights},set:function(t){o._CleanBoneMatrixWeights=t},enumerable:!1,configurable:!0}),o._ForceFullSceneLoadingForIncremental=!1,o._ShowLoadingScreen=!0,o._CleanBoneMatrixWeights=!1,o._loggingLevel=0,o}(),le=function(){function o(t,e,i,n,r){n===void 0&&(n=!1),r===void 0&&(r=null),this.delayLoadState=0,this._totalVertices=0,this._isDisposed=!1,this._indexBufferIsUpdatable=!1,this._positionsCache=[],this.useBoundingInfoFromGeometry=!1,this.id=t,this.uniqueId=e.getUniqueId(),this._engine=e.getEngine(),this._meshes=[],this._scene=e,this._vertexBuffers={},this._indices=[],this._updatable=n,i?this.setAllVerticesData(i,n):(this._totalVertices=0,this._indices=[]),this._engine.getCaps().vertexArrayObject&&(this._vertexArrayObjects={}),r&&(this.applyToMesh(r),r.computeWorldMatrix(!0))}return Object.defineProperty(o.prototype,"boundingBias",{get:function(){return this._boundingBias},set:function(t){this._boundingBias?this._boundingBias.copyFrom(t):this._boundingBias=t.clone(),this._updateBoundingInfo(!0,null)},enumerable:!1,configurable:!0}),o.CreateGeometryForMesh=function(t){var e=new o(o.RandomId(),t.getScene());return e.applyToMesh(t),e},Object.defineProperty(o.prototype,"meshes",{get:function(){return this._meshes},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"extend",{get:function(){return this._extend},enumerable:!1,configurable:!0}),o.prototype.getScene=function(){return this._scene},o.prototype.getEngine=function(){return this._engine},o.prototype.isReady=function(){return this.delayLoadState===1||this.delayLoadState===0},Object.defineProperty(o.prototype,"doNotSerialize",{get:function(){for(var t=0;t<this._meshes.length;t++)if(!this._meshes[t].doNotSerialize)return!1;return!0},enumerable:!1,configurable:!0}),o.prototype._rebuild=function(){this._vertexArrayObjects&&(this._vertexArrayObjects={}),this._meshes.length!==0&&this._indices&&(this._indexBuffer=this._engine.createIndexBuffer(this._indices));for(var t in this._vertexBuffers){var e=this._vertexBuffers[t];e._rebuild()}},o.prototype.setAllVerticesData=function(t,e){t.applyToGeometry(this,e),this.notifyUpdate()},o.prototype.setVerticesData=function(t,e,i,n){i===void 0&&(i=!1),i&&Array.isArray(e)&&(e=new Float32Array(e));var r=new v(this._engine,e,t,i,this._meshes.length===0,n);this.setVerticesBuffer(r)},o.prototype.removeVerticesData=function(t){this._vertexBuffers[t]&&(this._vertexBuffers[t].dispose(),delete this._vertexBuffers[t])},o.prototype.setVerticesBuffer=function(t,e){e===void 0&&(e=null);var i=t.getKind();if(this._vertexBuffers[i]&&this._vertexBuffers[i].dispose(),this._vertexBuffers[i]=t,i===v.PositionKind){var n=t.getData();e!=null?this._totalVertices=e:n!=null&&(this._totalVertices=n.length/(t.byteStride/4)),this._updateExtend(n),this._resetPointsArrayCache();for(var r=this._meshes,a=r.length,s=0;s<a;s++){var f=r[s];f._boundingInfo=new he(this._extend.minimum,this._extend.maximum),f._createGlobalSubMesh(!1),f.computeWorldMatrix(!0)}}this.notifyUpdate(i),this._vertexArrayObjects&&(this._disposeVertexArrayObjects(),this._vertexArrayObjects={})},o.prototype.updateVerticesDataDirectly=function(t,e,i,n){n===void 0&&(n=!1);var r=this.getVertexBuffer(t);!r||(r.updateDirectly(e,i,n),this.notifyUpdate(t))},o.prototype.updateVerticesData=function(t,e,i){i===void 0&&(i=!1);var n=this.getVertexBuffer(t);!n||(n.update(e),t===v.PositionKind&&this._updateBoundingInfo(i,e),this.notifyUpdate(t))},o.prototype._updateBoundingInfo=function(t,e){if(t&&this._updateExtend(e),this._resetPointsArrayCache(),t)for(var i=this._meshes,n=0,r=i;n<r.length;n++){var a=r[n];a._boundingInfo?a._boundingInfo.reConstruct(this._extend.minimum,this._extend.maximum):a._boundingInfo=new he(this._extend.minimum,this._extend.maximum);for(var s=a.subMeshes,f=0,l=s;f<l.length;f++){var u=l[f];u.refreshBoundingInfo()}}},o.prototype._bind=function(t,e){if(!!t){e===void 0&&(e=this._indexBuffer);var i=this.getVertexBuffers();if(!!i){if(e!=this._indexBuffer||!this._vertexArrayObjects){this._engine.bindBuffers(i,e,t);return}this._vertexArrayObjects[t.key]||(this._vertexArrayObjects[t.key]=this._engine.recordVertexArrayObject(i,e,t)),this._engine.bindVertexArrayObject(this._vertexArrayObjects[t.key],e)}}},o.prototype.getTotalVertices=function(){return this.isReady()?this._totalVertices:0},o.prototype.getVerticesData=function(t,e,i){var n=this.getVertexBuffer(t);if(!n)return null;var r=n.getData();if(!r)return null;var a=n.getSize()*v.GetTypeByteLength(n.type),s=this._totalVertices*n.getSize();if(n.type!==v.FLOAT||n.byteStride!==a){var f=[];return n.forEach(s,function(p){return f.push(p)}),f}if(!(r instanceof Array||r instanceof Float32Array)||n.byteOffset!==0||r.length!==s)if(r instanceof Array){var l=n.byteOffset/4;return ee.Slice(r,l,l+s)}else{if(r instanceof ArrayBuffer)return new Float32Array(r,n.byteOffset,s);var l=r.byteOffset+n.byteOffset;if(i||e&&this._meshes.length!==1){var u=new Float32Array(s),h=new Float32Array(r.buffer,l,s);return u.set(h),u}var c=l%4;return c&&(l=Math.max(0,l-c)),new Float32Array(r.buffer,l,s)}return i||e&&this._meshes.length!==1?ee.Slice(r):r},o.prototype.isVertexBufferUpdatable=function(t){var e=this._vertexBuffers[t];return e?e.isUpdatable():!1},o.prototype.getVertexBuffer=function(t){return this.isReady()?this._vertexBuffers[t]:null},o.prototype.getVertexBuffers=function(){return this.isReady()?this._vertexBuffers:null},o.prototype.isVerticesDataPresent=function(t){return this._vertexBuffers?this._vertexBuffers[t]!==void 0:this._delayInfo?this._delayInfo.indexOf(t)!==-1:!1},o.prototype.getVerticesDataKinds=function(){var t=[],e;if(!this._vertexBuffers&&this._delayInfo)for(e in this._delayInfo)t.push(e);else for(e in this._vertexBuffers)t.push(e);return t},o.prototype.updateIndices=function(t,e,i){if(i===void 0&&(i=!1),!!this._indexBuffer)if(!this._indexBufferIsUpdatable)this.setIndices(t,null,!0);else{var n=t.length!==this._indices.length;if(i||(this._indices=t.slice()),this._engine.updateDynamicIndexBuffer(this._indexBuffer,t,e),n)for(var r=0,a=this._meshes;r<a.length;r++){var s=a[r];s._createGlobalSubMesh(!0)}}},o.prototype.setIndices=function(t,e,i){e===void 0&&(e=null),i===void 0&&(i=!1),this._indexBuffer&&this._engine._releaseBuffer(this._indexBuffer),this._disposeVertexArrayObjects(),this._indices=t,this._indexBufferIsUpdatable=i,this._meshes.length!==0&&this._indices&&(this._indexBuffer=this._engine.createIndexBuffer(this._indices,i)),e!=null&&(this._totalVertices=e);for(var n=0,r=this._meshes;n<r.length;n++){var a=r[n];a._createGlobalSubMesh(!0)}this.notifyUpdate()},o.prototype.getTotalIndices=function(){return this.isReady()?this._indices.length:0},o.prototype.getIndices=function(t,e){if(!this.isReady())return null;var i=this._indices;if(!e&&(!t||this._meshes.length===1))return i;for(var n=i.length,r=[],a=0;a<n;a++)r.push(i[a]);return r},o.prototype.getIndexBuffer=function(){return this.isReady()?this._indexBuffer:null},o.prototype._releaseVertexArrayObject=function(t){t===void 0&&(t=null),!(!t||!this._vertexArrayObjects)&&this._vertexArrayObjects[t.key]&&(this._engine.releaseVertexArrayObject(this._vertexArrayObjects[t.key]),delete this._vertexArrayObjects[t.key])},o.prototype.releaseForMesh=function(t,e){var i=this._meshes,n=i.indexOf(t);n!==-1&&(i.splice(n,1),t._geometry=null,i.length===0&&e&&this.dispose())},o.prototype.applyToMesh=function(t){if(t._geometry!==this){var e=t._geometry;e&&e.releaseForMesh(t);var i=this._meshes;t._geometry=this,this._scene.pushGeometry(this),i.push(t),this.isReady()?this._applyToMesh(t):t._boundingInfo=this._boundingInfo}},o.prototype._updateExtend=function(t){t===void 0&&(t=null),this.useBoundingInfoFromGeometry&&this._boundingInfo?this._extend={minimum:this._boundingInfo.minimum.clone(),maximum:this._boundingInfo.maximum.clone()}:(t||(t=this.getVerticesData(v.PositionKind)),this._extend=nt(t,0,this._totalVertices,this.boundingBias,3))},o.prototype._applyToMesh=function(t){var e=this._meshes.length;for(var i in this._vertexBuffers){e===1&&this._vertexBuffers[i].create();var n=this._vertexBuffers[i].getBuffer();n&&(n.references=e),i===v.PositionKind&&(this._extend||this._updateExtend(),t._boundingInfo=new he(this._extend.minimum,this._extend.maximum),t._createGlobalSubMesh(!1),t._updateBoundingInfo())}e===1&&this._indices&&this._indices.length>0&&(this._indexBuffer=this._engine.createIndexBuffer(this._indices)),this._indexBuffer&&(this._indexBuffer.references=e),t._syncGeometryWithMorphTargetManager(),t.synchronizeInstances()},o.prototype.notifyUpdate=function(t){this.onGeometryUpdated&&this.onGeometryUpdated(this,t);for(var e=0,i=this._meshes;e<i.length;e++){var n=i[e];n._markSubMeshesAsAttributesDirty()}},o.prototype.load=function(t,e){if(this.delayLoadState!==2){if(this.isReady()){e&&e();return}this.delayLoadState=2,this._queueLoad(t,e)}},o.prototype._queueLoad=function(t,e){var i=this;!this.delayLoadingFile||(t._addPendingData(this),t._loadFile(this.delayLoadingFile,function(n){if(!!i._delayLoadingFunction){i._delayLoadingFunction(JSON.parse(n),i),i.delayLoadState=1,i._delayInfo=[],t._removePendingData(i);for(var r=i._meshes,a=r.length,s=0;s<a;s++)i._applyToMesh(r[s]);e&&e()}},void 0,!0))},o.prototype.toLeftHanded=function(){var t=this.getIndices(!1);if(t!=null&&t.length>0){for(var e=0;e<t.length;e+=3){var i=t[e+0];t[e+0]=t[e+2],t[e+2]=i}this.setIndices(t)}var n=this.getVerticesData(v.PositionKind,!1);if(n!=null&&n.length>0){for(var e=0;e<n.length;e+=3)n[e+2]=-n[e+2];this.setVerticesData(v.PositionKind,n,!1)}var r=this.getVerticesData(v.NormalKind,!1);if(r!=null&&r.length>0){for(var e=0;e<r.length;e+=3)r[e+2]=-r[e+2];this.setVerticesData(v.NormalKind,r,!1)}},o.prototype._resetPointsArrayCache=function(){this._positions=null},o.prototype._generatePointsArray=function(){if(this._positions)return!0;var t=this.getVerticesData(v.PositionKind);if(!t||t.length===0)return!1;for(var e=this._positionsCache.length*3,i=this._positionsCache.length;e<t.length;e+=3,++i)this._positionsCache[i]=I.FromArray(t,e);for(var e=0,i=0;e<t.length;e+=3,++i)this._positionsCache[i].set(t[0+e],t[1+e],t[2+e]);return this._positionsCache.length=t.length/3,this._positions=this._positionsCache,!0},o.prototype.isDisposed=function(){return this._isDisposed},o.prototype._disposeVertexArrayObjects=function(){if(this._vertexArrayObjects){for(var t in this._vertexArrayObjects)this._engine.releaseVertexArrayObject(this._vertexArrayObjects[t]);this._vertexArrayObjects={}}},o.prototype.dispose=function(){var t=this._meshes,e=t.length,i;for(i=0;i<e;i++)this.releaseForMesh(t[i]);this._meshes=[],this._disposeVertexArrayObjects();for(var n in this._vertexBuffers)this._vertexBuffers[n].dispose();this._vertexBuffers={},this._totalVertices=0,this._indexBuffer&&this._engine._releaseBuffer(this._indexBuffer),this._indexBuffer=null,this._indices=[],this.delayLoadState=0,this.delayLoadingFile=null,this._delayLoadingFunction=null,this._delayInfo=[],this._boundingInfo=null,this._scene.removeGeometry(this),this._isDisposed=!0},o.prototype.copy=function(t){var e=new V;e.indices=[];var i=this.getIndices();if(i)for(var n=0;n<i.length;n++)e.indices.push(i[n]);var r=!1,a=!1,s;for(s in this._vertexBuffers){var f=this.getVerticesData(s);if(f&&(f instanceof Float32Array?e.set(new Float32Array(f),s):e.set(f.slice(0),s),!a)){var l=this.getVertexBuffer(s);l&&(r=l.isUpdatable(),a=!r)}}var u=new o(t,this._scene,e,r);u.delayLoadState=this.delayLoadState,u.delayLoadingFile=this.delayLoadingFile,u._delayLoadingFunction=this._delayLoadingFunction;for(s in this._delayInfo)u._delayInfo=u._delayInfo||[],u._delayInfo.push(s);return u._boundingInfo=new he(this._extend.minimum,this._extend.maximum),u},o.prototype.serialize=function(){var t={};return t.id=this.id,t.updatable=this._updatable,z&&z.HasTags(this)&&(t.tags=z.GetTags(this)),t},o.prototype.toNumberArray=function(t){return Array.isArray(t)?t:Array.prototype.slice.call(t)},o.prototype.serializeVerticeData=function(){var t=this.serialize();return this.isVerticesDataPresent(v.PositionKind)&&(t.positions=this.toNumberArray(this.getVerticesData(v.PositionKind)),this.isVertexBufferUpdatable(v.PositionKind)&&(t.positions._updatable=!0)),this.isVerticesDataPresent(v.NormalKind)&&(t.normals=this.toNumberArray(this.getVerticesData(v.NormalKind)),this.isVertexBufferUpdatable(v.NormalKind)&&(t.normals._updatable=!0)),this.isVerticesDataPresent(v.TangentKind)&&(t.tangets=this.toNumberArray(this.getVerticesData(v.TangentKind)),this.isVertexBufferUpdatable(v.TangentKind)&&(t.tangets._updatable=!0)),this.isVerticesDataPresent(v.UVKind)&&(t.uvs=this.toNumberArray(this.getVerticesData(v.UVKind)),this.isVertexBufferUpdatable(v.UVKind)&&(t.uvs._updatable=!0)),this.isVerticesDataPresent(v.UV2Kind)&&(t.uv2s=this.toNumberArray(this.getVerticesData(v.UV2Kind)),this.isVertexBufferUpdatable(v.UV2Kind)&&(t.uv2s._updatable=!0)),this.isVerticesDataPresent(v.UV3Kind)&&(t.uv3s=this.toNumberArray(this.getVerticesData(v.UV3Kind)),this.isVertexBufferUpdatable(v.UV3Kind)&&(t.uv3s._updatable=!0)),this.isVerticesDataPresent(v.UV4Kind)&&(t.uv4s=this.toNumberArray(this.getVerticesData(v.UV4Kind)),this.isVertexBufferUpdatable(v.UV4Kind)&&(t.uv4s._updatable=!0)),this.isVerticesDataPresent(v.UV5Kind)&&(t.uv5s=this.toNumberArray(this.getVerticesData(v.UV5Kind)),this.isVertexBufferUpdatable(v.UV5Kind)&&(t.uv5s._updatable=!0)),this.isVerticesDataPresent(v.UV6Kind)&&(t.uv6s=this.toNumberArray(this.getVerticesData(v.UV6Kind)),this.isVertexBufferUpdatable(v.UV6Kind)&&(t.uv6s._updatable=!0)),this.isVerticesDataPresent(v.ColorKind)&&(t.colors=this.toNumberArray(this.getVerticesData(v.ColorKind)),this.isVertexBufferUpdatable(v.ColorKind)&&(t.colors._updatable=!0)),this.isVerticesDataPresent(v.MatricesIndicesKind)&&(t.matricesIndices=this.toNumberArray(this.getVerticesData(v.MatricesIndicesKind)),t.matricesIndices._isExpanded=!0,this.isVertexBufferUpdatable(v.MatricesIndicesKind)&&(t.matricesIndices._updatable=!0)),this.isVerticesDataPresent(v.MatricesWeightsKind)&&(t.matricesWeights=this.toNumberArray(this.getVerticesData(v.MatricesWeightsKind)),this.isVertexBufferUpdatable(v.MatricesWeightsKind)&&(t.matricesWeights._updatable=!0)),t.indices=this.toNumberArray(this.getIndices()),t},o.ExtractFromMesh=function(t,e){var i=t._geometry;return i?i.copy(e):null},o.RandomId=function(){return ee.RandomId()},o._ImportGeometry=function(t,e){var i=e.getScene(),n=t.geometryId;if(n){var r=i.getGeometryByID(n);r&&r.applyToMesh(e)}else if(t instanceof ArrayBuffer){var a=e._binaryInfo;if(a.positionsAttrDesc&&a.positionsAttrDesc.count>0){var s=new Float32Array(t,a.positionsAttrDesc.offset,a.positionsAttrDesc.count);e.setVerticesData(v.PositionKind,s,!1)}if(a.normalsAttrDesc&&a.normalsAttrDesc.count>0){var f=new Float32Array(t,a.normalsAttrDesc.offset,a.normalsAttrDesc.count);e.setVerticesData(v.NormalKind,f,!1)}if(a.tangetsAttrDesc&&a.tangetsAttrDesc.count>0){var l=new Float32Array(t,a.tangetsAttrDesc.offset,a.tangetsAttrDesc.count);e.setVerticesData(v.TangentKind,l,!1)}if(a.uvsAttrDesc&&a.uvsAttrDesc.count>0){var u=new Float32Array(t,a.uvsAttrDesc.offset,a.uvsAttrDesc.count);e.setVerticesData(v.UVKind,u,!1)}if(a.uvs2AttrDesc&&a.uvs2AttrDesc.count>0){var h=new Float32Array(t,a.uvs2AttrDesc.offset,a.uvs2AttrDesc.count);e.setVerticesData(v.UV2Kind,h,!1)}if(a.uvs3AttrDesc&&a.uvs3AttrDesc.count>0){var c=new Float32Array(t,a.uvs3AttrDesc.offset,a.uvs3AttrDesc.count);e.setVerticesData(v.UV3Kind,c,!1)}if(a.uvs4AttrDesc&&a.uvs4AttrDesc.count>0){var p=new Float32Array(t,a.uvs4AttrDesc.offset,a.uvs4AttrDesc.count);e.setVerticesData(v.UV4Kind,p,!1)}if(a.uvs5AttrDesc&&a.uvs5AttrDesc.count>0){var d=new Float32Array(t,a.uvs5AttrDesc.offset,a.uvs5AttrDesc.count);e.setVerticesData(v.UV5Kind,d,!1)}if(a.uvs6AttrDesc&&a.uvs6AttrDesc.count>0){var S=new Float32Array(t,a.uvs6AttrDesc.offset,a.uvs6AttrDesc.count);e.setVerticesData(v.UV6Kind,S,!1)}if(a.colorsAttrDesc&&a.colorsAttrDesc.count>0){var _=new Float32Array(t,a.colorsAttrDesc.offset,a.colorsAttrDesc.count);e.setVerticesData(v.ColorKind,_,!1,a.colorsAttrDesc.stride)}if(a.matricesIndicesAttrDesc&&a.matricesIndicesAttrDesc.count>0){for(var y=new Int32Array(t,a.matricesIndicesAttrDesc.offset,a.matricesIndicesAttrDesc.count),m=[],T=0;T<y.length;T++){var b=y[T];m.push(b&255),m.push((b&65280)>>8),m.push((b&16711680)>>16),m.push(b>>24&255)}e.setVerticesData(v.MatricesIndicesKind,m,!1)}if(a.matricesIndicesExtraAttrDesc&&a.matricesIndicesExtraAttrDesc.count>0){for(var y=new Int32Array(t,a.matricesIndicesExtraAttrDesc.offset,a.matricesIndicesExtraAttrDesc.count),m=[],T=0;T<y.length;T++){var b=y[T];m.push(b&255),m.push((b&65280)>>8),m.push((b&16711680)>>16),m.push(b>>24&255)}e.setVerticesData(v.MatricesIndicesExtraKind,m,!1)}if(a.matricesWeightsAttrDesc&&a.matricesWeightsAttrDesc.count>0){var C=new Float32Array(t,a.matricesWeightsAttrDesc.offset,a.matricesWeightsAttrDesc.count);e.setVerticesData(v.MatricesWeightsKind,C,!1)}if(a.indicesAttrDesc&&a.indicesAttrDesc.count>0){var P=new Int32Array(t,a.indicesAttrDesc.offset,a.indicesAttrDesc.count);e.setIndices(P,null)}if(a.subMeshesAttrDesc&&a.subMeshesAttrDesc.count>0){var A=new Int32Array(t,a.subMeshesAttrDesc.offset,a.subMeshesAttrDesc.count*5);e.subMeshes=[];for(var T=0;T<a.subMeshesAttrDesc.count;T++){var U=A[T*5+0],Z=A[T*5+1],j=A[T*5+2],k=A[T*5+3],Ee=A[T*5+4];ce.AddToMesh(U,Z,j,k,Ee,e)}}}else if(t.positions&&t.normals&&t.indices){if(e.setVerticesData(v.PositionKind,t.positions,t.positions._updatable),e.setVerticesData(v.NormalKind,t.normals,t.normals._updatable),t.tangents&&e.setVerticesData(v.TangentKind,t.tangents,t.tangents._updatable),t.uvs&&e.setVerticesData(v.UVKind,t.uvs,t.uvs._updatable),t.uvs2&&e.setVerticesData(v.UV2Kind,t.uvs2,t.uvs2._updatable),t.uvs3&&e.setVerticesData(v.UV3Kind,t.uvs3,t.uvs3._updatable),t.uvs4&&e.setVerticesData(v.UV4Kind,t.uvs4,t.uvs4._updatable),t.uvs5&&e.setVerticesData(v.UV5Kind,t.uvs5,t.uvs5._updatable),t.uvs6&&e.setVerticesData(v.UV6Kind,t.uvs6,t.uvs6._updatable),t.colors&&e.setVerticesData(v.ColorKind,_e.CheckColors4(t.colors,t.positions.length/3),t.colors._updatable),t.matricesIndices)if(t.matricesIndices._isExpanded)delete t.matricesIndices._isExpanded,e.setVerticesData(v.MatricesIndicesKind,t.matricesIndices,t.matricesIndices._updatable);else{for(var m=[],T=0;T<t.matricesIndices.length;T++){var K=t.matricesIndices[T];m.push(K&255),m.push((K&65280)>>8),m.push((K&16711680)>>16),m.push(K>>24&255)}e.setVerticesData(v.MatricesIndicesKind,m,t.matricesIndices._updatable)}if(t.matricesIndicesExtra)if(t.matricesIndicesExtra._isExpanded)delete t.matricesIndices._isExpanded,e.setVerticesData(v.MatricesIndicesExtraKind,t.matricesIndicesExtra,t.matricesIndicesExtra._updatable);else{for(var m=[],T=0;T<t.matricesIndicesExtra.length;T++){var K=t.matricesIndicesExtra[T];m.push(K&255),m.push((K&65280)>>8),m.push((K&16711680)>>16),m.push(K>>24&255)}e.setVerticesData(v.MatricesIndicesExtraKind,m,t.matricesIndicesExtra._updatable)}t.matricesWeights&&(o._CleanMatricesWeights(t,e),e.setVerticesData(v.MatricesWeightsKind,t.matricesWeights,t.matricesWeights._updatable)),t.matricesWeightsExtra&&e.setVerticesData(v.MatricesWeightsExtraKind,t.matricesWeightsExtra,t.matricesWeights._updatable),e.setIndices(t.indices,null)}if(t.subMeshes){e.subMeshes=[];for(var ve=0;ve<t.subMeshes.length;ve++){var ue=t.subMeshes[ve];ce.AddToMesh(ue.materialIndex,ue.verticesStart,ue.verticesCount,ue.indexStart,ue.indexCount,e)}}e._shouldGenerateFlatShading&&(e.convertToFlatShadedMesh(),e._shouldGenerateFlatShading=!1),e.computeWorldMatrix(!0),i.onMeshImportedObservable.notifyObservers(e)},o._CleanMatricesWeights=function(t,e){var i=.001;if(!!Ye.CleanBoneMatrixWeights){var n=0;if(t.skeletonId>-1){var r=e.getScene().getLastSkeletonByID(t.skeletonId);if(!r)return;n=r.bones.length}else return;for(var a=e.getVerticesData(v.MatricesIndicesKind),s=e.getVerticesData(v.MatricesIndicesExtraKind),f=t.matricesWeights,l=t.matricesWeightsExtra,u=t.numBoneInfluencer,h=f.length,c=0;c<h;c+=4){for(var p=0,d=-1,S=0;S<4;S++){var _=f[c+S];p+=_,_<i&&d<0&&(d=S)}if(l)for(var S=0;S<4;S++){var _=l[c+S];p+=_,_<i&&d<0&&(d=S+4)}if((d<0||d>u-1)&&(d=u-1),p>i){for(var y=1/p,S=0;S<4;S++)f[c+S]*=y;if(l)for(var S=0;S<4;S++)l[c+S]*=y}else d>=4?(l[c+d-4]=1-p,s[c+d-4]=n):(f[c+d]=1-p,a[c+d]=n)}e.setVerticesData(v.MatricesIndicesKind,a),t.matricesWeightsExtra&&e.setVerticesData(v.MatricesIndicesExtraKind,s)}},o.Parse=function(t,e,i){if(e.getGeometryByID(t.id))return null;var n=new o(t.id,e,void 0,t.updatable);return z&&z.AddTagsTo(n,t.tags),t.delayLoadingFile?(n.delayLoadState=4,n.delayLoadingFile=i+t.delayLoadingFile,n._boundingInfo=new he(I.FromArray(t.boundingBoxMinimum),I.FromArray(t.boundingBoxMaximum)),n._delayInfo=[],t.hasUVs&&n._delayInfo.push(v.UVKind),t.hasUVs2&&n._delayInfo.push(v.UV2Kind),t.hasUVs3&&n._delayInfo.push(v.UV3Kind),t.hasUVs4&&n._delayInfo.push(v.UV4Kind),t.hasUVs5&&n._delayInfo.push(v.UV5Kind),t.hasUVs6&&n._delayInfo.push(v.UV6Kind),t.hasColors&&n._delayInfo.push(v.ColorKind),t.hasMatricesIndices&&n._delayInfo.push(v.MatricesIndicesKind),t.hasMatricesWeights&&n._delayInfo.push(v.MatricesWeightsKind),n._delayLoadingFunction=V.ImportVertexData):V.ImportVertexData(t,n),e.pushGeometry(n,!0),n},o}(),Le=function(o){W(t,o);function t(e,i){var n=o.call(this,e,i,!0)||this;return i.multiMaterials.push(n),n.subMaterials=new Array,n._storeEffectOnSubMeshes=!0,n}return Object.defineProperty(t.prototype,"subMaterials",{get:function(){return this._subMaterials},set:function(e){this._subMaterials=e,this._hookArray(e)},enumerable:!1,configurable:!0}),t.prototype.getChildren=function(){return this.subMaterials},t.prototype._hookArray=function(e){var i=this,n=e.push;e.push=function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];var f=n.apply(e,a);return i._markAllSubMeshesAsTexturesDirty(),f};var r=e.splice;e.splice=function(a,s){var f=r.apply(e,[a,s]);return i._markAllSubMeshesAsTexturesDirty(),f}},t.prototype.getSubMaterial=function(e){return e<0||e>=this.subMaterials.length?this.getScene().defaultMaterial:this.subMaterials[e]},t.prototype.getActiveTextures=function(){var e;return(e=o.prototype.getActiveTextures.call(this)).concat.apply(e,this.subMaterials.map(function(i){return i?i.getActiveTextures():[]}))},t.prototype.hasTexture=function(e){var i;if(o.prototype.hasTexture.call(this,e))return!0;for(var n=0;n<this.subMaterials.length;n++)if((i=this.subMaterials[n])===null||i===void 0?void 0:i.hasTexture(e))return!0;return!1},t.prototype.getClassName=function(){return"MultiMaterial"},t.prototype.isReadyForSubMesh=function(e,i,n){for(var r=0;r<this.subMaterials.length;r++){var a=this.subMaterials[r];if(a){if(a._storeEffectOnSubMeshes){if(!a.isReadyForSubMesh(e,i,n))return!1;continue}if(!a.isReady(e))return!1}}return!0},t.prototype.clone=function(e,i){for(var n=new t(e,this.getScene()),r=0;r<this.subMaterials.length;r++){var a=null,s=this.subMaterials[r];i&&s?a=s.clone(e+"-"+s.name):a=this.subMaterials[r],n.subMaterials.push(a)}return n},t.prototype.serialize=function(){var e={};e.name=this.name,e.id=this.id,z&&(e.tags=z.GetTags(this)),e.materials=[];for(var i=0;i<this.subMaterials.length;i++){var n=this.subMaterials[i];n?e.materials.push(n.id):e.materials.push(null)}return e},t.prototype.dispose=function(e,i,n){var r=this.getScene();if(!!r){if(n)for(var s=0;s<this.subMaterials.length;s++){var a=this.subMaterials[s];a&&a.dispose(e,i)}var s=r.multiMaterials.indexOf(this);s>=0&&r.multiMaterials.splice(s,1),o.prototype.dispose.call(this,e,i)}},t.ParseMultiMaterial=function(e,i){var n=new t(e.name,i);n.id=e.id,z&&z.AddTagsTo(n,e.tags);for(var r=0;r<e.materials.length;r++){var a=e.materials[r];a?n.subMaterials.push(i.getLastMaterialByID(a)):n.subMaterials.push(null)}return n},t}(Q);fe.RegisteredTypes["BABYLON.MultiMaterial"]=Le;var mt=function(){function o(t,e){this.distance=t,this.mesh=e}return o}(),gt=function(){function o(){this.visibleInstances={},this.batchCache=new _t,this.instancesBufferSize=32*16*4}return o}(),_t=function(){function o(){this.mustReturn=!1,this.visibleInstances=new Array,this.renderSelf=new Array,this.hardwareInstancedRendering=new Array}return o}(),St=function(){function o(){this.instancesCount=0,this.matrixBuffer=null,this.matrixBufferSize=32*16,this.boundingVectors=[],this.worldMatrices=null}return o}(),yt=function(){function o(){this._areNormalsFrozen=!1,this._source=null,this.meshMap=null,this._preActivateId=-1,this._LODLevels=new Array,this._morphTargetManager=null}return o}(),$=function(o){W(t,o);function t(e,i,n,r,a,s){i===void 0&&(i=null),n===void 0&&(n=null),r===void 0&&(r=null),s===void 0&&(s=!0);var f=o.call(this,e,i)||this;if(f._internalMeshDataInfo=new yt,f.delayLoadState=0,f.instances=new Array,f._creationDataStorage=null,f._geometry=null,f._instanceDataStorage=new gt,f._thinInstanceDataStorage=new St,f._effectiveMaterial=null,f._shouldGenerateFlatShading=!1,f._originalBuilderSideOrientation=t.DEFAULTSIDE,f.overrideMaterialSideOrientation=null,i=f.getScene(),r){if(r._geometry&&r._geometry.applyToMesh(f),ze.DeepCopy(r,f,["name","material","skeleton","instances","parent","uniqueId","source","metadata","morphTargetManager","hasInstances","source","worldMatrixInstancedBuffer","hasLODLevels","geometry","isBlocked","areNormalsFrozen","facetNb","isFacetDataEnabled","lightSources","useBones","isAnInstance","collider","edgesRenderer","forward","up","right","absolutePosition","absoluteScaling","absoluteRotationQuaternion","isWorldMatrixFrozen","nonUniformScaling","behaviors","worldMatrixFromCache","hasThinInstances","cloneMeshMap"],["_poseMatrix"]),f._internalMeshDataInfo._source=r,i.useClonedMeshMap&&(r._internalMeshDataInfo.meshMap||(r._internalMeshDataInfo.meshMap={}),r._internalMeshDataInfo.meshMap[f.uniqueId]=f),f._originalBuilderSideOrientation=r._originalBuilderSideOrientation,f._creationDataStorage=r._creationDataStorage,r._ranges){var l=r._ranges;for(var e in l)!l.hasOwnProperty(e)||!l[e]||f.createAnimationRange(e,l[e].from,l[e].to)}r.metadata&&r.metadata.clone?f.metadata=r.metadata.clone():f.metadata=r.metadata,z&&z.HasTags(r)&&z.AddTagsTo(f,z.GetTags(r,!0)),f.setEnabled(r.isEnabled()),f.parent=r.parent,f.setPivotMatrix(r.getPivotMatrix()),f.id=e+"."+r.id,f.material=r.material;var u;if(!a)for(var h=r.getDescendants(!0),c=0;c<h.length;c++){var p=h[c];p.clone&&p.clone(e+"."+p.name,f)}if(r.morphTargetManager&&(f.morphTargetManager=r.morphTargetManager),i.getPhysicsEngine){var d=i.getPhysicsEngine();if(s&&d){var S=d.getImpostorForPhysicsObject(r);S&&(f.physicsImpostor=S.clone(f))}}for(u=0;u<i.particleSystems.length;u++){var _=i.particleSystems[u];_.emitter===r&&_.clone(_.name,f)}f.refreshBoundingInfo(),f.computeWorldMatrix(!0)}return n!==null&&(f.parent=n),f._instanceDataStorage.hardwareInstancedRendering=f.getEngine().getCaps().instancedArrays,f}return t._GetDefaultSideOrientation=function(e){return e||t.FRONTSIDE},Object.defineProperty(t.prototype,"computeBonesUsingShaders",{get:function(){return this._internalAbstractMeshDataInfo._computeBonesUsingShaders},set:function(e){this._internalAbstractMeshDataInfo._computeBonesUsingShaders!==e&&(e&&this._internalMeshDataInfo._sourcePositions&&(this.setVerticesData(v.PositionKind,this._internalMeshDataInfo._sourcePositions.slice(),!0),this._internalMeshDataInfo._sourceNormals&&this.setVerticesData(v.NormalKind,this._internalMeshDataInfo._sourceNormals.slice(),!0)),this._internalAbstractMeshDataInfo._computeBonesUsingShaders=e,this._markSubMeshesAsAttributesDirty())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onBeforeRenderObservable",{get:function(){return this._internalMeshDataInfo._onBeforeRenderObservable||(this._internalMeshDataInfo._onBeforeRenderObservable=new se),this._internalMeshDataInfo._onBeforeRenderObservable},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onBeforeBindObservable",{get:function(){return this._internalMeshDataInfo._onBeforeBindObservable||(this._internalMeshDataInfo._onBeforeBindObservable=new se),this._internalMeshDataInfo._onBeforeBindObservable},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onAfterRenderObservable",{get:function(){return this._internalMeshDataInfo._onAfterRenderObservable||(this._internalMeshDataInfo._onAfterRenderObservable=new se),this._internalMeshDataInfo._onAfterRenderObservable},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onBeforeDrawObservable",{get:function(){return this._internalMeshDataInfo._onBeforeDrawObservable||(this._internalMeshDataInfo._onBeforeDrawObservable=new se),this._internalMeshDataInfo._onBeforeDrawObservable},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onBeforeDraw",{set:function(e){this._onBeforeDrawObserver&&this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver),this._onBeforeDrawObserver=this.onBeforeDrawObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasInstances",{get:function(){return this.instances.length>0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasThinInstances",{get:function(){var e;return((e=this._thinInstanceDataStorage.instancesCount)!==null&&e!==void 0?e:0)>0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"morphTargetManager",{get:function(){return this._internalMeshDataInfo._morphTargetManager},set:function(e){this._internalMeshDataInfo._morphTargetManager!==e&&(this._internalMeshDataInfo._morphTargetManager=e,this._syncGeometryWithMorphTargetManager())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"source",{get:function(){return this._internalMeshDataInfo._source},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cloneMeshMap",{get:function(){return this._internalMeshDataInfo.meshMap},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isUnIndexed",{get:function(){return this._unIndexed},set:function(e){this._unIndexed!==e&&(this._unIndexed=e,this._markSubMeshesAsAttributesDirty())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"worldMatrixInstancedBuffer",{get:function(){return this._instanceDataStorage.instancesData},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"manualUpdateOfWorldMatrixInstancedBuffer",{get:function(){return this._instanceDataStorage.manualUpdate},set:function(e){this._instanceDataStorage.manualUpdate=e},enumerable:!1,configurable:!0}),t.prototype.instantiateHierarchy=function(e,i,n){e===void 0&&(e=null);var r=this.getTotalVertices()>0&&(!i||!i.doNotInstantiate)?this.createInstance("instance of "+(this.name||this.id)):this.clone("Clone of "+(this.name||this.id),e||this.parent,!0);r&&(r.parent=e||this.parent,r.position=this.position.clone(),r.scaling=this.scaling.clone(),this.rotationQuaternion?r.rotationQuaternion=this.rotationQuaternion.clone():r.rotation=this.rotation.clone(),n&&n(this,r));for(var a=0,s=this.getChildTransformNodes(!0);a<s.length;a++){var f=s[a];f.instantiateHierarchy(r,i,n)}return r},t.prototype.getClassName=function(){return"Mesh"},Object.defineProperty(t.prototype,"_isMesh",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.toString=function(e){var i=o.prototype.toString.call(this,e);if(i+=", n vertices: "+this.getTotalVertices(),i+=", parent: "+(this._waitingParentId?this._waitingParentId:this.parent?this.parent.name:"NONE"),this.animations)for(var n=0;n<this.animations.length;n++)i+=", animation[0]: "+this.animations[n].toString(e);if(e)if(this._geometry){var r=this.getIndices(),a=this.getVerticesData(v.PositionKind);a&&r&&(i+=", flat shading: "+(a.length/3===r.length?"YES":"NO"))}else i+=", flat shading: UNKNOWN";return i},t.prototype._unBindEffect=function(){o.prototype._unBindEffect.call(this);for(var e=0,i=this.instances;e<i.length;e++){var n=i[e];n._unBindEffect()}},Object.defineProperty(t.prototype,"hasLODLevels",{get:function(){return this._internalMeshDataInfo._LODLevels.length>0},enumerable:!1,configurable:!0}),t.prototype.getLODLevels=function(){return this._internalMeshDataInfo._LODLevels},t.prototype._sortLODLevels=function(){this._internalMeshDataInfo._LODLevels.sort(function(e,i){return e.distance<i.distance?1:e.distance>i.distance?-1:0})},t.prototype.addLODLevel=function(e,i){if(i&&i._masterMesh)return re.Warn("You cannot use a mesh as LOD level twice"),this;var n=new mt(e,i);return this._internalMeshDataInfo._LODLevels.push(n),i&&(i._masterMesh=this),this._sortLODLevels(),this},t.prototype.getLODLevelAtDistance=function(e){for(var i=this._internalMeshDataInfo,n=0;n<i._LODLevels.length;n++){var r=i._LODLevels[n];if(r.distance===e)return r.mesh}return null},t.prototype.removeLODLevel=function(e){for(var i=this._internalMeshDataInfo,n=0;n<i._LODLevels.length;n++)i._LODLevels[n].mesh===e&&(i._LODLevels.splice(n,1),e&&(e._masterMesh=null));return this._sortLODLevels(),this},t.prototype.getLOD=function(e,i){var n=this._internalMeshDataInfo;if(!n._LODLevels||n._LODLevels.length===0)return this;var r;if(i)r=i;else{var a=this.getBoundingInfo();r=a.boundingSphere}var s=r.centerWorld.subtract(e.globalPosition).length();if(n._LODLevels[n._LODLevels.length-1].distance>s)return this.onLODLevelSelection&&this.onLODLevelSelection(s,this,this),this;for(var f=0;f<n._LODLevels.length;f++){var l=n._LODLevels[f];if(l.distance<s){if(l.mesh){if(l.mesh.delayLoadState===4)return l.mesh._checkDelayState(),this;if(l.mesh.delayLoadState===2)return this;l.mesh._preActivate(),l.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)}return this.onLODLevelSelection&&this.onLODLevelSelection(s,this,l.mesh),l.mesh}}return this.onLODLevelSelection&&this.onLODLevelSelection(s,this,this),this},Object.defineProperty(t.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),t.prototype.getTotalVertices=function(){return this._geometry===null||this._geometry===void 0?0:this._geometry.getTotalVertices()},t.prototype.getVerticesData=function(e,i,n){return this._geometry?this._geometry.getVerticesData(e,i,n):null},t.prototype.getVertexBuffer=function(e){return this._geometry?this._geometry.getVertexBuffer(e):null},t.prototype.isVerticesDataPresent=function(e){return this._geometry?this._geometry.isVerticesDataPresent(e):this._delayInfo?this._delayInfo.indexOf(e)!==-1:!1},t.prototype.isVertexBufferUpdatable=function(e){return this._geometry?this._geometry.isVertexBufferUpdatable(e):this._delayInfo?this._delayInfo.indexOf(e)!==-1:!1},t.prototype.getVerticesDataKinds=function(){if(!this._geometry){var e=new Array;return this._delayInfo&&this._delayInfo.forEach(function(i){e.push(i)}),e}return this._geometry.getVerticesDataKinds()},t.prototype.getTotalIndices=function(){return this._geometry?this._geometry.getTotalIndices():0},t.prototype.getIndices=function(e,i){return this._geometry?this._geometry.getIndices(e,i):[]},Object.defineProperty(t.prototype,"isBlocked",{get:function(){return this._masterMesh!==null&&this._masterMesh!==void 0},enumerable:!1,configurable:!0}),t.prototype.isReady=function(e,i){var n,r,a,s,f,l;if(e===void 0&&(e=!1),i===void 0&&(i=!1),this.delayLoadState===2||!o.prototype.isReady.call(this,e))return!1;if(!this.subMeshes||this.subMeshes.length===0||!e)return!0;var u=this.getEngine(),h=this.getScene(),c=i||u.getCaps().instancedArrays&&(this.instances.length>0||this.hasThinInstances);this.computeWorldMatrix();var p=this.material||h.defaultMaterial;if(p){if(p._storeEffectOnSubMeshes)for(var d=0,S=this.subMeshes;d<S.length;d++){var _=S[d],y=_.getMaterial();if(y){if(y._storeEffectOnSubMeshes){if(!y.isReadyForSubMesh(this,_,c))return!1}else if(!y.isReady(this,c))return!1}}else if(!p.isReady(this,c))return!1}for(var m=0,T=this.lightSources;m<T.length;m++){var b=T[m],C=b.getShadowGenerator();if(C&&(!((n=C.getShadowMap())===null||n===void 0?void 0:n.renderList)||((r=C.getShadowMap())===null||r===void 0?void 0:r.renderList)&&((s=(a=C.getShadowMap())===null||a===void 0?void 0:a.renderList)===null||s===void 0?void 0:s.indexOf(this))!==-1))for(var P=0,A=this.subMeshes;P<A.length;P++){var _=A[P];if(!C.isReady(_,c,(l=(f=_.getMaterial())===null||f===void 0?void 0:f.needAlphaBlendingForMesh(this))!==null&&l!==void 0?l:!1))return!1}}for(var U=0,Z=this._internalMeshDataInfo._LODLevels;U<Z.length;U++){var j=Z[U];if(j.mesh&&!j.mesh.isReady(c))return!1}return!0},Object.defineProperty(t.prototype,"areNormalsFrozen",{get:function(){return this._internalMeshDataInfo._areNormalsFrozen},enumerable:!1,configurable:!0}),t.prototype.freezeNormals=function(){return this._internalMeshDataInfo._areNormalsFrozen=!0,this},t.prototype.unfreezeNormals=function(){return this._internalMeshDataInfo._areNormalsFrozen=!1,this},Object.defineProperty(t.prototype,"overridenInstanceCount",{set:function(e){this._instanceDataStorage.overridenInstanceCount=e},enumerable:!1,configurable:!0}),t.prototype._preActivate=function(){var e=this._internalMeshDataInfo,i=this.getScene().getRenderId();return e._preActivateId===i?this:(e._preActivateId=i,this._instanceDataStorage.visibleInstances=null,this)},t.prototype._preActivateForIntermediateRendering=function(e){return this._instanceDataStorage.visibleInstances&&(this._instanceDataStorage.visibleInstances.intermediateDefaultRenderId=e),this},t.prototype._registerInstanceForRenderId=function(e,i){return this._instanceDataStorage.visibleInstances||(this._instanceDataStorage.visibleInstances={defaultRenderId:i,selfDefaultRenderId:this._renderId}),this._instanceDataStorage.visibleInstances[i]||(this._instanceDataStorage.previousRenderId!==void 0&&this._instanceDataStorage.isFrozen&&(this._instanceDataStorage.visibleInstances[this._instanceDataStorage.previousRenderId]=null),this._instanceDataStorage.previousRenderId=i,this._instanceDataStorage.visibleInstances[i]=new Array),this._instanceDataStorage.visibleInstances[i].push(e),this},t.prototype._afterComputeWorldMatrix=function(){o.prototype._afterComputeWorldMatrix.call(this),!!this.hasThinInstances&&(this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1))},t.prototype._postActivate=function(){this.edgesShareWithInstances&&this.edgesRenderer&&this.edgesRenderer.isEnabled&&this._renderingGroup&&(this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer),this.edgesRenderer.customInstances.push(this.getWorldMatrix()))},t.prototype.refreshBoundingInfo=function(e){if(e===void 0&&(e=!1),this._boundingInfo&&this._boundingInfo.isLocked)return this;var i=this.geometry?this.geometry.boundingBias:null;return this._refreshBoundingInfo(this._getPositionData(e),i),this},t.prototype._createGlobalSubMesh=function(e){var i=this.getTotalVertices();if(!i||!this.getIndices())return null;if(this.subMeshes&&this.subMeshes.length>0){var n=this.getIndices();if(!n)return null;var r=n.length,a=!1;if(e)a=!0;else for(var s=0,f=this.subMeshes;s<f.length;s++){var l=f[s];if(l.indexStart+l.indexCount>r){a=!0;break}if(l.verticesStart+l.verticesCount>i){a=!0;break}}if(!a)return this.subMeshes[0]}return this.releaseSubMeshes(),new ce(0,0,i,0,this.getTotalIndices(),this)},t.prototype.subdivide=function(e){if(!(e<1)){for(var i=this.getTotalIndices(),n=i/e|0,r=0;n%3!==0;)n++;this.releaseSubMeshes();for(var a=0;a<e&&!(r>=i);a++)ce.CreateFromIndices(0,r,a===e-1?i-r:n,this),r+=n;this.synchronizeInstances()}},t.prototype.setVerticesData=function(e,i,n,r){if(n===void 0&&(n=!1),this._geometry)this._geometry.setVerticesData(e,i,n,r);else{var a=new V;a.set(i,e);var s=this.getScene();new le(le.RandomId(),s,a,n,this)}return this},t.prototype.removeVerticesData=function(e){!this._geometry||this._geometry.removeVerticesData(e)},t.prototype.markVerticesDataAsUpdatable=function(e,i){i===void 0&&(i=!0);var n=this.getVertexBuffer(e);!n||n.isUpdatable()===i||this.setVerticesData(e,this.getVerticesData(e),i)},t.prototype.setVerticesBuffer=function(e){return this._geometry||(this._geometry=le.CreateGeometryForMesh(this)),this._geometry.setVerticesBuffer(e),this},t.prototype.updateVerticesData=function(e,i,n,r){return this._geometry?(r?(this.makeGeometryUnique(),this.updateVerticesData(e,i,n,!1)):this._geometry.updateVerticesData(e,i,n),this):this},t.prototype.updateMeshPositions=function(e,i){i===void 0&&(i=!0);var n=this.getVerticesData(v.PositionKind);if(!n)return this;if(e(n),this.updateVerticesData(v.PositionKind,n,!1,!1),i){var r=this.getIndices(),a=this.getVerticesData(v.NormalKind);if(!a)return this;V.ComputeNormals(n,r,a),this.updateVerticesData(v.NormalKind,a,!1,!1)}return this},t.prototype.makeGeometryUnique=function(){if(!this._geometry)return this;if(this._geometry.meshes.length===1)return this;var e=this._geometry,i=this._geometry.copy(le.RandomId());return e.releaseForMesh(this,!0),i.applyToMesh(this),this},t.prototype.setIndices=function(e,i,n){if(i===void 0&&(i=null),n===void 0&&(n=!1),this._geometry)this._geometry.setIndices(e,i,n);else{var r=new V;r.indices=e;var a=this.getScene();new le(le.RandomId(),a,r,n,this)}return this},t.prototype.updateIndices=function(e,i,n){return n===void 0&&(n=!1),this._geometry?(this._geometry.updateIndices(e,i,n),this):this},t.prototype.toLeftHanded=function(){return this._geometry?(this._geometry.toLeftHanded(),this):this},t.prototype._bind=function(e,i,n){if(!this._geometry)return this;var r=this.getScene().getEngine(),a;if(this._unIndexed)a=null;else switch(n){case Q.PointFillMode:a=null;break;case Q.WireFrameFillMode:a=e._getLinesIndexBuffer(this.getIndices(),r);break;default:case Q.TriangleFillMode:a=this._geometry.getIndexBuffer();break}return this._geometry._bind(i,a),this},t.prototype._draw=function(e,i,n){if(!this._geometry||!this._geometry.getVertexBuffers()||!this._unIndexed&&!this._geometry.getIndexBuffer())return this;this._internalMeshDataInfo._onBeforeDrawObservable&&this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);var r=this.getScene(),a=r.getEngine();return this._unIndexed||i==Q.PointFillMode?a.drawArraysType(i,e.verticesStart,e.verticesCount,n):i==Q.WireFrameFillMode?a.drawElementsType(i,0,e._linesIndexCount,n):a.drawElementsType(i,e.indexStart,e.indexCount,n),this},t.prototype.registerBeforeRender=function(e){return this.onBeforeRenderObservable.add(e),this},t.prototype.unregisterBeforeRender=function(e){return this.onBeforeRenderObservable.removeCallback(e),this},t.prototype.registerAfterRender=function(e){return this.onAfterRenderObservable.add(e),this},t.prototype.unregisterAfterRender=function(e){return this.onAfterRenderObservable.removeCallback(e),this},t.prototype._getInstancesRenderList=function(e,i){if(i===void 0&&(i=!1),this._instanceDataStorage.isFrozen&&this._instanceDataStorage.previousBatch)return this._instanceDataStorage.previousBatch;var n=this.getScene(),r=n._isInIntermediateRendering(),a=r?this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate:this._internalAbstractMeshDataInfo._onlyForInstances,s=this._instanceDataStorage.batchCache;if(s.mustReturn=!1,s.renderSelf[e]=i||!a&&this.isEnabled()&&this.isVisible,s.visibleInstances[e]=null,this._instanceDataStorage.visibleInstances&&!i){var f=this._instanceDataStorage.visibleInstances,l=n.getRenderId(),u=r?f.intermediateDefaultRenderId:f.defaultRenderId;s.visibleInstances[e]=f[l],!s.visibleInstances[e]&&u&&(s.visibleInstances[e]=f[u])}return s.hardwareInstancedRendering[e]=!i&&this._instanceDataStorage.hardwareInstancedRendering&&s.visibleInstances[e]!==null&&s.visibleInstances[e]!==void 0,this._instanceDataStorage.previousBatch=s,s},t.prototype._renderWithInstances=function(e,i,n,r,a){var s=n.visibleInstances[e._id];if(!s)return this;for(var f=this._instanceDataStorage,l=f.instancesBufferSize,u=f.instancesBuffer,h=s.length+1,c=h*16*4;f.instancesBufferSize<c;)f.instancesBufferSize*=2;(!f.instancesData||l!=f.instancesBufferSize)&&(f.instancesData=new Float32Array(f.instancesBufferSize/4));var p=0,d=0,S=n.renderSelf[e._id],_=!u||l!==f.instancesBufferSize;if(!this._instanceDataStorage.manualUpdate&&(!f.isFrozen||_)){var y=this._effectiveMesh.getWorldMatrix();if(S&&(y.copyToArray(f.instancesData,p),p+=16,d++),s)for(var m=0;m<s.length;m++){var T=s[m];T.getWorldMatrix().copyToArray(f.instancesData,p),p+=16,d++}}else d=(S?1:0)+s.length;return _?(u&&u.dispose(),u=new rt(a,f.instancesData,!0,16,!1,!0),f.instancesBuffer=u,this.setVerticesBuffer(u.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(u.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(u.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(u.createVertexBuffer("world3",12,4))):this._instanceDataStorage.isFrozen||u.updateDirectly(f.instancesData,0,d),this._processInstancedBuffers(s,S),this.getScene()._activeIndices.addCount(e.indexCount*d,!1),this._bind(e,r,i),this._draw(e,i,d),a.unbindInstanceAttributes(),this},t.prototype._renderWithThinInstances=function(e,i,n,r){var a,s,f=(s=(a=this._thinInstanceDataStorage)===null||a===void 0?void 0:a.instancesCount)!==null&&s!==void 0?s:0;this.getScene()._activeIndices.addCount(e.indexCount*f,!1),this._bind(e,n,i),this._draw(e,i,f),r.unbindInstanceAttributes()},t.prototype._processInstancedBuffers=function(e,i){},t.prototype._processRendering=function(e,i,n,r,a,s,f,l){var u=this.getScene(),h=u.getEngine();if(s&&i.getRenderingMesh().hasThinInstances)return this._renderWithThinInstances(i,r,n,h),this;if(s)this._renderWithInstances(i,r,a,n,h);else{var c=0;a.renderSelf[i._id]&&(f&&f(!1,e._effectiveMesh.getWorldMatrix(),l),c++,this._draw(i,r,this._instanceDataStorage.overridenInstanceCount));var p=a.visibleInstances[i._id];if(p){var d=p.length;c+=d;for(var S=0;S<d;S++){var _=p[S],y=_.getWorldMatrix();f&&f(!0,y,l),this._draw(i,r)}}u._activeIndices.addCount(i.indexCount*c,!1)}return this},t.prototype._rebuild=function(){this._instanceDataStorage.instancesBuffer&&(this._instanceDataStorage.instancesBuffer.dispose(),this._instanceDataStorage.instancesBuffer=null),o.prototype._rebuild.call(this)},t.prototype._freeze=function(){if(!!this.subMeshes){for(var e=0;e<this.subMeshes.length;e++)this._getInstancesRenderList(e);this._effectiveMaterial=null,this._instanceDataStorage.isFrozen=!0}},t.prototype._unFreeze=function(){this._instanceDataStorage.isFrozen=!1,this._instanceDataStorage.previousBatch=null},t.prototype.render=function(e,i,n){var r=this.getScene();if(this._internalAbstractMeshDataInfo._isActiveIntermediate?this._internalAbstractMeshDataInfo._isActiveIntermediate=!1:this._internalAbstractMeshDataInfo._isActive=!1,this._checkOcclusionQuery())return this;var a=this._getInstancesRenderList(e._id,!!n);if(a.mustReturn)return this;if(!this._geometry||!this._geometry.getVertexBuffers()||!this._unIndexed&&!this._geometry.getIndexBuffer())return this;this._internalMeshDataInfo._onBeforeRenderObservable&&this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);var s=r.getEngine(),f=a.hardwareInstancedRendering[e._id]||e.getRenderingMesh().hasThinInstances,l=this._instanceDataStorage,u=e.getMaterial();if(!u)return this;if(!l.isFrozen||!this._effectiveMaterial||this._effectiveMaterial!==u){if(u._storeEffectOnSubMeshes){if(!u.isReadyForSubMesh(this,e,f))return this}else if(!u.isReady(this,f))return this;this._effectiveMaterial=u}i&&s.setAlphaMode(this._effectiveMaterial.alphaMode);var h;this._effectiveMaterial._storeEffectOnSubMeshes?h=e.effect:h=this._effectiveMaterial.getEffect();for(var c=0,p=r._beforeRenderingMeshStage;c<p.length;c++){var d=p[c];d.action(this,e,a,h)}if(!h)return this;var S=n||this._effectiveMesh,_;if(!l.isFrozen&&(this._effectiveMaterial.backFaceCulling||this.overrideMaterialSideOrientation!==null)){var y=S._getWorldMatrixDeterminant();_=this.overrideMaterialSideOrientation,_==null&&(_=this._effectiveMaterial.sideOrientation),y<0&&(_=_===Q.ClockWiseSideOrientation?Q.CounterClockWiseSideOrientation:Q.ClockWiseSideOrientation),l.sideOrientation=_}else _=l.sideOrientation;var m=this._effectiveMaterial._preBind(h,_);this._effectiveMaterial.forceDepthWrite&&s.setDepthWrite(!0);var T=r.forcePointsCloud?Q.PointFillMode:r.forceWireframe?Q.WireFrameFillMode:this._effectiveMaterial.fillMode;this._internalMeshDataInfo._onBeforeBindObservable&&this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this),f||this._bind(e,h,T);var b=S.getWorldMatrix();this._effectiveMaterial._storeEffectOnSubMeshes?this._effectiveMaterial.bindForSubMesh(b,this,e):this._effectiveMaterial.bind(b,this),!this._effectiveMaterial.backFaceCulling&&this._effectiveMaterial.separateCullingPass&&(s.setState(!0,this._effectiveMaterial.zOffset,!1,!m),this._processRendering(this,e,h,T,a,f,this._onBeforeDraw,this._effectiveMaterial),s.setState(!0,this._effectiveMaterial.zOffset,!1,m)),this._processRendering(this,e,h,T,a,f,this._onBeforeDraw,this._effectiveMaterial),this._effectiveMaterial.unbind();for(var C=0,P=r._afterRenderingMeshStage;C<P.length;C++){var d=P[C];d.action(this,e,a,h)}return this._internalMeshDataInfo._onAfterRenderObservable&&this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this),this},t.prototype._onBeforeDraw=function(e,i,n){e&&n&&n.bindOnlyWorldMatrix(i)},t.prototype.cleanMatrixWeights=function(){this.isVerticesDataPresent(v.MatricesWeightsKind)&&(this.isVerticesDataPresent(v.MatricesWeightsExtraKind)?this.normalizeSkinWeightsAndExtra():this.normalizeSkinFourWeights())},t.prototype.normalizeSkinFourWeights=function(){for(var e=this.getVerticesData(v.MatricesWeightsKind),i=e.length,n=0;n<i;n+=4){var r=e[n]+e[n+1]+e[n+2]+e[n+3];if(r===0)e[n]=1;else{var a=1/r;e[n]*=a,e[n+1]*=a,e[n+2]*=a,e[n+3]*=a}}this.setVerticesData(v.MatricesWeightsKind,e)},t.prototype.normalizeSkinWeightsAndExtra=function(){for(var e=this.getVerticesData(v.MatricesWeightsExtraKind),i=this.getVerticesData(v.MatricesWeightsKind),n=i.length,r=0;r<n;r+=4){var a=i[r]+i[r+1]+i[r+2]+i[r+3];if(a+=e[r]+e[r+1]+e[r+2]+e[r+3],a===0)i[r]=1;else{var s=1/a;i[r]*=s,i[r+1]*=s,i[r+2]*=s,i[r+3]*=s,e[r]*=s,e[r+1]*=s,e[r+2]*=s,e[r+3]*=s}}this.setVerticesData(v.MatricesWeightsKind,i),this.setVerticesData(v.MatricesWeightsKind,e)},t.prototype.validateSkinning=function(){var e=this.getVerticesData(v.MatricesWeightsExtraKind),i=this.getVerticesData(v.MatricesWeightsKind);if(i===null||this.skeleton==null)return{skinned:!1,valid:!0,report:"not skinned"};for(var n=i.length,r=0,a=0,s=0,f=0,l=e===null?4:8,u=new Array,h=0;h<=l;h++)u[h]=0;for(var c=.001,h=0;h<n;h+=4){for(var p=i[h],d=p,S=d===0?0:1,_=1;_<l;_++){var y=_<4?i[h+_]:e[h+_-4];y>p&&r++,y!==0&&S++,d+=y,p=y}if(u[S]++,S>s&&(s=S),d===0)a++;else{var m=1/d,T=0;for(_=0;_<l;_++)_<4?T+=Math.abs(i[h+_]-i[h+_]*m):T+=Math.abs(e[h+_-4]-e[h+_-4]*m);T>c&&f++}}for(var b=this.skeleton.bones.length,C=this.getVerticesData(v.MatricesIndicesKind),P=this.getVerticesData(v.MatricesIndicesExtraKind),A=0,h=0;h<n;h+=4)for(var _=0;_<l;_++){var U=_<4?C[h+_]:P[h+_-4];(U>=b||U<0)&&A++}var Z="Number of Weights = "+n/4+`
Maximum influences = `+s+`
Missing Weights = `+a+`
Not Sorted = `+r+`
Not Normalized = `+f+`
WeightCounts = [`+u+`]
Number of bones = `+b+`
Bad Bone Indices = `+A;return{skinned:!0,valid:a===0&&f===0&&A===0,report:Z}},t.prototype._checkDelayState=function(){var e=this.getScene();return this._geometry?this._geometry.load(e):this.delayLoadState===4&&(this.delayLoadState=2,this._queueLoad(e)),this},t.prototype._queueLoad=function(e){var i=this;e._addPendingData(this);var n=this.delayLoadingFile.indexOf(".babylonbinarymeshdata")!==-1;return ee.LoadFile(this.delayLoadingFile,function(r){r instanceof ArrayBuffer?i._delayLoadingFunction(r,i):i._delayLoadingFunction(JSON.parse(r),i),i.instances.forEach(function(a){a.refreshBoundingInfo(),a._syncSubMeshes()}),i.delayLoadState=1,e._removePendingData(i)},function(){},e.offlineProvider,n),this},t.prototype.isInFrustum=function(e){return this.delayLoadState===2||!o.prototype.isInFrustum.call(this,e)?!1:(this._checkDelayState(),!0)},t.prototype.setMaterialByID=function(e){var i=this.getScene().materials,n;for(n=i.length-1;n>-1;n--)if(i[n].id===e)return this.material=i[n],this;var r=this.getScene().multiMaterials;for(n=r.length-1;n>-1;n--)if(r[n].id===e)return this.material=r[n],this;return this},t.prototype.getAnimatables=function(){var e=new Array;return this.material&&e.push(this.material),this.skeleton&&e.push(this.skeleton),e},t.prototype.bakeTransformIntoVertices=function(e){if(!this.isVerticesDataPresent(v.PositionKind))return this;var i=this.subMeshes.splice(0);this._resetPointsArrayCache();var n=this.getVerticesData(v.PositionKind),r=new Array,a;for(a=0;a<n.length;a+=3)I.TransformCoordinates(I.FromArray(n,a),e).toArray(r,a);if(this.setVerticesData(v.PositionKind,r,this.getVertexBuffer(v.PositionKind).isUpdatable()),this.isVerticesDataPresent(v.NormalKind)){for(n=this.getVerticesData(v.NormalKind),r=[],a=0;a<n.length;a+=3)I.TransformNormal(I.FromArray(n,a),e).normalize().toArray(r,a);this.setVerticesData(v.NormalKind,r,this.getVertexBuffer(v.NormalKind).isUpdatable())}return e.m[0]*e.m[5]*e.m[10]<0&&this.flipFaces(),this.releaseSubMeshes(),this.subMeshes=i,this},t.prototype.bakeCurrentTransformIntoVertices=function(e){return e===void 0&&(e=!0),this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)),this.resetLocalMatrix(e),this},Object.defineProperty(t.prototype,"_positions",{get:function(){return this._geometry?this._geometry._positions:null},enumerable:!1,configurable:!0}),t.prototype._resetPointsArrayCache=function(){return this._geometry&&this._geometry._resetPointsArrayCache(),this},t.prototype._generatePointsArray=function(){return this._geometry?this._geometry._generatePointsArray():!1},t.prototype.clone=function(e,i,n,r){return e===void 0&&(e=""),i===void 0&&(i=null),r===void 0&&(r=!0),new t(e,this.getScene(),i,this,n,r)},t.prototype.dispose=function(e,i){i===void 0&&(i=!1),this.morphTargetManager=null,this._geometry&&this._geometry.releaseForMesh(this,!0);var n=this._internalMeshDataInfo;if(n._onBeforeDrawObservable&&n._onBeforeDrawObservable.clear(),n._onBeforeBindObservable&&n._onBeforeBindObservable.clear(),n._onBeforeRenderObservable&&n._onBeforeRenderObservable.clear(),n._onAfterRenderObservable&&n._onAfterRenderObservable.clear(),this._scene.useClonedMeshMap){if(n.meshMap)for(var r in n.meshMap){var a=n.meshMap[r];a&&(a._internalMeshDataInfo._source=null,n.meshMap[r]=void 0)}n._source&&n._source._internalMeshDataInfo.meshMap&&(n._source._internalMeshDataInfo.meshMap[this.uniqueId]=void 0)}else for(var s=this.getScene().meshes,f=0,l=s;f<l.length;f++){var u=l[f],a=u;a._internalMeshDataInfo&&a._internalMeshDataInfo._source&&a._internalMeshDataInfo._source===this&&(a._internalMeshDataInfo._source=null)}n._source=null,this._disposeInstanceSpecificData(),this._disposeThinInstanceSpecificData(),o.prototype.dispose.call(this,e,i)},t.prototype._disposeInstanceSpecificData=function(){},t.prototype._disposeThinInstanceSpecificData=function(){},t.prototype.applyDisplacementMap=function(e,i,n,r,a,s,f){var l=this;f===void 0&&(f=!1);var u=this.getScene(),h=function(c){var p=c.width,d=c.height,S=pt.CreateCanvas(p,d),_=S.getContext("2d");_.drawImage(c,0,0);var y=_.getImageData(0,0,p,d).data;l.applyDisplacementMapFromBuffer(y,p,d,i,n,a,s,f),r&&r(l)};return ee.LoadImage(e,h,function(){},u.offlineProvider),this},t.prototype.applyDisplacementMapFromBuffer=function(e,i,n,r,a,s,f,l){if(l===void 0&&(l=!1),!this.isVerticesDataPresent(v.PositionKind)||!this.isVerticesDataPresent(v.NormalKind)||!this.isVerticesDataPresent(v.UVKind))return re.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"),this;var u=this.getVerticesData(v.PositionKind,!0,!0),h=this.getVerticesData(v.NormalKind),c=this.getVerticesData(v.UVKind),p=I.Zero(),d=I.Zero(),S=J.Zero();s=s||J.Zero(),f=f||new J(1,1);for(var _=0;_<u.length;_+=3){I.FromArrayToRef(u,_,p),I.FromArrayToRef(h,_,d),J.FromArrayToRef(c,_/3*2,S);var y=Math.abs(S.x*f.x+s.x%1)*(i-1)%i|0,m=Math.abs(S.y*f.y+s.y%1)*(n-1)%n|0,T=(y+m*i)*4,b=e[T]/255,C=e[T+1]/255,P=e[T+2]/255,A=b*.3+C*.59+P*.11;d.normalize(),d.scaleInPlace(r+(a-r)*A),p=p.add(d),p.toArray(u,_)}return V.ComputeNormals(u,this.getIndices(),h),l?(this.setVerticesData(v.PositionKind,u),this.setVerticesData(v.NormalKind,h)):(this.updateVerticesData(v.PositionKind,u),this.updateVerticesData(v.NormalKind,h)),this},t.prototype.convertToFlatShadedMesh=function(){var e=this.getVerticesDataKinds(),i={},n={},r={},a=!1,s,f;for(s=0;s<e.length;s++){f=e[s];var l=this.getVertexBuffer(f);if(f===v.NormalKind){a=l.isUpdatable(),e.splice(s,1),s--;continue}i[f]=l,n[f]=i[f].getData(),r[f]=[]}var u=this.subMeshes.slice(0),h=this.getIndices(),c=this.getTotalIndices(),p;for(p=0;p<c;p++){var d=h[p];for(s=0;s<e.length;s++){f=e[s];for(var S=i[f].getStrideSize(),_=0;_<S;_++)r[f].push(n[f][d*S+_])}}var y=[],m=r[v.PositionKind];for(p=0;p<c;p+=3){h[p]=p,h[p+1]=p+1,h[p+2]=p+2;for(var T=I.FromArray(m,p*3),b=I.FromArray(m,(p+1)*3),C=I.FromArray(m,(p+2)*3),P=T.subtract(b),A=C.subtract(b),U=I.Normalize(I.Cross(P,A)),Z=0;Z<3;Z++)y.push(U.x),y.push(U.y),y.push(U.z)}for(this.setIndices(h),this.setVerticesData(v.NormalKind,y,a),s=0;s<e.length;s++)f=e[s],this.setVerticesData(f,r[f],i[f].isUpdatable());this.releaseSubMeshes();for(var j=0;j<u.length;j++){var k=u[j];ce.AddToMesh(k.materialIndex,k.indexStart,k.indexCount,k.indexStart,k.indexCount,this)}return this.synchronizeInstances(),this},t.prototype.convertToUnIndexedMesh=function(){var e=this.getVerticesDataKinds(),i={},n={},r={},a,s;for(a=0;a<e.length;a++){s=e[a];var f=this.getVertexBuffer(s);i[s]=f,n[s]=i[s].getData(),r[s]=[]}var l=this.subMeshes.slice(0),u=this.getIndices(),h=this.getTotalIndices(),c;for(c=0;c<h;c++){var p=u[c];for(a=0;a<e.length;a++){s=e[a];for(var d=i[s].getStrideSize(),S=0;S<d;S++)r[s].push(n[s][p*d+S])}}for(c=0;c<h;c+=3)u[c]=c,u[c+1]=c+1,u[c+2]=c+2;for(this.setIndices(u),a=0;a<e.length;a++)s=e[a],this.setVerticesData(s,r[s],i[s].isUpdatable());this.releaseSubMeshes();for(var _=0;_<l.length;_++){var y=l[_];ce.AddToMesh(y.materialIndex,y.indexStart,y.indexCount,y.indexStart,y.indexCount,this)}return this._unIndexed=!0,this.synchronizeInstances(),this},t.prototype.flipFaces=function(e){e===void 0&&(e=!1);var i=V.ExtractFromMesh(this),n;if(e&&this.isVerticesDataPresent(v.NormalKind)&&i.normals)for(n=0;n<i.normals.length;n++)i.normals[n]*=-1;if(i.indices){var r;for(n=0;n<i.indices.length;n+=3)r=i.indices[n+1],i.indices[n+1]=i.indices[n+2],i.indices[n+2]=r}return i.applyToMesh(this,this.isVertexBufferUpdatable(v.PositionKind)),this},t.prototype.increaseVertices=function(e){var i=V.ExtractFromMesh(this),n=i.uvs,r=i.indices,a=i.positions,s=i.normals;if(!r||!a||!s||!n)re.Warn("VertexData contains null entries");else{for(var f=e+1,l=new Array,u=0;u<f+1;u++)l[u]=new Array;for(var h,c,p=new I(0,0,0),d=new I(0,0,0),S=new J(0,0),_=new Array,y=new Array,m=new Array,T,b=a.length,C=n.length,u=0;u<r.length;u+=3){y[0]=r[u],y[1]=r[u+1],y[2]=r[u+2];for(var P=0;P<3;P++)if(h=y[P],c=y[(P+1)%3],m[h]===void 0&&m[c]===void 0?(m[h]=new Array,m[c]=new Array):(m[h]===void 0&&(m[h]=new Array),m[c]===void 0&&(m[c]=new Array)),m[h][c]===void 0&&m[c][h]===void 0){m[h][c]=[],p.x=(a[3*c]-a[3*h])/f,p.y=(a[3*c+1]-a[3*h+1])/f,p.z=(a[3*c+2]-a[3*h+2])/f,d.x=(s[3*c]-s[3*h])/f,d.y=(s[3*c+1]-s[3*h+1])/f,d.z=(s[3*c+2]-s[3*h+2])/f,S.x=(n[2*c]-n[2*h])/f,S.y=(n[2*c+1]-n[2*h+1])/f,m[h][c].push(h);for(var A=1;A<f;A++)m[h][c].push(a.length/3),a[b]=a[3*h]+A*p.x,s[b++]=s[3*h]+A*d.x,a[b]=a[3*h+1]+A*p.y,s[b++]=s[3*h+1]+A*d.y,a[b]=a[3*h+2]+A*p.z,s[b++]=s[3*h+2]+A*d.z,n[C++]=n[2*h]+A*S.x,n[C++]=n[2*h+1]+A*S.y;m[h][c].push(c),m[c][h]=new Array,T=m[h][c].length;for(var U=0;U<T;U++)m[c][h][U]=m[h][c][T-1-U]}l[0][0]=r[u],l[1][0]=m[r[u]][r[u+1]][1],l[1][1]=m[r[u]][r[u+2]][1];for(var A=2;A<f;A++){l[A][0]=m[r[u]][r[u+1]][A],l[A][A]=m[r[u]][r[u+2]][A],p.x=(a[3*l[A][A]]-a[3*l[A][0]])/A,p.y=(a[3*l[A][A]+1]-a[3*l[A][0]+1])/A,p.z=(a[3*l[A][A]+2]-a[3*l[A][0]+2])/A,d.x=(s[3*l[A][A]]-s[3*l[A][0]])/A,d.y=(s[3*l[A][A]+1]-s[3*l[A][0]+1])/A,d.z=(s[3*l[A][A]+2]-s[3*l[A][0]+2])/A,S.x=(n[2*l[A][A]]-n[2*l[A][0]])/A,S.y=(n[2*l[A][A]+1]-n[2*l[A][0]+1])/A;for(var P=1;P<A;P++)l[A][P]=a.length/3,a[b]=a[3*l[A][0]]+P*p.x,s[b++]=s[3*l[A][0]]+P*d.x,a[b]=a[3*l[A][0]+1]+P*p.y,s[b++]=s[3*l[A][0]+1]+P*d.y,a[b]=a[3*l[A][0]+2]+P*p.z,s[b++]=s[3*l[A][0]+2]+P*d.z,n[C++]=n[2*l[A][0]]+P*S.x,n[C++]=n[2*l[A][0]+1]+P*S.y}l[f]=m[r[u+1]][r[u+2]],_.push(l[0][0],l[1][0],l[1][1]);for(var A=1;A<f;A++){for(var P=0;P<A;P++)_.push(l[A][P],l[A+1][P],l[A+1][P+1]),_.push(l[A][P],l[A+1][P+1],l[A][P+1]);_.push(l[A][P],l[A+1][P],l[A+1][P+1])}}i.indices=_,i.applyToMesh(this,this.isVertexBufferUpdatable(v.PositionKind))}},t.prototype.forceSharedVertices=function(){var e=V.ExtractFromMesh(this),i=e.uvs,n=e.indices,r=e.positions,a=e.colors;if(n===void 0||r===void 0||n===null||r===null)re.Warn("VertexData contains empty entries");else{for(var s=new Array,f=new Array,l=new Array,u=new Array,h=new Array,c=0,p={},d,S,_=0;_<n.length;_+=3){S=[n[_],n[_+1],n[_+2]],h=new Array;for(var y=0;y<3;y++){h[y]="";for(var m=0;m<3;m++)Math.abs(r[3*S[y]+m])<1e-8&&(r[3*S[y]+m]=0),h[y]+=r[3*S[y]+m]+"|"}if(!(h[0]==h[1]||h[0]==h[2]||h[1]==h[2]))for(var y=0;y<3;y++){if(d=p[h[y]],d===void 0){p[h[y]]=c,d=c++;for(var m=0;m<3;m++)s.push(r[3*S[y]+m]);if(a!=null)for(var m=0;m<4;m++)u.push(a[4*S[y]+m]);if(i!=null)for(var m=0;m<2;m++)l.push(i[2*S[y]+m])}f.push(d)}}var T=new Array;V.ComputeNormals(s,f,T),e.positions=s,e.indices=f,e.normals=T,i!=null&&(e.uvs=l),a!=null&&(e.colors=u),e.applyToMesh(this,this.isVertexBufferUpdatable(v.PositionKind))}},t._instancedMeshFactory=function(e,i){throw F.WarnImport("InstancedMesh")},t._PhysicsImpostorParser=function(e,i,n){throw F.WarnImport("PhysicsImpostor")},t.prototype.createInstance=function(e){var i=this.geometry;if(i&&i.meshes.length>1)for(var n=i.meshes.slice(0),r=0,a=n;r<a.length;r++){var s=a[r];s!==this&&s.makeGeometryUnique()}return t._instancedMeshFactory(e,this)},t.prototype.synchronizeInstances=function(){this._geometry&&this._geometry.meshes.length!==1&&this.instances.length&&this.makeGeometryUnique();for(var e=0;e<this.instances.length;e++){var i=this.instances[e];i._syncSubMeshes()}return this},t.prototype.optimizeIndices=function(e){var i=this,n=this.getIndices(),r=this.getVerticesData(v.PositionKind);if(!r||!n)return this;for(var a=new Array,s=0;s<r.length;s=s+3)a.push(I.FromArray(r,s));var f=new Array;return at.SyncAsyncForLoop(a.length,40,function(l){for(var u=a.length-1-l,h=a[u],c=0;c<u;++c){var p=a[c];if(h.equals(p)){f[u]=c;break}}},function(){for(var l=0;l<n.length;++l)n[l]=f[n[l]]||n[l];var u=i.subMeshes.slice(0);i.setIndices(n),i.subMeshes=u,e&&e(i)}),this},t.prototype.serialize=function(e){e.name=this.name,e.id=this.id,e.uniqueId=this.uniqueId,e.type=this.getClassName(),z&&z.HasTags(this)&&(e.tags=z.GetTags(this)),e.position=this.position.asArray(),this.rotationQuaternion?e.rotationQuaternion=this.rotationQuaternion.asArray():this.rotation&&(e.rotation=this.rotation.asArray()),e.scaling=this.scaling.asArray(),this._postMultiplyPivotMatrix?e.pivotMatrix=this.getPivotMatrix().asArray():e.localMatrix=this.getPivotMatrix().asArray(),e.isEnabled=this.isEnabled(!1),e.isVisible=this.isVisible,e.infiniteDistance=this.infiniteDistance,e.pickable=this.isPickable,e.receiveShadows=this.receiveShadows,e.billboardMode=this.billboardMode,e.visibility=this.visibility,e.checkCollisions=this.checkCollisions,e.isBlocker=this.isBlocker,e.overrideMaterialSideOrientation=this.overrideMaterialSideOrientation,this.parent&&(e.parentId=this.parent.id),e.isUnIndexed=this.isUnIndexed;var i=this._geometry;if(i){var n=i.id;e.geometryId=n,e.subMeshes=[];for(var r=0;r<this.subMeshes.length;r++){var a=this.subMeshes[r];e.subMeshes.push({materialIndex:a.materialIndex,verticesStart:a.verticesStart,verticesCount:a.verticesCount,indexStart:a.indexStart,indexCount:a.indexCount})}}if(this.material?this.material.doNotSerialize||(e.materialId=this.material.id):this.material=null,this.morphTargetManager&&(e.morphTargetManagerId=this.morphTargetManager.uniqueId),this.skeleton&&(e.skeletonId=this.skeleton.id,e.numBoneInfluencers=this.numBoneInfluencers),this.getScene()._getComponent(Fe.NAME_PHYSICSENGINE)){var s=this.getPhysicsImpostor();s&&(e.physicsMass=s.getParam("mass"),e.physicsFriction=s.getParam("friction"),e.physicsRestitution=s.getParam("mass"),e.physicsImpostor=s.type)}this.metadata&&(e.metadata=this.metadata),e.instances=[];for(var f=0;f<this.instances.length;f++){var l=this.instances[f];if(!l.doNotSerialize){var u={name:l.name,id:l.id,isEnabled:l.isEnabled(!1),isVisible:l.isVisible,isPickable:l.isPickable,checkCollisions:l.checkCollisions,position:l.position.asArray(),scaling:l.scaling.asArray()};if(l.parent&&(u.parentId=l.parent.id),l.rotationQuaternion?u.rotationQuaternion=l.rotationQuaternion.asArray():l.rotation&&(u.rotation=l.rotation.asArray()),this.getScene()._getComponent(Fe.NAME_PHYSICSENGINE)){var s=l.getPhysicsImpostor();s&&(u.physicsMass=s.getParam("mass"),u.physicsFriction=s.getParam("friction"),u.physicsRestitution=s.getParam("mass"),u.physicsImpostor=s.type)}l.metadata&&(u.metadata=l.metadata),e.instances.push(u),Y.AppendSerializedAnimations(l,u),u.ranges=l.serializeAnimationRanges()}}if(this._thinInstanceDataStorage.instancesCount&&this._thinInstanceDataStorage.matrixData&&(e.thinInstances={instancesCount:this._thinInstanceDataStorage.instancesCount,matrixData:ee.SliceToArray(this._thinInstanceDataStorage.matrixData),matrixBufferSize:this._thinInstanceDataStorage.matrixBufferSize},this._userThinInstanceBuffersStorage)){var h={data:{},sizes:{},strides:{}};for(var c in this._userThinInstanceBuffersStorage.data)h.data[c]=ee.SliceToArray(this._userThinInstanceBuffersStorage.data[c]),h.sizes[c]=this._userThinInstanceBuffersStorage.sizes[c],h.strides[c]=this._userThinInstanceBuffersStorage.strides[c];e.thinInstances.userThinInstance=h}Y.AppendSerializedAnimations(this,e),e.ranges=this.serializeAnimationRanges(),e.layerMask=this.layerMask,e.alphaIndex=this.alphaIndex,e.hasVertexAlpha=this.hasVertexAlpha,e.overlayAlpha=this.overlayAlpha,e.overlayColor=this.overlayColor.asArray(),e.renderOverlay=this.renderOverlay,e.applyFog=this.applyFog,this.actionManager&&(e.actions=this.actionManager.serialize(this.name))},t.prototype._syncGeometryWithMorphTargetManager=function(){if(!!this.geometry){this._markSubMeshesAsAttributesDirty();var e=this._internalMeshDataInfo._morphTargetManager;if(e&&e.vertexCount){if(e.vertexCount!==this.getTotalVertices()){re.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."),this.morphTargetManager=null;return}for(var i=0;i<e.numInfluencers;i++){var n=e.getActiveTarget(i),r=n.getPositions();if(!r){re.Error("Invalid morph target. Target must have positions.");return}this.geometry.setVerticesData(v.PositionKind+i,r,!1,3);var a=n.getNormals();a&&this.geometry.setVerticesData(v.NormalKind+i,a,!1,3);var s=n.getTangents();s&&this.geometry.setVerticesData(v.TangentKind+i,s,!1,3);var f=n.getUVs();f&&this.geometry.setVerticesData(v.UVKind+"_"+i,f,!1,2)}}else for(var i=0;this.geometry.isVerticesDataPresent(v.PositionKind+i);)this.geometry.removeVerticesData(v.PositionKind+i),this.geometry.isVerticesDataPresent(v.NormalKind+i)&&this.geometry.removeVerticesData(v.NormalKind+i),this.geometry.isVerticesDataPresent(v.TangentKind+i)&&this.geometry.removeVerticesData(v.TangentKind+i),this.geometry.isVerticesDataPresent(v.UVKind+i)&&this.geometry.removeVerticesData(v.UVKind+"_"+i),i++}},t.Parse=function(e,i,n){var r;if(e.type&&e.type==="GroundMesh"?r=t._GroundMeshParser(e,i):r=new t(e.name,i),r.id=e.id,z&&z.AddTagsTo(r,e.tags),r.position=I.FromArray(e.position),e.metadata!==void 0&&(r.metadata=e.metadata),e.rotationQuaternion?r.rotationQuaternion=N.FromArray(e.rotationQuaternion):e.rotation&&(r.rotation=I.FromArray(e.rotation)),r.scaling=I.FromArray(e.scaling),e.localMatrix?r.setPreTransformMatrix(M.FromArray(e.localMatrix)):e.pivotMatrix&&r.setPivotMatrix(M.FromArray(e.pivotMatrix)),r.setEnabled(e.isEnabled),r.isVisible=e.isVisible,r.infiniteDistance=e.infiniteDistance,r.showBoundingBox=e.showBoundingBox,r.showSubMeshesBoundingBox=e.showSubMeshesBoundingBox,e.applyFog!==void 0&&(r.applyFog=e.applyFog),e.pickable!==void 0&&(r.isPickable=e.pickable),e.alphaIndex!==void 0&&(r.alphaIndex=e.alphaIndex),r.receiveShadows=e.receiveShadows,r.billboardMode=e.billboardMode,e.visibility!==void 0&&(r.visibility=e.visibility),r.checkCollisions=e.checkCollisions,r.overrideMaterialSideOrientation=e.overrideMaterialSideOrientation,e.isBlocker!==void 0&&(r.isBlocker=e.isBlocker),r._shouldGenerateFlatShading=e.useFlatShading,e.freezeWorldMatrix&&(r._waitingData.freezeWorldMatrix=e.freezeWorldMatrix),e.parentId&&(r._waitingParentId=e.parentId),e.actions!==void 0&&(r._waitingData.actions=e.actions),e.overlayAlpha!==void 0&&(r.overlayAlpha=e.overlayAlpha),e.overlayColor!==void 0&&(r.overlayColor=ne.FromArray(e.overlayColor)),e.renderOverlay!==void 0&&(r.renderOverlay=e.renderOverlay),r.isUnIndexed=!!e.isUnIndexed,r.hasVertexAlpha=e.hasVertexAlpha,e.delayLoadingFile?(r.delayLoadState=4,r.delayLoadingFile=n+e.delayLoadingFile,r._boundingInfo=new he(I.FromArray(e.boundingBoxMinimum),I.FromArray(e.boundingBoxMaximum)),e._binaryInfo&&(r._binaryInfo=e._binaryInfo),r._delayInfo=[],e.hasUVs&&r._delayInfo.push(v.UVKind),e.hasUVs2&&r._delayInfo.push(v.UV2Kind),e.hasUVs3&&r._delayInfo.push(v.UV3Kind),e.hasUVs4&&r._delayInfo.push(v.UV4Kind),e.hasUVs5&&r._delayInfo.push(v.UV5Kind),e.hasUVs6&&r._delayInfo.push(v.UV6Kind),e.hasColors&&r._delayInfo.push(v.ColorKind),e.hasMatricesIndices&&r._delayInfo.push(v.MatricesIndicesKind),e.hasMatricesWeights&&r._delayInfo.push(v.MatricesWeightsKind),r._delayLoadingFunction=le._ImportGeometry,Ye.ForceFullSceneLoadingForIncremental&&r._checkDelayState()):le._ImportGeometry(e,r),e.materialId?r.setMaterialByID(e.materialId):r.material=null,e.morphTargetManagerId>-1&&(r.morphTargetManager=i.getMorphTargetManagerById(e.morphTargetManagerId)),e.skeletonId!==void 0&&e.skeletonId!==null&&(r.skeleton=i.getLastSkeletonByID(e.skeletonId),e.numBoneInfluencers&&(r.numBoneInfluencers=e.numBoneInfluencers)),e.animations){for(var a=0;a<e.animations.length;a++){var s=e.animations[a],f=fe.GetClass("BABYLON.Animation");f&&r.animations.push(f.Parse(s))}Se.ParseAnimationRanges(r,e,i)}if(e.autoAnimate&&i.beginAnimation(r,e.autoAnimateFrom,e.autoAnimateTo,e.autoAnimateLoop,e.autoAnimateSpeed||1),e.layerMask&&!isNaN(e.layerMask)?r.layerMask=Math.abs(parseInt(e.layerMask)):r.layerMask=268435455,e.physicsImpostor&&t._PhysicsImpostorParser(i,r,e),e.lodMeshIds&&(r._waitingData.lods={ids:e.lodMeshIds,distances:e.lodDistances?e.lodDistances:null,coverages:e.lodCoverages?e.lodCoverages:null}),e.instances)for(var l=0;l<e.instances.length;l++){var u=e.instances[l],h=r.createInstance(u.name);if(u.id&&(h.id=u.id),z&&(u.tags?z.AddTagsTo(h,u.tags):z.AddTagsTo(h,e.tags)),h.position=I.FromArray(u.position),u.metadata!==void 0&&(h.metadata=u.metadata),u.parentId&&(h._waitingParentId=u.parentId),u.isEnabled!==void 0&&u.isEnabled!==null&&h.setEnabled(u.isEnabled),u.isVisible!==void 0&&u.isVisible!==null&&(h.isVisible=u.isVisible),u.isPickable!==void 0&&u.isPickable!==null&&(h.isPickable=u.isPickable),u.rotationQuaternion?h.rotationQuaternion=N.FromArray(u.rotationQuaternion):u.rotation&&(h.rotation=I.FromArray(u.rotation)),h.scaling=I.FromArray(u.scaling),u.checkCollisions!=null&&u.checkCollisions!=null&&(h.checkCollisions=u.checkCollisions),u.pickable!=null&&u.pickable!=null&&(h.isPickable=u.pickable),u.showBoundingBox!=null&&u.showBoundingBox!=null&&(h.showBoundingBox=u.showBoundingBox),u.showSubMeshesBoundingBox!=null&&u.showSubMeshesBoundingBox!=null&&(h.showSubMeshesBoundingBox=u.showSubMeshesBoundingBox),u.alphaIndex!=null&&u.showSubMeshesBoundingBox!=null&&(h.alphaIndex=u.alphaIndex),u.physicsImpostor&&t._PhysicsImpostorParser(i,h,u),u.animations){for(a=0;a<u.animations.length;a++){s=u.animations[a];var f=fe.GetClass("BABYLON.Animation");f&&h.animations.push(f.Parse(s))}Se.ParseAnimationRanges(h,u,i),u.autoAnimate&&i.beginAnimation(h,u.autoAnimateFrom,u.autoAnimateTo,u.autoAnimateLoop,u.autoAnimateSpeed||1)}}if(e.thinInstances){var c=e.thinInstances;if(c.matrixData?(r.thinInstanceSetBuffer("matrix",new Float32Array(c.matrixData),16,!1),r._thinInstanceDataStorage.matrixBufferSize=c.matrixBufferSize,r._thinInstanceDataStorage.instancesCount=c.instancesCount):r._thinInstanceDataStorage.matrixBufferSize=c.matrixBufferSize,e.thinInstances.userThinInstance){var p=e.thinInstances.userThinInstance;for(var d in p.data)r.thinInstanceSetBuffer(d,new Float32Array(p.data[d]),p.strides[d],!1),r._userThinInstanceBuffersStorage.sizes[d]=p.sizes[d]}}return r},t.CreateRibbon=function(e,i,n,r,a,s,f,l,u){throw F.WarnImport("MeshBuilder")},t.CreateDisc=function(e,i,n,r,a,s){throw F.WarnImport("MeshBuilder")},t.CreateBox=function(e,i,n,r,a){throw F.WarnImport("MeshBuilder")},t.CreateSphere=function(e,i,n,r,a,s){throw F.WarnImport("MeshBuilder")},t.CreateHemisphere=function(e,i,n,r){throw F.WarnImport("MeshBuilder")},t.CreateCylinder=function(e,i,n,r,a,s,f,l,u){throw F.WarnImport("MeshBuilder")},t.CreateTorus=function(e,i,n,r,a,s,f){throw F.WarnImport("MeshBuilder")},t.CreateTorusKnot=function(e,i,n,r,a,s,f,l,u,h){throw F.WarnImport("MeshBuilder")},t.CreateLines=function(e,i,n,r,a){throw F.WarnImport("MeshBuilder")},t.CreateDashedLines=function(e,i,n,r,a,s,f,l){throw F.WarnImport("MeshBuilder")},t.CreatePolygon=function(e,i,n,r,a,s,f){throw f===void 0&&(f=earcut),F.WarnImport("MeshBuilder")},t.ExtrudePolygon=function(e,i,n,r,a,s,f,l){throw l===void 0&&(l=earcut),F.WarnImport("MeshBuilder")},t.ExtrudeShape=function(e,i,n,r,a,s,f,l,u,h){throw F.WarnImport("MeshBuilder")},t.ExtrudeShapeCustom=function(e,i,n,r,a,s,f,l,u,h,c,p){throw F.WarnImport("MeshBuilder")},t.CreateLathe=function(e,i,n,r,a,s,f){throw F.WarnImport("MeshBuilder")},t.CreatePlane=function(e,i,n,r,a){throw F.WarnImport("MeshBuilder")},t.CreateGround=function(e,i,n,r,a,s){throw F.WarnImport("MeshBuilder")},t.CreateTiledGround=function(e,i,n,r,a,s,f,l,u){throw F.WarnImport("MeshBuilder")},t.CreateGroundFromHeightMap=function(e,i,n,r,a,s,f,l,u,h,c){throw F.WarnImport("MeshBuilder")},t.CreateTube=function(e,i,n,r,a,s,f,l,u,h){throw F.WarnImport("MeshBuilder")},t.CreatePolyhedron=function(e,i,n){throw F.WarnImport("MeshBuilder")},t.CreateIcoSphere=function(e,i,n){throw F.WarnImport("MeshBuilder")},t.CreateDecal=function(e,i,n,r,a,s){throw F.WarnImport("MeshBuilder")},t.CreateCapsule=function(e,i,n){throw F.WarnImport("MeshBuilder")},t.prototype.setPositionsForCPUSkinning=function(){var e=this._internalMeshDataInfo;if(!e._sourcePositions){var i=this.getVerticesData(v.PositionKind);if(!i)return e._sourcePositions;e._sourcePositions=new Float32Array(i),this.isVertexBufferUpdatable(v.PositionKind)||this.setVerticesData(v.PositionKind,i,!0)}return e._sourcePositions},t.prototype.setNormalsForCPUSkinning=function(){var e=this._internalMeshDataInfo;if(!e._sourceNormals){var i=this.getVerticesData(v.NormalKind);if(!i)return e._sourceNormals;e._sourceNormals=new Float32Array(i),this.isVertexBufferUpdatable(v.NormalKind)||this.setVerticesData(v.NormalKind,i,!0)}return e._sourceNormals},t.prototype.applySkeleton=function(e){if(!this.geometry)return this;if(this.geometry._softwareSkinningFrameId==this.getScene().getFrameId())return this;if(this.geometry._softwareSkinningFrameId=this.getScene().getFrameId(),!this.isVerticesDataPresent(v.PositionKind))return this;if(!this.isVerticesDataPresent(v.MatricesIndicesKind))return this;if(!this.isVerticesDataPresent(v.MatricesWeightsKind))return this;var i=this.isVerticesDataPresent(v.NormalKind),n=this._internalMeshDataInfo;if(!n._sourcePositions){var r=this.subMeshes.slice();this.setPositionsForCPUSkinning(),this.subMeshes=r}i&&!n._sourceNormals&&this.setNormalsForCPUSkinning();var a=this.getVerticesData(v.PositionKind);if(!a)return this;a instanceof Float32Array||(a=new Float32Array(a));var s=this.getVerticesData(v.NormalKind);if(i){if(!s)return this;s instanceof Float32Array||(s=new Float32Array(s))}var f=this.getVerticesData(v.MatricesIndicesKind),l=this.getVerticesData(v.MatricesWeightsKind);if(!l||!f)return this;for(var u=this.numBoneInfluencers>4,h=u?this.getVerticesData(v.MatricesIndicesExtraKind):null,c=u?this.getVerticesData(v.MatricesWeightsExtraKind):null,p=e.getTransformMatrices(this),d=I.Zero(),S=new M,_=new M,y=0,m,T=0;T<a.length;T+=3,y+=4){var b;for(m=0;m<4;m++)b=l[y+m],b>0&&(M.FromFloat32ArrayToRefScaled(p,Math.floor(f[y+m]*16),b,_),S.addToSelf(_));if(u)for(m=0;m<4;m++)b=c[y+m],b>0&&(M.FromFloat32ArrayToRefScaled(p,Math.floor(h[y+m]*16),b,_),S.addToSelf(_));I.TransformCoordinatesFromFloatsToRef(n._sourcePositions[T],n._sourcePositions[T+1],n._sourcePositions[T+2],S,d),d.toArray(a,T),i&&(I.TransformNormalFromFloatsToRef(n._sourceNormals[T],n._sourceNormals[T+1],n._sourceNormals[T+2],S,d),d.toArray(s,T)),S.reset()}return this.updateVerticesData(v.PositionKind,a),i&&this.updateVerticesData(v.NormalKind,s),this},t.MinMax=function(e){var i=null,n=null;return e.forEach(function(r){var a=r.getBoundingInfo(),s=a.boundingBox;!i||!n?(i=s.minimumWorld,n=s.maximumWorld):(i.minimizeInPlace(s.minimumWorld),n.maximizeInPlace(s.maximumWorld))}),!i||!n?{min:I.Zero(),max:I.Zero()}:{min:i,max:n}},t.Center=function(e){var i=e instanceof Array?t.MinMax(e):e;return I.Center(i.min,i.max)},t.MergeMeshes=function(e,i,n,r,a,s){i===void 0&&(i=!0);var f;if(!n){var l=0;for(f=0;f<e.length;f++)if(e[f]&&(l+=e[f].getTotalVertices(),l>=65536))return re.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"),null}if(s){var u=null,h,c;a=!1}var p=new Array,d=new Array,S=null,_,y=new Array,m=null;for(f=0;f<e.length;f++)if(e[f]){var T=e[f];if(T.isAnInstance)return re.Warn("Cannot merge instance meshes."),null;var b=T.computeWorldMatrix(!0);if(_=V.ExtractFromMesh(T,!0,!0),_.transform(b),S?S.merge(_,n):(S=_,m=T),a&&y.push(T.getTotalIndices()),s)if(T.material){var C=T.material;if(C instanceof Le){for(c=0;c<C.subMaterials.length;c++)p.indexOf(C.subMaterials[c])<0&&p.push(C.subMaterials[c]);for(h=0;h<T.subMeshes.length;h++)d.push(p.indexOf(C.subMaterials[T.subMeshes[h].materialIndex])),y.push(T.subMeshes[h].indexCount)}else for(p.indexOf(C)<0&&p.push(C),h=0;h<T.subMeshes.length;h++)d.push(p.indexOf(C)),y.push(T.subMeshes[h].indexCount)}else for(h=0;h<T.subMeshes.length;h++)d.push(0),y.push(T.subMeshes[h].indexCount)}if(m=m,r||(r=new t(m.name+"_merged",m.getScene())),S.applyToMesh(r),r.checkCollisions=m.checkCollisions,r.overrideMaterialSideOrientation=m.overrideMaterialSideOrientation,i)for(f=0;f<e.length;f++)e[f]&&e[f].dispose();if(a||s){r.releaseSubMeshes(),f=0;for(var P=0;f<y.length;)ce.CreateFromIndices(0,P,y[f],r),P+=y[f],f++}if(s){for(u=new Le(m.name+"_merged",m.getScene()),u.subMaterials=p,h=0;h<r.subMeshes.length;h++)r.subMeshes[h].materialIndex=d[h];r.material=u}else r.material=m.material;return r},t.prototype.addInstance=function(e){e._indexInSourceMeshInstanceArray=this.instances.length,this.instances.push(e)},t.prototype.removeInstance=function(e){var i=e._indexInSourceMeshInstanceArray;if(i!=-1){if(i!==this.instances.length-1){var n=this.instances[this.instances.length-1];this.instances[i]=n,n._indexInSourceMeshInstanceArray=i}e._indexInSourceMeshInstanceArray=-1,this.instances.pop()}},t.FRONTSIDE=V.FRONTSIDE,t.BACKSIDE=V.BACKSIDE,t.DOUBLESIDE=V.DOUBLESIDE,t.DEFAULTSIDE=V.DEFAULTSIDE,t.NO_CAP=0,t.CAP_START=1,t.CAP_END=2,t.CAP_ALL=3,t.NO_FLIP=0,t.FLIP_TILE=1,t.ROTATE_TILE=2,t.FLIP_ROW=3,t.ROTATE_ROW=4,t.FLIP_N_ROTATE_TILE=5,t.FLIP_N_ROTATE_ROW=6,t.CENTER=0,t.LEFT=1,t.RIGHT=2,t.TOP=3,t.BOTTOM=4,t._GroundMeshParser=function(e,i){throw F.WarnImport("GroundMesh")},t}(He);fe.RegisteredTypes["BABYLON.Mesh"]=$;V.CreateBox=function(o){var t=6,e=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23],i=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],n=[],r=[],a=o.width||o.size||1,s=o.height||o.size||1,f=o.depth||o.size||1,l=o.wrap||!1,u=o.topBaseAt===void 0?1:o.topBaseAt,h=o.bottomBaseAt===void 0?0:o.bottomBaseAt;u=(u+4)%4,h=(h+4)%4;var c=[2,0,3,1],p=[2,0,1,3],d=c[u],S=p[h],_=[1,-1,1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,-1,1,-1,1,1,1,1,-1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,1];if(l){e=[2,3,0,2,0,1,4,5,6,4,6,7,9,10,11,9,11,8,12,14,15,12,13,14],_=[-1,1,1,1,1,1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,1,1,1,-1,1,-1,-1,1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1];for(var y=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1]],m=[[-1,-1,1],[1,-1,1],[1,-1,-1],[-1,-1,-1]],T=[17,18,19,16],b=[22,23,20,21];d>0;)y.unshift(y.pop()),T.unshift(T.pop()),d--;for(;S>0;)m.unshift(m.pop()),b.unshift(b.pop()),S--;y=y.flat(),m=m.flat(),_=_.concat(y).concat(m),e.push(T[0],T[2],T[3],T[0],T[1],T[2]),e.push(b[0],b[2],b[3],b[0],b[1],b[2])}var C=[a/2,s/2,f/2];r=_.reduce(function(ue,tt,it){return ue.concat(tt*C[it%3])},[]);for(var P=o.sideOrientation===0?0:o.sideOrientation||V.DEFAULTSIDE,A=o.faceUV||new Array(6),U=o.faceColors,Z=[],j=0;j<6;j++)A[j]===void 0&&(A[j]=new ot(0,0,1,1)),U&&U[j]===void 0&&(U[j]=new _e(1,1,1,1));for(var k=0;k<t;k++)if(n.push(A[k].z,A[k].w),n.push(A[k].x,A[k].w),n.push(A[k].x,A[k].y),n.push(A[k].z,A[k].y),U)for(var Ee=0;Ee<4;Ee++)Z.push(U[k].r,U[k].g,U[k].b,U[k].a);V._ComputeSides(P,r,e,i,n,o.frontUVs,o.backUVs);var K=new V;if(K.indices=e,K.positions=r,K.normals=i,K.uvs=n,U){var ve=P===V.DOUBLESIDE?Z.concat(Z):Z;K.colors=ve}return K};$.CreateBox=function(o,t,e,i,n){e===void 0&&(e=null);var r={size:t,sideOrientation:n,updatable:i};return Ke.CreateBox(o,r,e)};var Ke=function(){function o(){}return o.CreateBox=function(t,e,i){i===void 0&&(i=null);var n=new $(t,i);e.sideOrientation=$._GetDefaultSideOrientation(e.sideOrientation),n._originalBuilderSideOrientation=e.sideOrientation;var r=V.CreateBox(e);return r.applyToMesh(n,e.updatable),n},o}();V.CreatePlane=function(o){var t=[],e=[],i=[],n=[],r=o.width||o.size||1,a=o.height||o.size||1,s=o.sideOrientation===0?0:o.sideOrientation||V.DEFAULTSIDE,f=r/2,l=a/2;e.push(-f,-l,0),i.push(0,0,-1),n.push(0,0),e.push(f,-l,0),i.push(0,0,-1),n.push(1,0),e.push(f,l,0),i.push(0,0,-1),n.push(1,1),e.push(-f,l,0),i.push(0,0,-1),n.push(0,1),t.push(0),t.push(1),t.push(2),t.push(0),t.push(2),t.push(3),V._ComputeSides(s,e,t,i,n,o.frontUVs,o.backUVs);var u=new V;return u.indices=t,u.positions=e,u.normals=i,u.uvs=n,u};$.CreatePlane=function(o,t,e,i,n){var r={size:t,width:t,height:t,sideOrientation:n,updatable:i};return je.CreatePlane(o,r,e)};var je=function(){function o(){}return o.CreatePlane=function(t,e,i){i===void 0&&(i=null);var n=new $(t,i);e.sideOrientation=$._GetDefaultSideOrientation(e.sideOrientation),n._originalBuilderSideOrientation=e.sideOrientation;var r=V.CreatePlane(e);return r.applyToMesh(n,e.updatable),e.sourcePlane&&(n.translate(e.sourcePlane.normal,-e.sourcePlane.d),n.setDirection(e.sourcePlane.normal.scale(-1))),n},o}(),Pe=function(){function o(){this.previousWorldMatrices={},this.previousBones={}}return o.AddUniforms=function(t){t.push("previousWorld","previousViewProjection")},o.AddSamplers=function(t){},o.prototype.bindForSubMesh=function(t,e,i,n,r){e.prePassRenderer&&e.prePassRenderer.enabled&&e.prePassRenderer.getIndex(2)!==-1&&(this.previousWorldMatrices[i.uniqueId]||(this.previousWorldMatrices[i.uniqueId]=M.Identity()),this.previousViewProjection||(this.previousViewProjection=e.getTransformMatrix()),t.setMatrix("previousWorld",this.previousWorldMatrices[i.uniqueId]),t.setMatrix("previousViewProjection",this.previousViewProjection),this.previousWorldMatrices[i.uniqueId]=n.clone(),this.previousViewProjection=e.getTransformMatrix().clone())},o}(),At=function(o){W(t,o);function t(e,i){var n=o.call(this,e,i)||this;return n._normalMatrix=new M,n._storeEffectOnSubMeshes=!0,n}return t.prototype.getEffect=function(){return this._activeEffect},t.prototype.isReady=function(e,i){return e?!e.subMeshes||e.subMeshes.length===0?!0:this.isReadyForSubMesh(e,e.subMeshes[0],i):!1},t.prototype._isReadyForSubMesh=function(e){var i=e._materialDefines;return!!(!this.checkReadyOnEveryCall&&e.effect&&i&&i._renderId===this.getScene().getRenderId())},t.prototype.bindOnlyWorldMatrix=function(e){this._activeEffect.setMatrix("world",e)},t.prototype.bindOnlyNormalMatrix=function(e){this._activeEffect.setMatrix("normalMatrix",e)},t.prototype.bind=function(e,i){!i||this.bindForSubMesh(e,i,i.subMeshes[0])},t.prototype._afterBind=function(e,i){i===void 0&&(i=null),o.prototype._afterBind.call(this,e),this.getScene()._cachedEffect=i},t.prototype._mustRebind=function(e,i,n){return n===void 0&&(n=1),e.isCachedMaterialInvalid(this,i,n)},t}(Q),Tt=function(){function o(){}return o.BindClipPlane=function(t,e){if(e.clipPlane){var i=e.clipPlane;t.setFloat4("vClipPlane",i.normal.x,i.normal.y,i.normal.z,i.d)}if(e.clipPlane2){var i=e.clipPlane2;t.setFloat4("vClipPlane2",i.normal.x,i.normal.y,i.normal.z,i.d)}if(e.clipPlane3){var i=e.clipPlane3;t.setFloat4("vClipPlane3",i.normal.x,i.normal.y,i.normal.z,i.d)}if(e.clipPlane4){var i=e.clipPlane4;t.setFloat4("vClipPlane4",i.normal.x,i.normal.y,i.normal.z,i.d)}if(e.clipPlane5){var i=e.clipPlane5;t.setFloat4("vClipPlane5",i.normal.x,i.normal.y,i.normal.z,i.d)}if(e.clipPlane6){var i=e.clipPlane6;t.setFloat4("vClipPlane6",i.normal.x,i.normal.y,i.normal.z,i.d)}},o}(),O=function(){function o(){}return o.BindEyePosition=function(t,e,i){if(i===void 0&&(i="vEyePosition"),e._forcedViewPosition){t.setVector3(i,e._forcedViewPosition);return}var n=e.activeCamera.globalPosition;n||(n=e.activeCamera.devicePosition),t.setVector3(i,e._mirroredCameraPosition?e._mirroredCameraPosition:n)},o.PrepareDefinesForMergedUV=function(t,e,i){e._needUVs=!0,e[i]=!0,t.getTextureMatrix().isIdentityAs3x2()?(e[i+"DIRECTUV"]=t.coordinatesIndex+1,t.coordinatesIndex===0?e.MAINUV1=!0:e.MAINUV2=!0):e[i+"DIRECTUV"]=0},o.BindTextureMatrix=function(t,e,i){var n=t.getTextureMatrix();e.updateMatrix(i+"Matrix",n)},o.GetFogState=function(t,e){return e.fogEnabled&&t.applyFog&&e.fogMode!==G.FOGMODE_NONE},o.PrepareDefinesForMisc=function(t,e,i,n,r,a,s){s._areMiscDirty&&(s.LOGARITHMICDEPTH=i,s.POINTSIZE=n,s.FOG=r&&this.GetFogState(t,e),s.NONUNIFORMSCALING=t.nonUniformScaling,s.ALPHATEST=a)},o.PrepareDefinesForFrameBoundValues=function(t,e,i,n,r,a){r===void 0&&(r=null),a===void 0&&(a=!1);var s=!1,f=!1,l=!1,u=!1,h=!1,c=!1,p=!1;f=r==null?t.clipPlane!==void 0&&t.clipPlane!==null:r,l=r==null?t.clipPlane2!==void 0&&t.clipPlane2!==null:r,u=r==null?t.clipPlane3!==void 0&&t.clipPlane3!==null:r,h=r==null?t.clipPlane4!==void 0&&t.clipPlane4!==null:r,c=r==null?t.clipPlane5!==void 0&&t.clipPlane5!==null:r,p=r==null?t.clipPlane6!==void 0&&t.clipPlane6!==null:r,i.CLIPPLANE!==f&&(i.CLIPPLANE=f,s=!0),i.CLIPPLANE2!==l&&(i.CLIPPLANE2=l,s=!0),i.CLIPPLANE3!==u&&(i.CLIPPLANE3=u,s=!0),i.CLIPPLANE4!==h&&(i.CLIPPLANE4=h,s=!0),i.CLIPPLANE5!==c&&(i.CLIPPLANE5=c,s=!0),i.CLIPPLANE6!==p&&(i.CLIPPLANE6=p,s=!0),i.DEPTHPREPASS!==!e.getColorWrite()&&(i.DEPTHPREPASS=!i.DEPTHPREPASS,s=!0),i.INSTANCES!==n&&(i.INSTANCES=n,s=!0),i.THIN_INSTANCES!==a&&(i.THIN_INSTANCES=a,s=!0),s&&i.markAsUnprocessed()},o.PrepareDefinesForBones=function(t,e){if(t.useBones&&t.computeBonesUsingShaders&&t.skeleton){e.NUM_BONE_INFLUENCERS=t.numBoneInfluencers;var i=e.BONETEXTURE!==void 0;if(t.skeleton.isUsingTextureForMatrices&&i)e.BONETEXTURE=!0;else{e.BonesPerMesh=t.skeleton.bones.length+1,e.BONETEXTURE=i?!1:void 0;var n=t.getScene().prePassRenderer;if(n&&n.enabled){var r=n.excludedSkinnedMesh.indexOf(t)===-1;e.BONES_VELOCITY_ENABLED=r}}}else e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0},o.PrepareDefinesForMorphTargets=function(t,e){var i=t.morphTargetManager;i?(e.MORPHTARGETS_UV=i.supportsUVs&&e.UV1,e.MORPHTARGETS_TANGENT=i.supportsTangents&&e.TANGENT,e.MORPHTARGETS_NORMAL=i.supportsNormals&&e.NORMAL,e.MORPHTARGETS=i.numInfluencers>0,e.NUM_MORPH_INFLUENCERS=i.numInfluencers):(e.MORPHTARGETS_UV=!1,e.MORPHTARGETS_TANGENT=!1,e.MORPHTARGETS_NORMAL=!1,e.MORPHTARGETS=!1,e.NUM_MORPH_INFLUENCERS=0)},o.PrepareDefinesForAttributes=function(t,e,i,n,r,a){if(r===void 0&&(r=!1),a===void 0&&(a=!0),!e._areAttributesDirty&&e._needNormals===e._normals&&e._needUVs===e._uvs)return!1;if(e._normals=e._needNormals,e._uvs=e._needUVs,e.NORMAL=e._needNormals&&t.isVerticesDataPresent(v.NormalKind),e._needNormals&&t.isVerticesDataPresent(v.TangentKind)&&(e.TANGENT=!0),e._needUVs?(e.UV1=t.isVerticesDataPresent(v.UVKind),e.UV2=t.isVerticesDataPresent(v.UV2Kind)):(e.UV1=!1,e.UV2=!1),i){var s=t.useVertexColors&&t.isVerticesDataPresent(v.ColorKind);e.VERTEXCOLOR=s,e.VERTEXALPHA=t.hasVertexAlpha&&s&&a}return n&&this.PrepareDefinesForBones(t,e),r&&this.PrepareDefinesForMorphTargets(t,e),!0},o.PrepareDefinesForMultiview=function(t,e){if(t.activeCamera){var i=e.MULTIVIEW;e.MULTIVIEW=t.activeCamera.outputRenderTarget!==null&&t.activeCamera.outputRenderTarget.getViewCount()>1,e.MULTIVIEW!=i&&e.markAsUnprocessed()}},o.PrepareDefinesForPrePass=function(t,e,i){var n=e.PREPASS;if(!!e._arePrePassDirty){var r=[{type:1,define:"PREPASS_POSITION",index:"PREPASS_POSITION_INDEX"},{type:2,define:"PREPASS_VELOCITY",index:"PREPASS_VELOCITY_INDEX"},{type:3,define:"PREPASS_REFLECTIVITY",index:"PREPASS_REFLECTIVITY_INDEX"},{type:0,define:"PREPASS_IRRADIANCE",index:"PREPASS_IRRADIANCE_INDEX"},{type:6,define:"PREPASS_ALBEDO",index:"PREPASS_ALBEDO_INDEX"},{type:5,define:"PREPASS_DEPTHNORMAL",index:"PREPASS_DEPTHNORMAL_INDEX"}];if(t.prePassRenderer&&t.prePassRenderer.enabled&&i){e.PREPASS=!0,e.SCENE_MRT_COUNT=t.prePassRenderer.mrtCount;for(var a=0;a<r.length;a++){var s=t.prePassRenderer.getIndex(r[a].type);s!==-1?(e[r[a].define]=!0,e[r[a].index]=s):e[r[a].define]=!1}}else{e.PREPASS=!1;for(var a=0;a<r.length;a++)e[r[a].define]=!1}e.PREPASS!=n&&(e.markAsUnprocessed(),e.markAsImageProcessingDirty())}},o.PrepareDefinesForLight=function(t,e,i,n,r,a,s){switch(s.needNormals=!0,r["LIGHT"+n]===void 0&&(s.needRebuild=!0),r["LIGHT"+n]=!0,r["SPOTLIGHT"+n]=!1,r["HEMILIGHT"+n]=!1,r["POINTLIGHT"+n]=!1,r["DIRLIGHT"+n]=!1,i.prepareLightSpecificDefines(r,n),r["LIGHT_FALLOFF_PHYSICAL"+n]=!1,r["LIGHT_FALLOFF_GLTF"+n]=!1,r["LIGHT_FALLOFF_STANDARD"+n]=!1,i.falloffType){case me.FALLOFF_GLTF:r["LIGHT_FALLOFF_GLTF"+n]=!0;break;case me.FALLOFF_PHYSICAL:r["LIGHT_FALLOFF_PHYSICAL"+n]=!0;break;case me.FALLOFF_STANDARD:r["LIGHT_FALLOFF_STANDARD"+n]=!0;break}if(a&&!i.specular.equalsFloats(0,0,0)&&(s.specularEnabled=!0),r["SHADOW"+n]=!1,r["SHADOWCSM"+n]=!1,r["SHADOWCSMDEBUG"+n]=!1,r["SHADOWCSMNUM_CASCADES"+n]=!1,r["SHADOWCSMUSESHADOWMAXZ"+n]=!1,r["SHADOWCSMNOBLEND"+n]=!1,r["SHADOWCSM_RIGHTHANDED"+n]=!1,r["SHADOWPCF"+n]=!1,r["SHADOWPCSS"+n]=!1,r["SHADOWPOISSON"+n]=!1,r["SHADOWESM"+n]=!1,r["SHADOWCLOSEESM"+n]=!1,r["SHADOWCUBE"+n]=!1,r["SHADOWLOWQUALITY"+n]=!1,r["SHADOWMEDIUMQUALITY"+n]=!1,e&&e.receiveShadows&&t.shadowsEnabled&&i.shadowEnabled){var f=i.getShadowGenerator();if(f){var l=f.getShadowMap();l&&l.renderList&&l.renderList.length>0&&(s.shadowEnabled=!0,f.prepareDefines(r,n))}}i.lightmapMode!=me.LIGHTMAP_DEFAULT?(s.lightmapMode=!0,r["LIGHTMAPEXCLUDED"+n]=!0,r["LIGHTMAPNOSPECULAR"+n]=i.lightmapMode==me.LIGHTMAP_SHADOWSONLY):(r["LIGHTMAPEXCLUDED"+n]=!1,r["LIGHTMAPNOSPECULAR"+n]=!1)},o.PrepareDefinesForLights=function(t,e,i,n,r,a){if(r===void 0&&(r=4),a===void 0&&(a=!1),!i._areLightsDirty)return i._needNormals;var s=0,f={needNormals:!1,needRebuild:!1,lightmapMode:!1,shadowEnabled:!1,specularEnabled:!1};if(t.lightsEnabled&&!a)for(var l=0,u=e.lightSources;l<u.length;l++){var h=u[l];if(this.PrepareDefinesForLight(t,e,h,s,i,n,f),s++,s===r)break}i.SPECULARTERM=f.specularEnabled,i.SHADOWS=f.shadowEnabled;for(var c=s;c<r;c++)i["LIGHT"+c]!==void 0&&(i["LIGHT"+c]=!1,i["HEMILIGHT"+c]=!1,i["POINTLIGHT"+c]=!1,i["DIRLIGHT"+c]=!1,i["SPOTLIGHT"+c]=!1,i["SHADOW"+c]=!1,i["SHADOWCSM"+c]=!1,i["SHADOWCSMDEBUG"+c]=!1,i["SHADOWCSMNUM_CASCADES"+c]=!1,i["SHADOWCSMUSESHADOWMAXZ"+c]=!1,i["SHADOWCSMNOBLEND"+c]=!1,i["SHADOWCSM_RIGHTHANDED"+c]=!1,i["SHADOWPCF"+c]=!1,i["SHADOWPCSS"+c]=!1,i["SHADOWPOISSON"+c]=!1,i["SHADOWESM"+c]=!1,i["SHADOWCLOSEESM"+c]=!1,i["SHADOWCUBE"+c]=!1,i["SHADOWLOWQUALITY"+c]=!1,i["SHADOWMEDIUMQUALITY"+c]=!1);var p=t.getEngine().getCaps();return i.SHADOWFLOAT===void 0&&(f.needRebuild=!0),i.SHADOWFLOAT=f.shadowEnabled&&(p.textureFloatRender&&p.textureFloatLinearFiltering||p.textureHalfFloatRender&&p.textureHalfFloatLinearFiltering),i.LIGHTMAPEXCLUDED=f.lightmapMode,f.needRebuild&&i.rebuild(),f.needNormals},o.PrepareUniformsAndSamplersForLight=function(t,e,i,n,r,a){r===void 0&&(r=null),a===void 0&&(a=!1),r&&r.push("Light"+t),!a&&(e.push("vLightData"+t,"vLightDiffuse"+t,"vLightSpecular"+t,"vLightDirection"+t,"vLightFalloff"+t,"vLightGround"+t,"lightMatrix"+t,"shadowsInfo"+t,"depthValues"+t),i.push("shadowSampler"+t),i.push("depthSampler"+t),e.push("viewFrustumZ"+t,"cascadeBlendFactor"+t,"lightSizeUVCorrection"+t,"depthCorrection"+t,"penumbraDarkness"+t,"frustumLengths"+t),n&&(i.push("projectionLightSampler"+t),e.push("textureProjectionMatrix"+t)))},o.PrepareUniformsAndSamplersList=function(t,e,i,n){n===void 0&&(n=4);var r,a=null;if(t.uniformsNames){var s=t;r=s.uniformsNames,a=s.uniformBuffersNames,e=s.samplers,i=s.defines,n=s.maxSimultaneousLights||0}else r=t,e||(e=[]);for(var f=0;f<n&&i["LIGHT"+f];f++)this.PrepareUniformsAndSamplersForLight(f,r,e,i["PROJECTEDLIGHTTEXTURE"+f],a);i.NUM_MORPH_INFLUENCERS&&r.push("morphTargetInfluences")},o.HandleFallbacksForShadows=function(t,e,i,n){i===void 0&&(i=4),n===void 0&&(n=0);for(var r=0,a=0;a<i&&t["LIGHT"+a];a++)a>0&&(r=n+a,e.addFallback(r,"LIGHT"+a)),t.SHADOWS||(t["SHADOW"+a]&&e.addFallback(n,"SHADOW"+a),t["SHADOWPCF"+a]&&e.addFallback(n,"SHADOWPCF"+a),t["SHADOWPCSS"+a]&&e.addFallback(n,"SHADOWPCSS"+a),t["SHADOWPOISSON"+a]&&e.addFallback(n,"SHADOWPOISSON"+a),t["SHADOWESM"+a]&&e.addFallback(n,"SHADOWESM"+a),t["SHADOWCLOSEESM"+a]&&e.addFallback(n,"SHADOWCLOSEESM"+a));return r++},o.PrepareAttributesForMorphTargetsInfluencers=function(t,e,i){this._TmpMorphInfluencers.NUM_MORPH_INFLUENCERS=i,this.PrepareAttributesForMorphTargets(t,e,this._TmpMorphInfluencers)},o.PrepareAttributesForMorphTargets=function(t,e,i){var n=i.NUM_MORPH_INFLUENCERS;if(n>0&&Re.LastCreatedEngine)for(var r=Re.LastCreatedEngine.getCaps().maxVertexAttribs,a=e.morphTargetManager,s=a&&a.supportsNormals&&i.NORMAL,f=a&&a.supportsTangents&&i.TANGENT,l=a&&a.supportsUVs&&i.UV1,u=0;u<n;u++)t.push(v.PositionKind+u),s&&t.push(v.NormalKind+u),f&&t.push(v.TangentKind+u),l&&t.push(v.UVKind+"_"+u),t.length>r&&re.Error("Cannot add more vertex attributes for mesh "+e.name)},o.PrepareAttributesForBones=function(t,e,i,n){i.NUM_BONE_INFLUENCERS>0&&(n.addCPUSkinningFallback(0,e),t.push(v.MatricesIndicesKind),t.push(v.MatricesWeightsKind),i.NUM_BONE_INFLUENCERS>4&&(t.push(v.MatricesIndicesExtraKind),t.push(v.MatricesWeightsExtraKind)))},o.PrepareAttributesForInstances=function(t,e){(e.INSTANCES||e.THIN_INSTANCES)&&this.PushAttributesForInstances(t)},o.PushAttributesForInstances=function(t){t.push("world0"),t.push("world1"),t.push("world2"),t.push("world3")},o.BindLightProperties=function(t,e,i){t.transferToEffect(e,i+"")},o.BindLight=function(t,e,i,n,r,a){a===void 0&&(a=!1),t._bindLight(e,i,n,r,a)},o.BindLights=function(t,e,i,n,r,a){r===void 0&&(r=4),a===void 0&&(a=!1);for(var s=Math.min(e.lightSources.length,r),f=0;f<s;f++){var l=e.lightSources[f];this.BindLight(l,f,t,i,typeof n=="boolean"?n:n.SPECULARTERM,a)}},o.BindFogParameters=function(t,e,i,n){n===void 0&&(n=!1),t.fogEnabled&&e.applyFog&&t.fogMode!==G.FOGMODE_NONE&&(i.setFloat4("vFogInfos",t.fogMode,t.fogStart,t.fogEnd,t.fogDensity),n?(t.fogColor.toLinearSpaceToRef(this._tempFogColor),i.setColor3("vFogColor",this._tempFogColor)):i.setColor3("vFogColor",t.fogColor))},o.BindBonesParameters=function(t,e,i){if(!(!e||!t)&&(t.computeBonesUsingShaders&&e._bonesComputationForcedToCPU&&(t.computeBonesUsingShaders=!1),t.useBones&&t.computeBonesUsingShaders&&t.skeleton)){var n=t.skeleton;if(n.isUsingTextureForMatrices&&e.getUniformIndex("boneTextureWidth")>-1){var r=n.getTransformMatrixTexture(t);e.setTexture("boneSampler",r),e.setFloat("boneTextureWidth",4*(n.bones.length+1))}else{var a=n.getTransformMatrices(t);a&&(e.setMatrices("mBones",a),i&&t.getScene().prePassRenderer&&t.getScene().prePassRenderer.getIndex(2)&&(i.previousBones[t.uniqueId]&&e.setMatrices("mPreviousBones",i.previousBones[t.uniqueId]),o._CopyBonesTransformationMatrices(a,i.previousBones[t.uniqueId])))}}},o._CopyBonesTransformationMatrices=function(t,e){return e.set(t),e},o.BindMorphTargetParameters=function(t,e){var i=t.morphTargetManager;!t||!i||e.setFloatArray("morphTargetInfluences",i.influences)},o.BindLogDepth=function(t,e,i){t.LOGARITHMICDEPTH&&e.setFloat("logarithmicDepthConstant",2/(Math.log(i.activeCamera.maxZ+1)/Math.LN2))},o.BindClipPlane=function(t,e){Tt.BindClipPlane(t,e)},o._TmpMorphInfluencers={NUM_MORPH_INFLUENCERS:0},o._tempFogColor=ne.Black(),o}(),Et=function(){function o(t){this._wrapU=1,this._wrapV=1,this.wrapR=1,this.anisotropicFilteringLevel=4,this.delayLoadState=0,this._texture=null,this._engine=null,this._cachedSize=Ae.Zero(),this._cachedBaseSize=Ae.Zero(),this._texture=t,this._texture&&(this._engine=this._texture.getEngine())}return Object.defineProperty(o.prototype,"wrapU",{get:function(){return this._wrapU},set:function(t){this._wrapU=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"wrapV",{get:function(){return this._wrapV},set:function(t){this._wrapV=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"coordinatesMode",{get:function(){return 0},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"isCube",{get:function(){return this._texture?this._texture.isCube:!1},set:function(t){!this._texture||(this._texture.isCube=t)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"is3D",{get:function(){return this._texture?this._texture.is3D:!1},set:function(t){!this._texture||(this._texture.is3D=t)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"is2DArray",{get:function(){return this._texture?this._texture.is2DArray:!1},set:function(t){!this._texture||(this._texture.is2DArray=t)},enumerable:!1,configurable:!0}),o.prototype.getClassName=function(){return"ThinTexture"},o.prototype.isReady=function(){return this.delayLoadState===4?(this.delayLoad(),!1):this._texture?this._texture.isReady:!1},o.prototype.delayLoad=function(){},o.prototype.getInternalTexture=function(){return this._texture},o.prototype.getSize=function(){if(this._texture){if(this._texture.width)return this._cachedSize.width=this._texture.width,this._cachedSize.height=this._texture.height,this._cachedSize;if(this._texture._size)return this._cachedSize.width=this._texture._size,this._cachedSize.height=this._texture._size,this._cachedSize}return this._cachedSize},o.prototype.getBaseSize=function(){return!this.isReady()||!this._texture?(this._cachedBaseSize.width=0,this._cachedBaseSize.height=0,this._cachedBaseSize):this._texture._size?(this._cachedBaseSize.width=this._texture._size,this._cachedBaseSize.height=this._texture._size,this._cachedBaseSize):(this._cachedBaseSize.width=this._texture.baseWidth,this._cachedBaseSize.height=this._texture.baseHeight,this._cachedBaseSize)},o.prototype.updateSamplingMode=function(t){this._texture&&this._engine&&this._engine.updateTextureSamplingMode(t,this._texture)},o.prototype.releaseInternalTexture=function(){this._texture&&(this._texture.dispose(),this._texture=null)},o.prototype.dispose=function(){this._texture&&(this.releaseInternalTexture(),this._engine=null)},o}(),It=function(o){W(t,o);function t(e){var i=o.call(this,null)||this;return i.metadata=null,i.reservedDataStore=null,i._hasAlpha=!1,i.getAlphaFromRGB=!1,i.level=1,i.coordinatesIndex=0,i._coordinatesMode=0,i.wrapR=1,i.anisotropicFilteringLevel=t.DEFAULT_ANISOTROPIC_FILTERING_LEVEL,i._isCube=!1,i._gammaSpace=!0,i.invertZ=!1,i.lodLevelInAlpha=!1,i.isRenderTarget=!1,i._prefiltered=!1,i.animations=new Array,i.onDisposeObservable=new se,i._onDisposeObserver=null,i._scene=null,i._texture=null,i._uid=null,e?t._isScene(e)?i._scene=e:i._engine=e:i._scene=Re.LastCreatedScene,i._scene&&(i.uniqueId=i._scene.getUniqueId(),i._scene.addTexture(i),i._engine=i._scene.getEngine()),i._uid=null,i}return Object.defineProperty(t.prototype,"hasAlpha",{get:function(){return this._hasAlpha},set:function(e){this._hasAlpha!==e&&(this._hasAlpha=e,this._scene&&this._scene.markAllMaterialsAsDirty(17))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"coordinatesMode",{get:function(){return this._coordinatesMode},set:function(e){this._coordinatesMode!==e&&(this._coordinatesMode=e,this._scene&&this._scene.markAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wrapU",{get:function(){return this._wrapU},set:function(e){this._wrapU=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wrapV",{get:function(){return this._wrapV},set:function(e){this._wrapV=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isCube",{get:function(){return this._texture?this._texture.isCube:this._isCube},set:function(e){this._texture?this._texture.isCube=e:this._isCube=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"is3D",{get:function(){return this._texture?this._texture.is3D:!1},set:function(e){!this._texture||(this._texture.is3D=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"is2DArray",{get:function(){return this._texture?this._texture.is2DArray:!1},set:function(e){!this._texture||(this._texture.is2DArray=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"gammaSpace",{get:function(){if(this._texture)this._texture._gammaSpace===null&&(this._texture._gammaSpace=this._gammaSpace);else return this._gammaSpace;return this._texture._gammaSpace},set:function(e){if(this._texture){if(this._texture._gammaSpace===e)return;this._texture._gammaSpace=e}else{if(this._gammaSpace===e)return;this._gammaSpace=e}this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isRGBD",{get:function(){return this._texture!=null&&this._texture._isRGBD},set:function(e){this._texture&&(this._texture._isRGBD=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"noMipmap",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lodGenerationOffset",{get:function(){return this._texture?this._texture._lodGenerationOffset:0},set:function(e){this._texture&&(this._texture._lodGenerationOffset=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lodGenerationScale",{get:function(){return this._texture?this._texture._lodGenerationScale:0},set:function(e){this._texture&&(this._texture._lodGenerationScale=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"linearSpecularLOD",{get:function(){return this._texture?this._texture._linearSpecularLOD:!1},set:function(e){this._texture&&(this._texture._linearSpecularLOD=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"irradianceTexture",{get:function(){return this._texture?this._texture._irradianceTexture:null},set:function(e){this._texture&&(this._texture._irradianceTexture=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"uid",{get:function(){return this._uid||(this._uid=st.RandomId()),this._uid},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return this.name},t.prototype.getClassName=function(){return"BaseTexture"},Object.defineProperty(t.prototype,"onDispose",{set:function(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isBlocking",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.getScene=function(){return this._scene},t.prototype._getEngine=function(){return this._engine},t.prototype.checkTransformsAreIdentical=function(e){return e!==null},t.prototype.getTextureMatrix=function(){return M.IdentityReadOnly},t.prototype.getReflectionTextureMatrix=function(){return M.IdentityReadOnly},t.prototype.isReadyOrNotBlocking=function(){return!this.isBlocking||this.isReady()},t.prototype.scale=function(e){},Object.defineProperty(t.prototype,"canRescale",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype._getFromCache=function(e,i,n,r){var a=this._getEngine();if(!a)return null;for(var s=a.getLoadedTexturesCache(),f=0;f<s.length;f++){var l=s[f];if((r===void 0||r===l.invertY)&&l.url===e&&l.generateMipMaps===!i&&(!n||n===l.samplingMode))return l.incrementReferences(),l}return null},t.prototype._rebuild=function(){},t.prototype.clone=function(){return null},Object.defineProperty(t.prototype,"textureType",{get:function(){return this._texture&&this._texture.type!==void 0?this._texture.type:0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textureFormat",{get:function(){return this._texture&&this._texture.format!==void 0?this._texture.format:5},enumerable:!1,configurable:!0}),t.prototype._markAllSubMeshesAsTexturesDirty=function(){var e=this.getScene();!e||e.markAllMaterialsAsDirty(1)},t.prototype.readPixels=function(e,i,n){if(e===void 0&&(e=0),i===void 0&&(i=0),n===void 0&&(n=null),!this._texture)return null;var r=this.getSize(),a=r.width,s=r.height,f=this._getEngine();if(!f)return null;i!=0&&(a=a/Math.pow(2,i),s=s/Math.pow(2,i),a=Math.round(a),s=Math.round(s));try{return this._texture.isCube?f._readTexturePixels(this._texture,a,s,e,i,n):f._readTexturePixels(this._texture,a,s,-1,i,n)}catch{return null}},Object.defineProperty(t.prototype,"_lodTextureHigh",{get:function(){return this._texture?this._texture._lodTextureHigh:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_lodTextureMid",{get:function(){return this._texture?this._texture._lodTextureMid:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_lodTextureLow",{get:function(){return this._texture?this._texture._lodTextureLow:null},enumerable:!1,configurable:!0}),t.prototype.dispose=function(){if(this._scene){this._scene.stopAnimation&&this._scene.stopAnimation(this),this._scene._removePendingData(this);var e=this._scene.textures.indexOf(this);e>=0&&this._scene.textures.splice(e,1),this._scene.onTextureRemovedObservable.notifyObservers(this),this._scene=null}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),o.prototype.dispose.call(this)},t.prototype.serialize=function(){if(!this.name)return null;var e=Y.Serialize(this);return Y.AppendSerializedAnimations(this,e),e},t.WhenAllReady=function(e,i){var n=e.length;if(n===0){i();return}for(var r=0;r<e.length;r++){var a=e[r];if(a.isReady())--n===0&&i();else{var s=a.onLoadObservable;s&&s.addOnce(function(){--n===0&&i()})}}},t._isScene=function(e){return e.getClassName()==="Scene"},t.DEFAULT_ANISOTROPIC_FILTERING_LEVEL=4,g([E()],t.prototype,"uniqueId",void 0),g([E()],t.prototype,"name",void 0),g([E()],t.prototype,"metadata",void 0),g([E("hasAlpha")],t.prototype,"_hasAlpha",void 0),g([E()],t.prototype,"getAlphaFromRGB",void 0),g([E()],t.prototype,"level",void 0),g([E()],t.prototype,"coordinatesIndex",void 0),g([E("coordinatesMode")],t.prototype,"_coordinatesMode",void 0),g([E()],t.prototype,"wrapU",null),g([E()],t.prototype,"wrapV",null),g([E()],t.prototype,"wrapR",void 0),g([E()],t.prototype,"anisotropicFilteringLevel",void 0),g([E()],t.prototype,"isCube",null),g([E()],t.prototype,"is3D",null),g([E()],t.prototype,"is2DArray",null),g([E()],t.prototype,"gammaSpace",null),g([E()],t.prototype,"invertZ",void 0),g([E()],t.prototype,"lodLevelInAlpha",void 0),g([E()],t.prototype,"lodGenerationOffset",null),g([E()],t.prototype,"lodGenerationScale",null),g([E()],t.prototype,"linearSpecularLOD",null),g([ae()],t.prototype,"irradianceTexture",null),g([E()],t.prototype,"isRenderTarget",void 0),t}(Et),bt=function(){function o(){}return o.GenerateBase64StringFromTexture=function(t,e,i){e===void 0&&(e=0),i===void 0&&(i=0);var n=t.getInternalTexture();if(!n)return null;var r=t.readPixels(e,i);if(!r)return null;var a=t.getSize(),s=a.width,f=a.height;if(r instanceof Float32Array){for(var l=r.byteLength/r.BYTES_PER_ELEMENT,u=new Uint8Array(l);--l>=0;){var h=r[l];h<0?h=0:h>1&&(h=1),u[l]=h*255}r=u}var c=document.createElement("canvas");c.width=s,c.height=f;var p=c.getContext("2d");if(!p)return null;var d=p.createImageData(s,f),S=d.data;if(S.set(r),p.putImageData(d,0,0),n.invertY){var _=document.createElement("canvas");_.width=s,_.height=f;var y=_.getContext("2d");return y?(y.translate(0,f),y.scale(1,-1),y.drawImage(c,0,0),_.toDataURL("image/png")):null}return c.toDataURL("image/png")},o}(),ie=function(o){W(t,o);function t(e,i,n,r,a,s,f,l,u,h,c,p){n===void 0&&(n=!1),r===void 0&&(r=!0),a===void 0&&(a=t.TRILINEAR_SAMPLINGMODE),s===void 0&&(s=null),f===void 0&&(f=null),l===void 0&&(l=null),u===void 0&&(u=!1);var d=o.call(this,i)||this;d.url=null,d.uOffset=0,d.vOffset=0,d.uScale=1,d.vScale=1,d.uAng=0,d.vAng=0,d.wAng=0,d.uRotationCenter=.5,d.vRotationCenter=.5,d.wRotationCenter=.5,d.homogeneousRotationInUVTransform=!1,d.inspectableCustomProperties=null,d._noMipmap=!1,d._invertY=!1,d._rowGenerationMatrix=null,d._cachedTextureMatrix=null,d._projectionModeMatrix=null,d._t0=null,d._t1=null,d._t2=null,d._cachedUOffset=-1,d._cachedVOffset=-1,d._cachedUScale=0,d._cachedVScale=0,d._cachedUAng=-1,d._cachedVAng=-1,d._cachedWAng=-1,d._cachedProjectionMatrixId=-1,d._cachedURotationCenter=-1,d._cachedVRotationCenter=-1,d._cachedWRotationCenter=-1,d._cachedHomogeneousRotationInUVTransform=!1,d._cachedCoordinatesMode=-1,d._initialSamplingMode=t.BILINEAR_SAMPLINGMODE,d._buffer=null,d._deleteBuffer=!1,d._format=null,d._delayedOnLoad=null,d._delayedOnError=null,d.onLoadObservable=new se,d._isBlocking=!0,d.name=e||"",d.url=e,d._noMipmap=n,d._invertY=r,d._initialSamplingMode=a,d._buffer=l,d._deleteBuffer=u,d._mimeType=c,d._loaderOptions=p,h&&(d._format=h);var S=d.getScene(),_=d._getEngine();if(!_)return d;_.onBeforeTextureInitObservable.notifyObservers(d);var y=function(){d._texture&&(d._texture._invertVScale&&(d.vScale*=-1,d.vOffset+=1),d._texture._cachedWrapU!==null&&(d.wrapU=d._texture._cachedWrapU,d._texture._cachedWrapU=null),d._texture._cachedWrapV!==null&&(d.wrapV=d._texture._cachedWrapV,d._texture._cachedWrapV=null),d._texture._cachedWrapR!==null&&(d.wrapR=d._texture._cachedWrapR,d._texture._cachedWrapR=null)),d.onLoadObservable.hasObservers()&&d.onLoadObservable.notifyObservers(d),s&&s(),!d.isBlocking&&S&&S.resetCachedMaterial()};return d.url?(d._texture=d._getFromCache(d.url,n,a,r),d._texture?d._texture.isReady?Be.SetImmediate(function(){return y()}):d._texture.onLoadedObservable.add(y):!S||!S.useDelayedTextureLoading?(d._texture=_.createTexture(d.url,n,r,S,a,y,f,d._buffer,void 0,d._format,null,c,p),u&&(d._buffer=null)):(d.delayLoadState=4,d._delayedOnLoad=y,d._delayedOnError=f),d):(d._delayedOnLoad=y,d._delayedOnError=f,d)}return Object.defineProperty(t.prototype,"noMipmap",{get:function(){return this._noMipmap},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"mimeType",{get:function(){return this._mimeType},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isBlocking",{get:function(){return this._isBlocking},set:function(e){this._isBlocking=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"samplingMode",{get:function(){return this._texture?this._texture.samplingMode:this._initialSamplingMode},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"invertY",{get:function(){return this._invertY},enumerable:!1,configurable:!0}),t.prototype.updateURL=function(e,i,n){i===void 0&&(i=null),this.url&&(this.releaseInternalTexture(),this.getScene().markAllMaterialsAsDirty(1)),(!this.name||pe.StartsWith(this.name,"data:"))&&(this.name=e),this.url=e,this._buffer=i,this.delayLoadState=4,n&&(this._delayedOnLoad=n),this.delayLoad()},t.prototype.delayLoad=function(){if(this.delayLoadState===4){var e=this.getScene();!e||(this.delayLoadState=1,this._texture=this._getFromCache(this.url,this._noMipmap,this.samplingMode,this._invertY),this._texture?this._delayedOnLoad&&(this._texture.isReady?Be.SetImmediate(this._delayedOnLoad):this._texture.onLoadedObservable.add(this._delayedOnLoad)):(this._texture=e.getEngine().createTexture(this.url,this._noMipmap,this._invertY,e,this.samplingMode,this._delayedOnLoad,this._delayedOnError,this._buffer,null,this._format,null,this._mimeType,this._loaderOptions),this._deleteBuffer&&(this._buffer=null)),this._delayedOnLoad=null,this._delayedOnError=null)}},t.prototype._prepareRowForTextureGeneration=function(e,i,n,r){e*=this._cachedUScale,i*=this._cachedVScale,e-=this.uRotationCenter*this._cachedUScale,i-=this.vRotationCenter*this._cachedVScale,n-=this.wRotationCenter,I.TransformCoordinatesFromFloatsToRef(e,i,n,this._rowGenerationMatrix,r),r.x+=this.uRotationCenter*this._cachedUScale+this._cachedUOffset,r.y+=this.vRotationCenter*this._cachedVScale+this._cachedVOffset,r.z+=this.wRotationCenter},t.prototype.checkTransformsAreIdentical=function(e){return e!==null&&this.uOffset===e.uOffset&&this.vOffset===e.vOffset&&this.uScale===e.uScale&&this.vScale===e.vScale&&this.uAng===e.uAng&&this.vAng===e.vAng&&this.wAng===e.wAng},t.prototype.getTextureMatrix=function(e){var i=this;if(e===void 0&&(e=1),this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale*e===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng&&this.uRotationCenter===this._cachedURotationCenter&&this.vRotationCenter===this._cachedVRotationCenter&&this.wRotationCenter===this._cachedWRotationCenter&&this.homogeneousRotationInUVTransform===this._cachedHomogeneousRotationInUVTransform)return this._cachedTextureMatrix;this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale*e,this._cachedVScale=this.vScale,this._cachedUAng=this.uAng,this._cachedVAng=this.vAng,this._cachedWAng=this.wAng,this._cachedURotationCenter=this.uRotationCenter,this._cachedVRotationCenter=this.vRotationCenter,this._cachedWRotationCenter=this.wRotationCenter,this._cachedHomogeneousRotationInUVTransform=this.homogeneousRotationInUVTransform,(!this._cachedTextureMatrix||!this._rowGenerationMatrix)&&(this._cachedTextureMatrix=M.Zero(),this._rowGenerationMatrix=new M,this._t0=I.Zero(),this._t1=I.Zero(),this._t2=I.Zero()),M.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix),this.homogeneousRotationInUVTransform?(M.TranslationToRef(-this._cachedURotationCenter,-this._cachedVRotationCenter,-this._cachedWRotationCenter,L.Matrix[0]),M.TranslationToRef(this._cachedURotationCenter,this._cachedVRotationCenter,this._cachedWRotationCenter,L.Matrix[1]),M.ScalingToRef(this._cachedUScale,this._cachedVScale,0,L.Matrix[2]),M.TranslationToRef(this._cachedUOffset,this._cachedVOffset,0,L.Matrix[3]),L.Matrix[0].multiplyToRef(this._rowGenerationMatrix,this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(L.Matrix[1],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(L.Matrix[2],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(L.Matrix[3],this._cachedTextureMatrix),this._cachedTextureMatrix.setRowFromFloats(2,this._cachedTextureMatrix.m[12],this._cachedTextureMatrix.m[13],this._cachedTextureMatrix.m[14],1)):(this._prepareRowForTextureGeneration(0,0,0,this._t0),this._prepareRowForTextureGeneration(1,0,0,this._t1),this._prepareRowForTextureGeneration(0,1,0,this._t2),this._t1.subtractInPlace(this._t0),this._t2.subtractInPlace(this._t0),M.FromValuesToRef(this._t1.x,this._t1.y,this._t1.z,0,this._t2.x,this._t2.y,this._t2.z,0,this._t0.x,this._t0.y,this._t0.z,0,0,0,0,1,this._cachedTextureMatrix));var n=this.getScene();return n?(n.markAllMaterialsAsDirty(1,function(r){return r.hasTexture(i)}),this._cachedTextureMatrix):this._cachedTextureMatrix},t.prototype.getReflectionTextureMatrix=function(){var e=this,i=this.getScene();if(!i)return this._cachedTextureMatrix;if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale===this._cachedUScale&&this.vScale===this._cachedVScale&&this.coordinatesMode===this._cachedCoordinatesMode)if(this.coordinatesMode===t.PROJECTION_MODE){if(this._cachedProjectionMatrixId===i.getProjectionMatrix().updateFlag)return this._cachedTextureMatrix}else return this._cachedTextureMatrix;switch(this._cachedTextureMatrix||(this._cachedTextureMatrix=M.Zero()),this._projectionModeMatrix||(this._projectionModeMatrix=M.Zero()),this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale,this._cachedVScale=this.vScale,this._cachedCoordinatesMode=this.coordinatesMode,this.coordinatesMode){case t.PLANAR_MODE:M.IdentityToRef(this._cachedTextureMatrix),this._cachedTextureMatrix[0]=this.uScale,this._cachedTextureMatrix[5]=this.vScale,this._cachedTextureMatrix[12]=this.uOffset,this._cachedTextureMatrix[13]=this.vOffset;break;case t.PROJECTION_MODE:M.FromValuesToRef(.5,0,0,0,0,-.5,0,0,0,0,0,0,.5,.5,1,1,this._projectionModeMatrix);var n=i.getProjectionMatrix();this._cachedProjectionMatrixId=n.updateFlag,n.multiplyToRef(this._projectionModeMatrix,this._cachedTextureMatrix);break;default:M.IdentityToRef(this._cachedTextureMatrix);break}return i.markAllMaterialsAsDirty(1,function(r){return r.getActiveTextures().indexOf(e)!==-1}),this._cachedTextureMatrix},t.prototype.clone=function(){var e=this;return Y.Clone(function(){return new t(e._texture?e._texture.url:null,e.getScene(),e._noMipmap,e._invertY,e.samplingMode,void 0,void 0,e._texture?e._texture._buffer:void 0)},this)},t.prototype.serialize=function(){var e=this.name;t.SerializeBuffers||pe.StartsWith(this.name,"data:")&&(this.name=""),pe.StartsWith(this.name,"data:")&&this.url===this.name&&(this.url="");var i=o.prototype.serialize.call(this);return i?((t.SerializeBuffers||t.ForceSerializeBuffers)&&(typeof this._buffer=="string"&&this._buffer.substr(0,5)==="data:"?(i.base64String=this._buffer,i.name=i.name.replace("data:","")):this.url&&pe.StartsWith(this.url,"data:")&&this._buffer instanceof Uint8Array?i.base64String="data:image/png;base64,"+pe.EncodeArrayBufferToBase64(this._buffer):t.ForceSerializeBuffers&&(i.base64String=bt.GenerateBase64StringFromTexture(this))),i.invertY=this._invertY,i.samplingMode=this.samplingMode,this.name=e,i):null},t.prototype.getClassName=function(){return"Texture"},t.prototype.dispose=function(){o.prototype.dispose.call(this),this.onLoadObservable.clear(),this._delayedOnLoad=null,this._delayedOnError=null},t.Parse=function(e,i,n){if(e.customType){var r=lt.Instantiate(e.customType),a=r.Parse(e,i,n);return e.samplingMode&&a.updateSamplingMode&&a._samplingMode&&a._samplingMode!==e.samplingMode&&a.updateSamplingMode(e.samplingMode),a}if(e.isCube&&!e.isRenderTarget)return t._CubeTextureParser(e,i,n);if(!e.name&&!e.isRenderTarget)return null;var s=function(){if(f&&f._texture&&(f._texture._cachedWrapU=null,f._texture._cachedWrapV=null,f._texture._cachedWrapR=null),e.samplingMode){var l=e.samplingMode;f&&f.samplingMode!==l&&f.updateSamplingMode(l)}if(f&&e.animations)for(var u=0;u<e.animations.length;u++){var h=e.animations[u],c=fe.GetClass("BABYLON.Animation");c&&f.animations.push(c.Parse(h))}},f=Y.Parse(function(){var l=!0;if(e.noMipmap&&(l=!1),e.mirrorPlane){var u=t._CreateMirror(e.name,e.renderTargetSize,i,l);return u._waitingRenderList=e.renderList,u.mirrorPlane=ft.FromArray(e.mirrorPlane),s(),u}else if(e.isRenderTarget){var h=null;if(e.isCube){if(i.reflectionProbes)for(var c=0;c<i.reflectionProbes.length;c++){var p=i.reflectionProbes[c];if(p.name===e.name)return p.cubeTexture}}else h=t._CreateRenderTargetTexture(e.name,e.renderTargetSize,i,l),h._waitingRenderList=e.renderList;return s(),h}else{var d;if(e.base64String)d=t.CreateFromBase64String(e.base64String,e.name,i,!l,e.invertY,void 0,s);else{var S=void 0;e.name&&e.name.indexOf("://")>0?S=e.name:S=n+e.name,(pe.StartsWith(e.url,"data:")||t.UseSerializedUrlIfAny&&e.url)&&(S=e.url),d=new t(S,i,!l,e.invertY,void 0,s)}return d}},e,i);return f},t.CreateFromBase64String=function(e,i,n,r,a,s,f,l,u){return s===void 0&&(s=t.TRILINEAR_SAMPLINGMODE),f===void 0&&(f=null),l===void 0&&(l=null),u===void 0&&(u=5),new t("data:"+i,n,r,a,s,f,l,e,!1,u)},t.LoadFromDataString=function(e,i,n,r,a,s,f,l,u,h){return r===void 0&&(r=!1),a===void 0&&(a=!1),s===void 0&&(s=!0),f===void 0&&(f=t.TRILINEAR_SAMPLINGMODE),l===void 0&&(l=null),u===void 0&&(u=null),h===void 0&&(h=5),e.substr(0,5)!=="data:"&&(e="data:"+e),new t(e,n,a,s,f,l,u,i,r,h)},t.SerializeBuffers=!0,t.ForceSerializeBuffers=!1,t._CubeTextureParser=function(e,i,n){throw F.WarnImport("CubeTexture")},t._CreateMirror=function(e,i,n,r){throw F.WarnImport("MirrorTexture")},t._CreateRenderTargetTexture=function(e,i,n,r){throw F.WarnImport("RenderTargetTexture")},t.NEAREST_SAMPLINGMODE=1,t.NEAREST_NEAREST_MIPLINEAR=8,t.BILINEAR_SAMPLINGMODE=2,t.LINEAR_LINEAR_MIPNEAREST=11,t.TRILINEAR_SAMPLINGMODE=3,t.LINEAR_LINEAR_MIPLINEAR=3,t.NEAREST_NEAREST_MIPNEAREST=4,t.NEAREST_LINEAR_MIPNEAREST=5,t.NEAREST_LINEAR_MIPLINEAR=6,t.NEAREST_LINEAR=7,t.NEAREST_NEAREST=1,t.LINEAR_NEAREST_MIPNEAREST=9,t.LINEAR_NEAREST_MIPLINEAR=10,t.LINEAR_LINEAR=2,t.LINEAR_NEAREST=12,t.EXPLICIT_MODE=0,t.SPHERICAL_MODE=1,t.PLANAR_MODE=2,t.CUBIC_MODE=3,t.PROJECTION_MODE=4,t.SKYBOX_MODE=5,t.INVCUBIC_MODE=6,t.EQUIRECTANGULAR_MODE=7,t.FIXED_EQUIRECTANGULAR_MODE=8,t.FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9,t.CLAMP_ADDRESSMODE=0,t.WRAP_ADDRESSMODE=1,t.MIRROR_ADDRESSMODE=2,t.UseSerializedUrlIfAny=!1,g([E()],t.prototype,"url",void 0),g([E()],t.prototype,"uOffset",void 0),g([E()],t.prototype,"vOffset",void 0),g([E()],t.prototype,"uScale",void 0),g([E()],t.prototype,"vScale",void 0),g([E()],t.prototype,"uAng",void 0),g([E()],t.prototype,"vAng",void 0),g([E()],t.prototype,"wAng",void 0),g([E()],t.prototype,"uRotationCenter",void 0),g([E()],t.prototype,"vRotationCenter",void 0),g([E()],t.prototype,"wRotationCenter",void 0),g([E()],t.prototype,"homogeneousRotationInUVTransform",void 0),g([E()],t.prototype,"isBlocking",null),t}(It);fe.RegisteredTypes["BABYLON.Texture"]=ie;Y._TextureParser=ie.Parse;var B=function(){function o(){}return Object.defineProperty(o,"DiffuseTextureEnabled",{get:function(){return this._DiffuseTextureEnabled},set:function(t){this._DiffuseTextureEnabled!==t&&(this._DiffuseTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"DetailTextureEnabled",{get:function(){return this._DetailTextureEnabled},set:function(t){this._DetailTextureEnabled!==t&&(this._DetailTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"AmbientTextureEnabled",{get:function(){return this._AmbientTextureEnabled},set:function(t){this._AmbientTextureEnabled!==t&&(this._AmbientTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"OpacityTextureEnabled",{get:function(){return this._OpacityTextureEnabled},set:function(t){this._OpacityTextureEnabled!==t&&(this._OpacityTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ReflectionTextureEnabled",{get:function(){return this._ReflectionTextureEnabled},set:function(t){this._ReflectionTextureEnabled!==t&&(this._ReflectionTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"EmissiveTextureEnabled",{get:function(){return this._EmissiveTextureEnabled},set:function(t){this._EmissiveTextureEnabled!==t&&(this._EmissiveTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"SpecularTextureEnabled",{get:function(){return this._SpecularTextureEnabled},set:function(t){this._SpecularTextureEnabled!==t&&(this._SpecularTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"BumpTextureEnabled",{get:function(){return this._BumpTextureEnabled},set:function(t){this._BumpTextureEnabled!==t&&(this._BumpTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"LightmapTextureEnabled",{get:function(){return this._LightmapTextureEnabled},set:function(t){this._LightmapTextureEnabled!==t&&(this._LightmapTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"RefractionTextureEnabled",{get:function(){return this._RefractionTextureEnabled},set:function(t){this._RefractionTextureEnabled!==t&&(this._RefractionTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ColorGradingTextureEnabled",{get:function(){return this._ColorGradingTextureEnabled},set:function(t){this._ColorGradingTextureEnabled!==t&&(this._ColorGradingTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"FresnelEnabled",{get:function(){return this._FresnelEnabled},set:function(t){this._FresnelEnabled!==t&&(this._FresnelEnabled=t,H.MarkAllMaterialsAsDirty(4))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ClearCoatTextureEnabled",{get:function(){return this._ClearCoatTextureEnabled},set:function(t){this._ClearCoatTextureEnabled!==t&&(this._ClearCoatTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ClearCoatBumpTextureEnabled",{get:function(){return this._ClearCoatBumpTextureEnabled},set:function(t){this._ClearCoatBumpTextureEnabled!==t&&(this._ClearCoatBumpTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ClearCoatTintTextureEnabled",{get:function(){return this._ClearCoatTintTextureEnabled},set:function(t){this._ClearCoatTintTextureEnabled!==t&&(this._ClearCoatTintTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"SheenTextureEnabled",{get:function(){return this._SheenTextureEnabled},set:function(t){this._SheenTextureEnabled!==t&&(this._SheenTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"AnisotropicTextureEnabled",{get:function(){return this._AnisotropicTextureEnabled},set:function(t){this._AnisotropicTextureEnabled!==t&&(this._AnisotropicTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ThicknessTextureEnabled",{get:function(){return this._ThicknessTextureEnabled},set:function(t){this._ThicknessTextureEnabled!==t&&(this._ThicknessTextureEnabled=t,H.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),o._DiffuseTextureEnabled=!0,o._DetailTextureEnabled=!0,o._AmbientTextureEnabled=!0,o._OpacityTextureEnabled=!0,o._ReflectionTextureEnabled=!0,o._EmissiveTextureEnabled=!0,o._SpecularTextureEnabled=!0,o._BumpTextureEnabled=!0,o._LightmapTextureEnabled=!0,o._RefractionTextureEnabled=!0,o._ColorGradingTextureEnabled=!0,o._FresnelEnabled=!0,o._ClearCoatTextureEnabled=!0,o._ClearCoatBumpTextureEnabled=!0,o._ClearCoatTintTextureEnabled=!0,o._SheenTextureEnabled=!0,o._AnisotropicTextureEnabled=!0,o._ThicknessTextureEnabled=!0,o}(),Mt="defaultFragmentDeclaration",Pt=`uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
uniform vec3 vEmissiveColor;
uniform float visibility;

#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform vec2 vTangentSpaceParams;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION)
uniform mat4 view;
#endif
#ifdef REFRACTION
uniform vec4 vRefractionInfos;
#ifndef REFRACTIONMAP_3D
uniform mat4 refractionMatrix;
#endif
#ifdef REFRACTIONFRESNEL
uniform vec4 refractionLeftColor;
uniform vec4 refractionRightColor;
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
#endif
#ifdef DIFFUSEFRESNEL
uniform vec4 diffuseLeftColor;
uniform vec4 diffuseRightColor;
#endif
#ifdef OPACITYFRESNEL
uniform vec4 opacityParts;
#endif
#ifdef EMISSIVEFRESNEL
uniform vec4 emissiveLeftColor;
uniform vec4 emissiveRightColor;
#endif

#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#if defined(REFLECTIONMAP_PLANAR) || defined(REFLECTIONMAP_CUBIC) || defined(REFLECTIONMAP_PROJECTION) || defined(REFLECTIONMAP_EQUIRECTANGULAR) || defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_SKYBOX)
uniform mat4 reflectionMatrix;
#endif
#ifndef REFLECTIONMAP_SKYBOX
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;
uniform vec3 vReflectionSize;
#endif
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 reflectionLeftColor;
uniform vec4 reflectionRightColor;
#endif
#endif`;D.IncludesShadersStore[Mt]=Pt;var Ct="defaultUboDeclaration",Dt=`layout(std140,column_major) uniform;
uniform Material
{
vec4 diffuseLeftColor;
vec4 diffuseRightColor;
vec4 opacityParts;
vec4 reflectionLeftColor;
vec4 reflectionRightColor;
vec4 refractionLeftColor;
vec4 refractionRightColor;
vec4 emissiveLeftColor;
vec4 emissiveRightColor;
vec2 vDiffuseInfos;
vec2 vAmbientInfos;
vec2 vOpacityInfos;
vec2 vReflectionInfos;
vec3 vReflectionPosition;
vec3 vReflectionSize;
vec2 vEmissiveInfos;
vec2 vLightmapInfos;
vec2 vSpecularInfos;
vec3 vBumpInfos;
mat4 diffuseMatrix;
mat4 ambientMatrix;
mat4 opacityMatrix;
mat4 reflectionMatrix;
mat4 emissiveMatrix;
mat4 lightmapMatrix;
mat4 specularMatrix;
mat4 bumpMatrix;
vec2 vTangentSpaceParams;
float pointSize;
mat4 refractionMatrix;
vec4 vRefractionInfos;
vec4 vSpecularColor;
vec3 vEmissiveColor;
float visibility;
vec4 vDiffuseColor;
vec4 vDetailInfos;
mat4 detailMatrix;
};
uniform Scene {
mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif
mat4 view;
};
`;D.IncludesShadersStore[Ct]=Dt;var Ot="prePassDeclaration",xt=`#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
#ifdef WEBGL2
layout(location=0) out highp vec4 glFragData[{X}];
highp vec4 gl_FragColor;
#endif
#ifdef PREPASS_DEPTHNORMAL
varying highp vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
varying highp vec4 vCurrentPosition;
varying highp vec4 vPreviousPosition;
#endif
#endif
`;D.IncludesShadersStore[Ot]=xt;var Rt="helperFunctions",Lt=`const float PI=3.1415926535897932384626433832795;
const float HALF_MIN=5.96046448e-08;
const float LinearEncodePowerApprox=2.2;
const float GammaEncodePowerApprox=1.0/LinearEncodePowerApprox;
const vec3 LuminanceEncodeApprox=vec3(0.2126,0.7152,0.0722);
const float Epsilon=0.0000001;
#define saturate(x) clamp(x,0.0,1.0)
#define absEps(x) abs(x)+Epsilon
#define maxEps(x) max(x,Epsilon)
#define saturateEps(x) clamp(x,Epsilon,1.0)
mat3 transposeMat3(mat3 inMatrix) {
vec3 i0=inMatrix[0];
vec3 i1=inMatrix[1];
vec3 i2=inMatrix[2];
mat3 outMatrix=mat3(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);
return outMatrix;
}

mat3 inverseMat3(mat3 inMatrix) {
float a00=inMatrix[0][0],a01=inMatrix[0][1],a02=inMatrix[0][2];
float a10=inMatrix[1][0],a11=inMatrix[1][1],a12=inMatrix[1][2];
float a20=inMatrix[2][0],a21=inMatrix[2][1],a22=inMatrix[2][2];
float b01=a22*a11-a12*a21;
float b11=-a22*a10+a12*a20;
float b21=a21*a10-a11*a20;
float det=a00*b01+a01*b11+a02*b21;
return mat3(b01,(-a22*a01+a02*a21),(a12*a01-a02*a11),
b11,(a22*a00-a02*a20),(-a12*a00+a02*a10),
b21,(-a21*a00+a01*a20),(a11*a00-a01*a10))/det;
}
float toLinearSpace(float color)
{
return pow(color,LinearEncodePowerApprox);
}
vec3 toLinearSpace(vec3 color)
{
return pow(color,vec3(LinearEncodePowerApprox));
}
vec4 toLinearSpace(vec4 color)
{
return vec4(pow(color.rgb,vec3(LinearEncodePowerApprox)),color.a);
}
vec3 toGammaSpace(vec3 color)
{
return pow(color,vec3(GammaEncodePowerApprox));
}
vec4 toGammaSpace(vec4 color)
{
return vec4(pow(color.rgb,vec3(GammaEncodePowerApprox)),color.a);
}
float toGammaSpace(float color)
{
return pow(color,GammaEncodePowerApprox);
}
float square(float value)
{
return value*value;
}
float pow5(float value) {
float sq=value*value;
return sq*sq*value;
}
float getLuminance(vec3 color)
{
return clamp(dot(color,LuminanceEncodeApprox),0.,1.);
}

float getRand(vec2 seed) {
return fract(sin(dot(seed.xy ,vec2(12.9898,78.233)))*43758.5453);
}
float dither(vec2 seed,float varianceAmount) {
float rand=getRand(seed);
float dither=mix(-varianceAmount/255.0,varianceAmount/255.0,rand);
return dither;
}

const float rgbdMaxRange=255.0;
vec4 toRGBD(vec3 color) {
float maxRGB=maxEps(max(color.r,max(color.g,color.b)));
float D=max(rgbdMaxRange/maxRGB,1.);
D=clamp(floor(D)/255.0,0.,1.);

vec3 rgb=color.rgb*D;

rgb=toGammaSpace(rgb);
return vec4(rgb,D);
}
vec3 fromRGBD(vec4 rgbd) {

rgbd.rgb=toLinearSpace(rgbd.rgb);

return rgbd.rgb/rgbd.a;
}
`;D.IncludesShadersStore[Rt]=Lt;var wt="lightFragmentDeclaration",Nt=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X};
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#endif`;D.IncludesShadersStore[wt]=Nt;var Ft="lightUboDeclaration",Bt=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X};
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
#endif
#endif`;D.IncludesShadersStore[Ft]=Bt;var Ut="lightsFragmentFunctions",Vt=`
struct lightingInfo
{
vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef NDOTL
float ndl;
#endif
};
lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 lightVectorW;
float attenuation=1.0;
if (lightData.w == 0.)
{
vec3 direction=lightData.xyz-vPositionW;
attenuation=max(0.,1.0-length(direction)/range);
lightVectorW=normalize(direction);
}
else
{
lightVectorW=normalize(-lightData.xyz);
}

float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM

vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
lightingInfo computeSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 direction=lightData.xyz-vPositionW;
vec3 lightVectorW=normalize(direction);
float attenuation=max(0.,1.0-length(direction)/range);

float cosAngle=max(0.,dot(lightDirection.xyz,-lightVectorW));
if (cosAngle>=lightDirection.w)
{
cosAngle=max(0.,pow(cosAngle,lightData.w));
attenuation*=cosAngle;

float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM

vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;
}
lightingInfo computeHemisphericLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,vec3 groundColor,float glossiness) {
lightingInfo result;

float ndl=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM

vec3 angleW=normalize(viewDirectionW+lightData.xyz);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor;
#endif
return result;
}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix){
vec4 strq=textureProjectionMatrix*vec4(vPositionW,1.0);
strq/=strq.w;
vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;
return textureColor;
}`;D.IncludesShadersStore[Ut]=Vt;var Xt="shadowsFragmentFunctions",Wt=`#ifdef SHADOWS
#ifndef SHADOWFLOAT

float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}
#endif
float computeFallOff(float value,vec2 clipSpace,float frustumEdgeFalloff)
{
float mask=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));
return mix(value,1.0,mask);
}
#define inline
float computeShadowCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadow=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadow=textureCube(shadowSampler,directionToLight).x;
#endif
return depth>shadow ? darkness : 1.0;
}
#define inline
float computeShadowWithPoissonSamplingCube(vec3 lightPosition,samplerCube shadowSampler,float mapSize,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
float visibility=1.;
vec3 poissonDisk[4];
poissonDisk[0]=vec3(-1.0,1.0,-1.0);
poissonDisk[1]=vec3(1.0,-1.0,-1.0);
poissonDisk[2]=vec3(-1.0,-1.0,-1.0);
poissonDisk[3]=vec3(1.0,-1.0,1.0);

#ifndef SHADOWFLOAT
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) visibility-=0.25;
#else
if (textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) visibility-=0.25;
#endif
return min(1.0,visibility+darkness);
}
#define inline
float computeShadowWithESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);
return esm;
}
#define inline
float computeShadowWithCloseESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return esm;
}
#ifdef WEBGL2
#define inline
float computeShadowCSM(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
vec3 uvLayer=vec3(uv.x,uv.y,layer);
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uvLayer));
#else
float shadow=texture2D(shadowSampler,uvLayer).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
#endif
#define inline
float computeShadow(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uv));
#else
float shadow=texture2D(shadowSampler,uv).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
}
#define inline
float computeShadowWithPoissonSampling(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float mapSize,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
float visibility=1.;
vec2 poissonDisk[4];
poissonDisk[0]=vec2(-0.94201624,-0.39906216);
poissonDisk[1]=vec2(0.94558609,-0.76890725);
poissonDisk[2]=vec2(-0.094184101,-0.92938870);
poissonDisk[3]=vec2(0.34495938,0.29387760);

#ifndef SHADOWFLOAT
if (unpack(texture2D(shadowSampler,uv+poissonDisk[0]*mapSize))<shadowPixelDepth) visibility-=0.25;
if (unpack(texture2D(shadowSampler,uv+poissonDisk[1]*mapSize))<shadowPixelDepth) visibility-=0.25;
if (unpack(texture2D(shadowSampler,uv+poissonDisk[2]*mapSize))<shadowPixelDepth) visibility-=0.25;
if (unpack(texture2D(shadowSampler,uv+poissonDisk[3]*mapSize))<shadowPixelDepth) visibility-=0.25;
#else
if (texture2D(shadowSampler,uv+poissonDisk[0]*mapSize).x<shadowPixelDepth) visibility-=0.25;
if (texture2D(shadowSampler,uv+poissonDisk[1]*mapSize).x<shadowPixelDepth) visibility-=0.25;
if (texture2D(shadowSampler,uv+poissonDisk[2]*mapSize).x<shadowPixelDepth) visibility-=0.25;
if (texture2D(shadowSampler,uv+poissonDisk[3]*mapSize).x<shadowPixelDepth) visibility-=0.25;
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(texture2D(shadowSampler,uv));
#else
float shadowMapSample=texture2D(shadowSampler,uv).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithCloseESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(texture2D(shadowSampler,uv));
#else
float shadowMapSample=texture2D(shadowSampler,uv).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#ifdef WEBGL2
#define GREATEST_LESS_THAN_ONE 0.99999994

#define inline
float computeShadowWithCSMPCF1(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(uvDepth.z,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float shadow=texture(shadowSampler,uvDepthLayer);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}



#define inline
float computeShadowWithCSMPCF3(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(uvDepth.z,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x;
uv+=0.5;
vec2 st=fract(uv);
vec2 base_uv=floor(uv)-0.5;
base_uv*=shadowMapSizeAndInverse.y;




vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}



#define inline
float computeShadowWithCSMPCF5(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(uvDepth.z,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x;
uv+=0.5;
vec2 st=fract(uv);
vec2 base_uv=floor(uv)-0.5;
base_uv*=shadowMapSizeAndInverse.y;


vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[1]),layer,uvDepth.z));
shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[2]),layer,uvDepth.z));
shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[2]),layer,uvDepth.z));
shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[2]),layer,uvDepth.z));
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}

#define inline
float computeShadowWithPCF1(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
float shadow=texture2D(shadowSampler,uvDepth);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}



#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x;
uv+=0.5;
vec2 st=fract(uv);
vec2 base_uv=floor(uv)-0.5;
base_uv*=shadowMapSizeAndInverse.y;




vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z));
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}



#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x;
uv+=0.5;
vec2 st=fract(uv);
vec2 base_uv=floor(uv)-0.5;
base_uv*=shadowMapSizeAndInverse.y;


vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z));
shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[0]),uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z));
shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[1]),uvDepth.z));
shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[2]),uvDepth.z));
shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[2]),uvDepth.z));
shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[2]),uvDepth.z));
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
const vec3 PoissonSamplers32[64]=vec3[64](
vec3(0.06407013,0.05409927,0.),
vec3(0.7366577,0.5789394,0.),
vec3(-0.6270542,-0.5320278,0.),
vec3(-0.4096107,0.8411095,0.),
vec3(0.6849564,-0.4990818,0.),
vec3(-0.874181,-0.04579735,0.),
vec3(0.9989998,0.0009880066,0.),
vec3(-0.004920578,-0.9151649,0.),
vec3(0.1805763,0.9747483,0.),
vec3(-0.2138451,0.2635818,0.),
vec3(0.109845,0.3884785,0.),
vec3(0.06876755,-0.3581074,0.),
vec3(0.374073,-0.7661266,0.),
vec3(0.3079132,-0.1216763,0.),
vec3(-0.3794335,-0.8271583,0.),
vec3(-0.203878,-0.07715034,0.),
vec3(0.5912697,0.1469799,0.),
vec3(-0.88069,0.3031784,0.),
vec3(0.5040108,0.8283722,0.),
vec3(-0.5844124,0.5494877,0.),
vec3(0.6017799,-0.1726654,0.),
vec3(-0.5554981,0.1559997,0.),
vec3(-0.3016369,-0.3900928,0.),
vec3(-0.5550632,-0.1723762,0.),
vec3(0.925029,0.2995041,0.),
vec3(-0.2473137,0.5538505,0.),
vec3(0.9183037,-0.2862392,0.),
vec3(0.2469421,0.6718712,0.),
vec3(0.3916397,-0.4328209,0.),
vec3(-0.03576927,-0.6220032,0.),
vec3(-0.04661255,0.7995201,0.),
vec3(0.4402924,0.3640312,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.)
);
const vec3 PoissonSamplers64[64]=vec3[64](
vec3(-0.613392,0.617481,0.),
vec3(0.170019,-0.040254,0.),
vec3(-0.299417,0.791925,0.),
vec3(0.645680,0.493210,0.),
vec3(-0.651784,0.717887,0.),
vec3(0.421003,0.027070,0.),
vec3(-0.817194,-0.271096,0.),
vec3(-0.705374,-0.668203,0.),
vec3(0.977050,-0.108615,0.),
vec3(0.063326,0.142369,0.),
vec3(0.203528,0.214331,0.),
vec3(-0.667531,0.326090,0.),
vec3(-0.098422,-0.295755,0.),
vec3(-0.885922,0.215369,0.),
vec3(0.566637,0.605213,0.),
vec3(0.039766,-0.396100,0.),
vec3(0.751946,0.453352,0.),
vec3(0.078707,-0.715323,0.),
vec3(-0.075838,-0.529344,0.),
vec3(0.724479,-0.580798,0.),
vec3(0.222999,-0.215125,0.),
vec3(-0.467574,-0.405438,0.),
vec3(-0.248268,-0.814753,0.),
vec3(0.354411,-0.887570,0.),
vec3(0.175817,0.382366,0.),
vec3(0.487472,-0.063082,0.),
vec3(-0.084078,0.898312,0.),
vec3(0.488876,-0.783441,0.),
vec3(0.470016,0.217933,0.),
vec3(-0.696890,-0.549791,0.),
vec3(-0.149693,0.605762,0.),
vec3(0.034211,0.979980,0.),
vec3(0.503098,-0.308878,0.),
vec3(-0.016205,-0.872921,0.),
vec3(0.385784,-0.393902,0.),
vec3(-0.146886,-0.859249,0.),
vec3(0.643361,0.164098,0.),
vec3(0.634388,-0.049471,0.),
vec3(-0.688894,0.007843,0.),
vec3(0.464034,-0.188818,0.),
vec3(-0.440840,0.137486,0.),
vec3(0.364483,0.511704,0.),
vec3(0.034028,0.325968,0.),
vec3(0.099094,-0.308023,0.),
vec3(0.693960,-0.366253,0.),
vec3(0.678884,-0.204688,0.),
vec3(0.001801,0.780328,0.),
vec3(0.145177,-0.898984,0.),
vec3(0.062655,-0.611866,0.),
vec3(0.315226,-0.604297,0.),
vec3(-0.780145,0.486251,0.),
vec3(-0.371868,0.882138,0.),
vec3(0.200476,0.494430,0.),
vec3(-0.494552,-0.711051,0.),
vec3(0.612476,0.705252,0.),
vec3(-0.578845,-0.768792,0.),
vec3(-0.772454,-0.090976,0.),
vec3(0.504440,0.372295,0.),
vec3(0.155736,0.065157,0.),
vec3(0.391522,0.849605,0.),
vec3(-0.620106,-0.328104,0.),
vec3(0.789239,-0.419965,0.),
vec3(-0.545396,0.538133,0.),
vec3(-0.178564,-0.596057,0.)
);





#define inline
float computeShadowWithCSMPCSS(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(uvDepth.z,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=texture(depthSampler,vec3(uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer)).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
if (numBlocker<1.0) {
return 1.0;
}
else
{
float avgBlockerDepth=sumBlockerDepth/numBlocker;

float AAOffset=shadowMapSizeInverse*10.;


float penumbraRatio=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);
vec4 filterRadius=vec4(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec4 offset=vec4(poissonSamplers[i],0.);

offset=vec4(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);
shadow+=texture2D(shadowSampler,uvDepthLayer+offset*filterRadius);
}
shadow/=float(pcfTapCount);

shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));

shadow=mix(darkness,1.,shadow);

return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}





#define inline
float computeShadowWithPCSS(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=texture(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy)).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
if (numBlocker<1.0) {
return 1.0;
}
else
{
float avgBlockerDepth=sumBlockerDepth/numBlocker;

float AAOffset=shadowMapSizeInverse*10.;


float penumbraRatio=((depthMetric-avgBlockerDepth)+AAOffset);
float filterRadius=penumbraRatio*lightSizeUV*shadowMapSizeInverse;
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec3 offset=poissonSamplers[i];

offset=vec3(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);
shadow+=texture2D(shadowSampler,uvDepth+offset*filterRadius);
}
shadow/=float(pcfTapCount);

shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);

shadow=mix(darkness,1.,shadow);

return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
}
#define inline
float computeShadowWithPCSS16(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS32(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS64(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);
}
#define inline
float computeShadowWithCSMPCSS16(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS32(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS64(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#endif
#endif
`;D.IncludesShadersStore[Xt]=Wt;var kt="fresnelFunction",zt=`#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{
float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);
return clamp(fresnelTerm,0.,1.);
}
#endif`;D.IncludesShadersStore[kt]=zt;var Ht="reflectionFunction",Gt=`vec3 parallaxCorrectNormal( vec3 vertexPos,vec3 origVec,vec3 cubeSize,vec3 cubePos ) {

vec3 invOrigVec=vec3(1.0,1.0,1.0)/origVec;
vec3 halfSize=cubeSize*0.5;
vec3 intersecAtMaxPlane=(cubePos+halfSize-vertexPos)*invOrigVec;
vec3 intersecAtMinPlane=(cubePos-halfSize-vertexPos)*invOrigVec;

vec3 largestIntersec=max(intersecAtMaxPlane,intersecAtMinPlane);

float distance=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);

vec3 intersectPositionWS=vertexPos+origVec*distance;

return intersectPositionWS-cubePos;
}
vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0);
}
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(1.0-s,t,0);
}
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);
vec3 r=normalize(reflect(cameraToVertex,worldNormal));
r=vec3(reflectionMatrix*vec4(r,0));
float lon=atan(r.z,r.x);
float lat=acos(r.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0);
}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(vec3(view*worldPos));
vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));
vec3 r=reflect(viewDir,viewNormal);
r=vec3(reflectionMatrix*vec4(r,0));
r.z=r.z-1.0;
float m=2.0*length(r);
return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);
}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=worldPos.xyz-eyePosition;
vec3 coords=normalize(reflect(viewDir,worldNormal));
return vec3(reflectionMatrix*vec4(coords,1));
}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);

vec3 coords=reflect(viewDir,worldNormal);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);

vec3 coords=reflect(viewDir,worldNormal);
coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*(view*worldPos));
}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*vec4(positionW,1.));
}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif`;D.IncludesShadersStore[Ht]=Gt;var Yt="imageProcessingDeclaration",Kt=`#ifdef EXPOSURE
uniform float exposureLinear;
#endif
#ifdef CONTRAST
uniform float contrast;
#endif
#ifdef VIGNETTE
uniform vec2 vInverseScreenSize;
uniform vec4 vignetteSettings1;
uniform vec4 vignetteSettings2;
#endif
#ifdef COLORCURVES
uniform vec4 vCameraColorCurveNegative;
uniform vec4 vCameraColorCurveNeutral;
uniform vec4 vCameraColorCurvePositive;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
uniform highp sampler3D txColorTransform;
#else
uniform sampler2D txColorTransform;
#endif
uniform vec4 colorTransformSettings;
#endif`;D.IncludesShadersStore[Yt]=Kt;var jt="imageProcessingFunctions",Qt=`#if defined(COLORGRADING) && !defined(COLORGRADING3D)

#define inline
vec3 sampleTexture3D(sampler2D colorTransform,vec3 color,vec2 sampler3dSetting)
{
float sliceSize=2.0*sampler3dSetting.x;
#ifdef SAMPLER3DGREENDEPTH
float sliceContinuous=(color.g-sampler3dSetting.x)*sampler3dSetting.y;
#else
float sliceContinuous=(color.b-sampler3dSetting.x)*sampler3dSetting.y;
#endif
float sliceInteger=floor(sliceContinuous);


float sliceFraction=sliceContinuous-sliceInteger;
#ifdef SAMPLER3DGREENDEPTH
vec2 sliceUV=color.rb;
#else
vec2 sliceUV=color.rg;
#endif
sliceUV.x*=sliceSize;
sliceUV.x+=sliceInteger*sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice0Color=texture2D(colorTransform,sliceUV);
sliceUV.x+=sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice1Color=texture2D(colorTransform,sliceUV);
vec3 result=mix(slice0Color.rgb,slice1Color.rgb,sliceFraction);
#ifdef SAMPLER3DBGRMAP
color.rgb=result.rgb;
#else
color.rgb=result.bgr;
#endif
return color;
}
#endif
#ifdef TONEMAPPING_ACES





const mat3 ACESInputMat=mat3(
vec3(0.59719,0.07600,0.02840),
vec3(0.35458,0.90834,0.13383),
vec3(0.04823,0.01566,0.83777)
);

const mat3 ACESOutputMat=mat3(
vec3( 1.60475,-0.10208,-0.00327),
vec3(-0.53108,1.10813,-0.07276),
vec3(-0.07367,-0.00605,1.07602)
);
vec3 RRTAndODTFit(vec3 v)
{
vec3 a=v*(v+0.0245786)-0.000090537;
vec3 b=v*(0.983729*v+0.4329510)+0.238081;
return a/b;
}
vec3 ACESFitted(vec3 color)
{
color=ACESInputMat*color;

color=RRTAndODTFit(color);
color=ACESOutputMat*color;

color=saturate(color);
return color;
}
#endif
vec4 applyImageProcessing(vec4 result) {
#ifdef EXPOSURE
result.rgb*=exposureLinear;
#endif
#ifdef VIGNETTE

vec2 viewportXY=gl_FragCoord.xy*vInverseScreenSize;
viewportXY=viewportXY*2.0-1.0;
vec3 vignetteXY1=vec3(viewportXY*vignetteSettings1.xy+vignetteSettings1.zw,1.0);
float vignetteTerm=dot(vignetteXY1,vignetteXY1);
float vignette=pow(vignetteTerm,vignetteSettings2.w);

vec3 vignetteColor=vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
vec3 vignetteColorMultiplier=mix(vignetteColor,vec3(1,1,1),vignette);
result.rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
result.rgb=mix(vignetteColor,result.rgb,vignette);
#endif
#endif
#ifdef TONEMAPPING
#ifdef TONEMAPPING_ACES
result.rgb=ACESFitted(result.rgb);
#else
const float tonemappingCalibration=1.590579;
result.rgb=1.0-exp2(-tonemappingCalibration*result.rgb);
#endif
#endif

result.rgb=toGammaSpace(result.rgb);
result.rgb=saturate(result.rgb);
#ifdef CONTRAST

vec3 resultHighContrast=result.rgb*result.rgb*(3.0-2.0*result.rgb);
if (contrast<1.0) {

result.rgb=mix(vec3(0.5,0.5,0.5),result.rgb,contrast);
} else {

result.rgb=mix(result.rgb,resultHighContrast,contrast-1.0);
}
#endif

#ifdef COLORGRADING
vec3 colorTransformInput=result.rgb*colorTransformSettings.xxx+colorTransformSettings.yyy;
#ifdef COLORGRADING3D
vec3 colorTransformOutput=texture(txColorTransform,colorTransformInput).rgb;
#else
vec3 colorTransformOutput=sampleTexture3D(txColorTransform,colorTransformInput,colorTransformSettings.yz).rgb;
#endif
result.rgb=mix(result.rgb,colorTransformOutput,colorTransformSettings.www);
#endif
#ifdef COLORCURVES

float luma=getLuminance(result.rgb);
vec2 curveMix=clamp(vec2(luma*3.0-1.5,luma*-3.0+1.5),vec2(0.0),vec2(1.0));
vec4 colorCurve=vCameraColorCurveNeutral+curveMix.x*vCameraColorCurvePositive-curveMix.y*vCameraColorCurveNegative;
result.rgb*=colorCurve.rgb;
result.rgb=mix(vec3(luma),result.rgb,colorCurve.a);
#endif
return result;
}`;D.IncludesShadersStore[jt]=Qt;var $t="bumpFragmentMainFunctions",Zt=`#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL)
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);
}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{
return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);
}

mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{

uv=gl_FrontFacing ? uv : -uv;

vec3 dp1=dFdx(p);
vec3 dp2=dFdy(p);
vec2 duv1=dFdx(uv);
vec2 duv2=dFdy(uv);

vec3 dp2perp=cross(dp2,normal);
vec3 dp1perp=cross(normal,dp1);
vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;
vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;

tangent*=tangentSpaceParams.x;
bitangent*=tangentSpaceParams.y;

float invmax=inversesqrt(max(dot(tangent,tangent),dot(bitangent,bitangent)));
return mat3(tangent*invmax,bitangent*invmax,normal);
}
#endif
`;D.IncludesShadersStore[$t]=Zt;var qt="bumpFragmentFunctions",Jt=`#if defined(BUMP)
#if BUMPDIRECTUV == 1
#define vBumpUV vMainUV1
#elif BUMPDIRECTUV == 2
#define vBumpUV vMainUV2
#else
varying vec2 vBumpUV;
#endif
uniform sampler2D bumpSampler;
vec3 perturbNormal(mat3 cotangentFrame,vec2 uv)
{
return perturbNormal(cotangentFrame,texture2D(bumpSampler,uv).xyz,vBumpInfos.y);
}
#endif
#if defined(DETAIL)
#if DETAILDIRECTUV == 1
#define vDetailUV vMainUV1
#elif DETAILDIRECTUV == 2
#define vDetailUV vMainUV2
#else
varying vec2 vDetailUV;
#endif
uniform sampler2D detailSampler;
#endif
#if defined(BUMP)
vec3 perturbNormal(mat3 cotangentFrame,vec3 color)
{
return perturbNormal(cotangentFrame,color,vBumpInfos.y);
}

mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv)
{
return cotangent_frame(normal,p,uv,vTangentSpaceParams);
}
#endif
#if defined(BUMP) && defined(PARALLAX)
const float minSamples=4.;
const float maxSamples=15.;
const int iMaxSamples=15;

vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {
float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;
parallaxLimit*=parallaxScale;
vec2 vOffsetDir=normalize(vViewDirCoT.xy);
vec2 vMaxOffset=vOffsetDir*parallaxLimit;
float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));
float stepSize=1.0/numSamples;

float currRayHeight=1.0;
vec2 vCurrOffset=vec2(0,0);
vec2 vLastOffset=vec2(0,0);
float lastSampledHeight=1.0;
float currSampledHeight=1.0;
for (int i=0; i<iMaxSamples; i++)
{
currSampledHeight=texture2D(bumpSampler,vBumpUV+vCurrOffset).w;

if (currSampledHeight>currRayHeight)
{
float delta1=currSampledHeight-currRayHeight;
float delta2=(currRayHeight+stepSize)-lastSampledHeight;
float ratio=delta1/(delta1+delta2);
vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;

break;
}
else
{
currRayHeight-=stepSize;
vLastOffset=vCurrOffset;
vCurrOffset+=stepSize*vMaxOffset;
lastSampledHeight=currSampledHeight;
}
}
return vCurrOffset;
}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{

float height=texture2D(bumpSampler,vBumpUV).w;
vec2 texCoordOffset=heightScale*viewDir.xy*height;
return -texCoordOffset;
}
#endif`;D.IncludesShadersStore[qt]=Jt;var ei="clipPlaneFragmentDeclaration",ti=`#ifdef CLIPPLANE
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
varying float fClipDistance6;
#endif`;D.IncludesShadersStore[ei]=ti;var ii="logDepthDeclaration",ni=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;
varying float vFragmentDepth;
#endif`;D.IncludesShadersStore[ii]=ni;var ri="fogFragmentDeclaration",ai=`#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828
uniform vec4 vFogInfos;
uniform vec3 vFogColor;
varying vec3 vFogDistance;
float CalcFogFactor()
{
float fogCoeff=1.0;
float fogStart=vFogInfos.y;
float fogEnd=vFogInfos.z;
float fogDensity=vFogInfos.w;
float fogDistance=length(vFogDistance);
if (FOGMODE_LINEAR == vFogInfos.x)
{
fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);
}
else if (FOGMODE_EXP == vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDensity);
}
else if (FOGMODE_EXP2 == vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);
}
return clamp(fogCoeff,0.0,1.0);
}
#endif`;D.IncludesShadersStore[ri]=ai;var oi="clipPlaneFragment",si=`#ifdef CLIPPLANE
if (fClipDistance>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE2
if (fClipDistance2>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE3
if (fClipDistance3>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE4
if (fClipDistance4>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE5
if (fClipDistance5>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE6
if (fClipDistance6>0.0)
{
discard;
}
#endif`;D.IncludesShadersStore[oi]=si;var li="bumpFragment",fi=`vec2 uvOffset=vec2(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(BUMP)
float normalScale=vBumpInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(BUMP)
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,vBumpUV);
#else
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,vDetailUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
mat3 TBN=cotangent_frame(normalW,vPositionW,vMainUV1,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,vBumpUV,vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);
vec2 detailNormalRG=detailColor.wy*2.0-1.0;
float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));
vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
normalW=normalize(texture2D(bumpSampler,vBumpUV).xyz*2.0-1.0);
normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,vBumpUV+uvOffset);
#else
vec3 bumpNormal=texture2D(bumpSampler,vBumpUV+uvOffset).xyz*2.0-1.0;

#if DETAIL_NORMALBLENDMETHOD == 0
detailNormal.xy*=vDetailInfos.z;
vec3 blendedNormal=normalize(vec3(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD == 1
detailNormal.xy*=vDetailInfos.z;
bumpNormal+=vec3(0.0,0.0,1.0);
detailNormal*=vec3(-1.0,-1.0,1.0);
vec3 blendedNormal=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;
normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif`;D.IncludesShadersStore[li]=fi;var ui="depthPrePass",hi=`#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);
return;
#endif`;D.IncludesShadersStore[ui]=hi;var ci="lightFragment",di=`#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})

#else
#ifdef PBR

#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#endif
preInfo.NdotV=NdotV;

#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif


#ifdef HEMILIGHT{X}
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif

#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb,light{X}.vLightGround);
#elif defined(SS_TRANSLUCENCY)
info.diffuse=computeDiffuseAndTransmittedLighting(preInfo,light{X}.vLightDiffuse.rgb,subSurfaceOut.transmittance);
#else
info.diffuse=computeDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb);
#endif

#ifdef SPECULARTERM
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#endif

#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO

preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif

#ifdef CLEARCOAT

#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,light{X}.vLightDiffuse.rgb);
#ifdef CLEARCOAT_TINT

absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);
info.diffuse*=absorption;
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif

info.diffuse*=info.clearCoat.w;
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
#else
#ifdef SPOTLIGHT{X}
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightSampler{X},textureProjectionMatrix{X});
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++)
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=viewFrustumZ{X}[i]+vPositionFromCamera{X}.z;
#else
diff{X}=viewFrustumZ{X}[i]-vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {
index{X}=i;
break;
}
}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
float frustumLength=frustumLengths{X}[index{X}];
float diffRatio=clamp(diff{X}/frustumLength,0.,1.)*cascadeBlendFactor{X};
if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{
index{X}+=1;
float nextShadow=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;
shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif`;D.IncludesShadersStore[ci]=di;var pi="logDepthFragment",vi=`#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif`;D.IncludesShadersStore[pi]=vi;var mi="fogFragment",gi=`#ifdef FOG
float fog=CalcFogFactor();
color.rgb=fog*color.rgb+(1.0-fog)*vFogColor;
#endif`;D.IncludesShadersStore[mi]=gi;var _i="defaultPixelShader",Si=`#include<__decl__defaultFragment>
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif

#define RECIPROCAL_PI2 0.15915494
uniform vec3 vEyePosition;
uniform vec3 vAmbientColor;

varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif
#ifdef MAINUV2
varying vec2 vMainUV2;
#endif

#include<helperFunctions>

#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>

#ifdef DIFFUSE
#if DIFFUSEDIRECTUV == 1
#define vDiffuseUV vMainUV1
#elif DIFFUSEDIRECTUV == 2
#define vDiffuseUV vMainUV2
#else
varying vec2 vDiffuseUV;
#endif
uniform sampler2D diffuseSampler;
#endif
#ifdef AMBIENT
#if AMBIENTDIRECTUV == 1
#define vAmbientUV vMainUV1
#elif AMBIENTDIRECTUV == 2
#define vAmbientUV vMainUV2
#else
varying vec2 vAmbientUV;
#endif
uniform sampler2D ambientSampler;
#endif
#ifdef OPACITY
#if OPACITYDIRECTUV == 1
#define vOpacityUV vMainUV1
#elif OPACITYDIRECTUV == 2
#define vOpacityUV vMainUV2
#else
varying vec2 vOpacityUV;
#endif
uniform sampler2D opacitySampler;
#endif
#ifdef EMISSIVE
#if EMISSIVEDIRECTUV == 1
#define vEmissiveUV vMainUV1
#elif EMISSIVEDIRECTUV == 2
#define vEmissiveUV vMainUV2
#else
varying vec2 vEmissiveUV;
#endif
uniform sampler2D emissiveSampler;
#endif
#ifdef LIGHTMAP
#if LIGHTMAPDIRECTUV == 1
#define vLightmapUV vMainUV1
#elif LIGHTMAPDIRECTUV == 2
#define vLightmapUV vMainUV2
#else
varying vec2 vLightmapUV;
#endif
uniform sampler2D lightmapSampler;
#endif
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
uniform samplerCube refractionCubeSampler;
#else
uniform sampler2D refraction2DSampler;
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
#if SPECULARDIRECTUV == 1
#define vSpecularUV vMainUV1
#elif SPECULARDIRECTUV == 2
#define vSpecularUV vMainUV2
#else
varying vec2 vSpecularUV;
#endif
uniform sampler2D specularSampler;
#endif
#ifdef ALPHATEST
uniform float alphaCutOff;
#endif

#include<fresnelFunction>

#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
uniform samplerCube reflectionCubeSampler;
#else
uniform sampler2D reflection2DSampler;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition-vPositionW);

vec4 baseColor=vec4(1.,1.,1.,1.);
vec3 diffuseColor=vDiffuseColor.rgb;

float alpha=vDiffuseColor.a;

#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(-cross(dFdx(vPositionW),dFdy(vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<alphaCutOff)
discard;
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor.rgb*=vDiffuseInfos.y;
#endif
#include<depthPrePass>
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef DETAIL
baseColor.rgb=baseColor.rgb*2.0*mix(0.5,detailColor.r,vDetailInfos.y);
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE

vec3 baseAmbientColor=vec3(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb*vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS

#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;
vec3 specularColor=vSpecularColor.rgb;
#ifdef SPECULAR
vec4 specularMapColor=texture2D(specularSampler,vSpecularUV+uvOffset);
specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#else
float glossiness=0.;
#endif

vec3 diffuseBase=vec3(0.,0.,0.);
lightingInfo info;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
float shadow=1.;
#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
#include<lightFragment>[0..maxSimultaneousLights]

vec4 refractionColor=vec4(0.,0.,0.,1.);
#ifdef REFRACTION
vec3 refractionVector=normalize(refract(-viewDirectionW,normalW,vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
refractionVector.y=refractionVector.y*vRefractionInfos.w;
if (dot(refractionVector,viewDirectionW)<1.0) {
refractionColor=textureCube(refractionCubeSampler,refractionVector);
}
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;
refractionCoords.y=1.0-refractionCoords.y;
refractionColor=texture2D(refraction2DSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor.rgb=fromRGBD(refractionColor);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor.rgb=toGammaSpace(refractionColor.rgb);
#endif
refractionColor.rgb*=vRefractionInfos.x;
#endif

vec4 reflectionColor=vec4(0.,0.,0.,1.);
#ifdef REFLECTION
vec3 vReflectionUVW=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
float bias=vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW,bias);
#else
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW);
#endif
#else
vec2 coords=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;
reflectionColor=texture2D(reflection2DSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor.rgb=toGammaSpace(reflectionColor.rgb);
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#ifdef REFLECTIONFRESNEL
float reflectionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,reflectionRightColor.a,reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor.rgb*=specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
float refractionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,refractionRightColor.a,refractionLeftColor.a);
refractionColor.rgb*=refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*refractionRightColor.rgb;
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);
alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;
#else
alpha*=opacityMap.a*vOpacityInfos.y;
#endif
#endif
#ifdef VERTEXALPHA
alpha*=vColor.a;
#endif
#ifdef OPACITYFRESNEL
float opacityFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,opacityParts.z,opacityParts.w);
alpha+=opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<alphaCutOff)
discard;
#endif
#ifndef ALPHABLEND

alpha=1.0;
#endif
#endif

vec3 emissiveColor=vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb*vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
float emissiveFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,emissiveRightColor.a,emissiveLeftColor.a);
emissiveColor*=emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*emissiveRightColor.rgb;
#endif

#ifdef DIFFUSEFRESNEL
float diffuseFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,diffuseRightColor.a,diffuseLeftColor.a);
diffuseBase*=diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*diffuseRightColor.rgb;
#endif

#ifdef EMISSIVEASILLUMINATION
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
vec3 finalDiffuse=clamp((diffuseBase+emissiveColor)*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#else
vec3 finalSpecular=vec3(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb,vec3(0.3,0.59,0.11)),0.,1.);
#endif

#ifdef EMISSIVEASILLUMINATION
vec4 color=vec4(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
vec4 color=vec4(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif

#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color.rgb*=lightmapColor.rgb;
#else
color.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color.rgb=max(color.rgb,0.);
#include<logDepthFragment>
#include<fogFragment>


#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#else
#ifdef IMAGEPROCESSING
color.rgb=toLinearSpace(color.rgb);
color=applyImageProcessing(color);
#endif
#endif
color.a*=visibility;
#ifdef PREMULTIPLYALPHA

color.rgb*=color.a;
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
gl_FragData[0]=color;
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,1.0);
#endif
#ifdef PREPASS_VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;
vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;
vec2 velocity=abs(a-b);
velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;
gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,1.0);
#endif
#ifdef PREPASS_IRRADIANCE
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(0.0,0.0,0.0,1.0);
#endif
#ifdef PREPASS_DEPTHNORMAL
gl_FragData[PREPASS_DEPTHNORMAL_INDEX]=vec4(vViewPos.z,(view*vec4(normalW,0.0)).rgb);
#endif
#ifdef PREPASS_ALBEDO
gl_FragData[PREPASS_ALBEDO_INDEX]=vec4(0.0,0.0,0.0,1.0);
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULAR)
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=specularMapColor;
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(0.0,0.0,0.0,1.0);
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=color;
#endif
}
`;D.ShadersStore[_i]=Si;var yi="defaultVertexDeclaration",Ai=`
uniform mat4 viewProjection;
uniform mat4 view;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
uniform mat4 lightmapMatrix;
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
uniform mat4 specularMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform mat4 bumpMatrix;
#endif
#ifdef REFLECTION
uniform mat4 reflectionMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
`;D.IncludesShadersStore[yi]=Ai;var Ti="bonesDeclaration",Ei=`#if NUM_BONE_INFLUENCERS>0
#ifdef BONETEXTURE
uniform sampler2D boneSampler;
uniform float boneTextureWidth;
#else
uniform mat4 mBones[BonesPerMesh];
#ifdef BONES_VELOCITY_ENABLED
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#endif
attribute vec4 matricesIndices;
attribute vec4 matricesWeights;
#if NUM_BONE_INFLUENCERS>4
attribute vec4 matricesIndicesExtra;
attribute vec4 matricesWeightsExtra;
#endif
#ifdef BONETEXTURE
#define inline
mat4 readMatrixFromRawSampler(sampler2D smp,float index)
{
float offset=index*4.0;
float dx=1.0/boneTextureWidth;
vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));
vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));
vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));
vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));
return mat4(m0,m1,m2,m3);
}
#endif
#endif`;D.IncludesShadersStore[Ti]=Ei;var Ii="instancesDeclaration",bi=`#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#ifdef THIN_INSTANCES
uniform mat4 world;
#endif
#else
uniform mat4 world;
#endif`;D.IncludesShadersStore[Ii]=bi;var Mi="prePassVertexDeclaration",Pi=`#ifdef PREPASS
#ifdef PREPASS_DEPTHNORMAL
varying vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
uniform mat4 previousWorld;
uniform mat4 previousViewProjection;
varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
#endif
#endif`;D.IncludesShadersStore[Mi]=Pi;var Ci="bumpVertexDeclaration",Di=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
varying mat3 vTBN;
#endif
#endif
`;D.IncludesShadersStore[Ci]=Di;var Oi="clipPlaneVertexDeclaration",xi=`#ifdef CLIPPLANE
uniform vec4 vClipPlane;
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;
varying float fClipDistance6;
#endif`;D.IncludesShadersStore[Oi]=xi;var Ri="fogVertexDeclaration",Li=`#ifdef FOG
varying vec3 vFogDistance;
#endif`;D.IncludesShadersStore[Ri]=Li;var wi="morphTargetsVertexGlobalDeclaration",Ni=`#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#endif`;D.IncludesShadersStore[wi]=Ni;var Fi="morphTargetsVertexDeclaration",Bi=`#ifdef MORPHTARGETS
attribute vec3 position{X};
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#endif`;D.IncludesShadersStore[Fi]=Bi;var Ui="morphTargetsVertex",Vi=`#ifdef MORPHTARGETS
positionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];
#endif
#endif`;D.IncludesShadersStore[Ui]=Vi;var Xi="instancesVertex",Wi=`#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);
#ifdef THIN_INSTANCES
finalWorld=world*finalWorld;
#endif
#else
mat4 finalWorld=world;
#endif`;D.IncludesShadersStore[Xi]=Wi;var ki="bonesVertex",zi=`#if NUM_BONE_INFLUENCERS>0
mat4 influence;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif
#else
influence=mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
#endif
finalWorld=finalWorld*influence;
#endif`;D.IncludesShadersStore[ki]=zi;var Hi="prePassVertex",Gi=`#ifdef PREPASS_DEPTHNORMAL
vViewPos=(view*worldPos).rgb;
#endif
#if defined(PREPASS_VELOCITY) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;
previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*previousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*previousWorld*vec4(positionUpdated,1.0);
#endif
#endif`;D.IncludesShadersStore[Hi]=Gi;var Yi="bumpVertex",Ki=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);
vec3 tbnTangent=normalize(tangentUpdated.xyz);
vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;
vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif`;D.IncludesShadersStore[Yi]=Ki;var ji="clipPlaneVertex",Qi=`#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif`;D.IncludesShadersStore[ji]=Qi;var $i="fogVertex",Zi=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif`;D.IncludesShadersStore[$i]=Zi;var qi="shadowsVertex",Ji=`#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {
vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
vDepthMetric{X}[i]=((vPositionFromLight{X}[i].z+light{X}.depthValues.x)/(light{X}.depthValues.y));
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
vDepthMetric{X}=((vPositionFromLight{X}.z+light{X}.depthValues.x)/(light{X}.depthValues.y));
#endif
#endif`;D.IncludesShadersStore[qi]=Ji;var en="pointCloudVertex",tn=`#ifdef POINTSIZE
gl_PointSize=pointSize;
#endif`;D.IncludesShadersStore[en]=tn;var nn="logDepthVertex",rn=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;
gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif`;D.IncludesShadersStore[nn]=rn;var an="defaultVertexShader",on=`#include<__decl__defaultVertex>

#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>

#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif
#ifdef MAINUV2
varying vec2 vMainUV2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0
varying vec2 vDiffuseUV;
#endif
#if defined(DETAIL) && DETAILDIRECTUV == 0
varying vec2 vDetailUV;
#endif
#if defined(AMBIENT) && AMBIENTDIRECTUV == 0
varying vec2 vAmbientUV;
#endif
#if defined(OPACITY) && OPACITYDIRECTUV == 0
varying vec2 vOpacityUV;
#endif
#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0
varying vec2 vEmissiveUV;
#endif
#if defined(LIGHTMAP) && LIGHTMAPDIRECTUV == 0
varying vec2 vLightmapUV;
#endif
#if defined(SPECULAR) && defined(SPECULARTERM) && SPECULARDIRECTUV == 0
varying vec2 vSpecularUV;
#endif
#if defined(BUMP) && BUMPDIRECTUV == 0
varying vec2 vBumpUV;
#endif

varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)

vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
vPreviousPosition=previousViewProjection*previousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));
vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR == 0u) {
gl_Position=viewProjection*worldPos;
} else {
gl_Position=viewProjectionR*worldPos;
}
#else
gl_Position=viewProjection*worldPos;
#endif
vPositionW=vec3(worldPos);
#include<prePassVertex>
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif

#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#ifdef MAINUV2
vMainUV2=uv2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0
if (vDiffuseInfos.x == 0.)
{
vDiffuseUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(DETAIL) && DETAILDIRECTUV == 0
if (vDetailInfos.x == 0.)
{
vDetailUV=vec2(detailMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vDetailUV=vec2(detailMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(AMBIENT) && AMBIENTDIRECTUV == 0
if (vAmbientInfos.x == 0.)
{
vAmbientUV=vec2(ambientMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vAmbientUV=vec2(ambientMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(OPACITY) && OPACITYDIRECTUV == 0
if (vOpacityInfos.x == 0.)
{
vOpacityUV=vec2(opacityMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0
if (vEmissiveInfos.x == 0.)
{
vEmissiveUV=vec2(emissiveMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vEmissiveUV=vec2(emissiveMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(LIGHTMAP) && LIGHTMAPDIRECTUV == 0
if (vLightmapInfos.x == 0.)
{
vLightmapUV=vec2(lightmapMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vLightmapUV=vec2(lightmapMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(SPECULAR) && defined(SPECULARTERM) && SPECULARDIRECTUV == 0
if (vSpecularInfos.x == 0.)
{
vSpecularUV=vec2(specularMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vSpecularUV=vec2(specularMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(BUMP) && BUMPDIRECTUV == 0
if (vBumpInfos.x == 0.)
{
vBumpUV=vec2(bumpMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vBumpUV=vec2(bumpMatrix*vec4(uv2,1.0,0.0));
}
#endif
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#ifdef VERTEXCOLOR

vColor=color;
#endif
#include<pointCloudVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;D.ShadersStore[an]=on;var sn=function(){function o(){this._defines={},this._currentRank=32,this._maxRank=-1,this._mesh=null}return o.prototype.unBindMesh=function(){this._mesh=null},o.prototype.addFallback=function(t,e){this._defines[t]||(t<this._currentRank&&(this._currentRank=t),t>this._maxRank&&(this._maxRank=t),this._defines[t]=new Array),this._defines[t].push(e)},o.prototype.addCPUSkinningFallback=function(t,e){this._mesh=e,t<this._currentRank&&(this._currentRank=t),t>this._maxRank&&(this._maxRank=t)},Object.defineProperty(o.prototype,"hasMoreFallbacks",{get:function(){return this._currentRank<=this._maxRank},enumerable:!1,configurable:!0}),o.prototype.reduce=function(t,e){if(this._mesh&&this._mesh.computeBonesUsingShaders&&this._mesh.numBoneInfluencers>0){this._mesh.computeBonesUsingShaders=!1,t=t.replace("#define NUM_BONE_INFLUENCERS "+this._mesh.numBoneInfluencers,"#define NUM_BONE_INFLUENCERS 0"),e._bonesComputationForcedToCPU=!0;for(var i=this._mesh.getScene(),n=0;n<i.meshes.length;n++){var r=i.meshes[n];if(!r.material){!this._mesh.material&&r.computeBonesUsingShaders&&r.numBoneInfluencers>0&&(r.computeBonesUsingShaders=!1);continue}if(!(!r.computeBonesUsingShaders||r.numBoneInfluencers===0)){if(r.material.getEffect()===e)r.computeBonesUsingShaders=!1;else if(r.subMeshes)for(var a=0,s=r.subMeshes;a<s.length;a++){var f=s[a],l=f.effect;if(l===e){r.computeBonesUsingShaders=!1;break}}}}}else{var u=this._defines[this._currentRank];if(u)for(var n=0;n<u.length;n++)t=t.replace("#define "+u[n],"");this._currentRank++}return t},o}(),be=function(){function o(t){this._texture=null,this.diffuseBlendLevel=1,this.roughnessBlendLevel=1,this.bumpLevel=1,this._normalBlendMethod=Q.MATERIAL_NORMALBLENDMETHOD_WHITEOUT,this._isEnabled=!1,this.isEnabled=!1,this._internalMarkAllSubMeshesAsTexturesDirty=t}return o.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},o.prototype.isReadyForSubMesh=function(t,e){var i=e.getEngine();return!(t._areTexturesDirty&&e.texturesEnabled&&i.getCaps().standardDerivatives&&this._texture&&B.DetailTextureEnabled&&!this._texture.isReady())},o.prototype.prepareDefines=function(t,e){if(this._isEnabled){t.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod;var i=e.getEngine();t._areTexturesDirty&&(i.getCaps().standardDerivatives&&this._texture&&B.DetailTextureEnabled&&this._isEnabled?(O.PrepareDefinesForMergedUV(this._texture,t,"DETAIL"),t.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod):t.DETAIL=!1)}else t.DETAIL=!1},o.prototype.bindForSubMesh=function(t,e,i){!this._isEnabled||((!t.useUbo||!i||!t.isSync)&&this._texture&&B.DetailTextureEnabled&&(t.updateFloat4("vDetailInfos",this._texture.coordinatesIndex,this.diffuseBlendLevel,this.bumpLevel,this.roughnessBlendLevel),O.BindTextureMatrix(this._texture,t,"detail")),e.texturesEnabled&&this._texture&&B.DetailTextureEnabled&&t.setTexture("detailSampler",this._texture))},o.prototype.hasTexture=function(t){return this._texture===t},o.prototype.getActiveTextures=function(t){this._texture&&t.push(this._texture)},o.prototype.getAnimatables=function(t){this._texture&&this._texture.animations&&this._texture.animations.length>0&&t.push(this._texture)},o.prototype.dispose=function(t){var e;t&&((e=this._texture)===null||e===void 0||e.dispose())},o.prototype.getClassName=function(){return"DetailMap"},o.AddUniforms=function(t){t.push("vDetailInfos")},o.AddSamplers=function(t){t.push("detailSampler")},o.PrepareUniformBuffer=function(t){t.addUniform("vDetailInfos",4),t.addUniform("detailMatrix",16)},o.prototype.copyTo=function(t){Y.Clone(function(){return t},this)},o.prototype.serialize=function(){return Y.Serialize(this)},o.prototype.parse=function(t,e,i){var n=this;Y.Parse(function(){return n},t,e,i)},g([ae("detailTexture"),x("_markAllSubMeshesAsTexturesDirty")],o.prototype,"texture",void 0),g([E()],o.prototype,"diffuseBlendLevel",void 0),g([E()],o.prototype,"roughnessBlendLevel",void 0),g([E()],o.prototype,"bumpLevel",void 0),g([E(),x("_markAllSubMeshesAsTexturesDirty")],o.prototype,"normalBlendMethod",void 0),g([E(),x("_markAllSubMeshesAsTexturesDirty")],o.prototype,"isEnabled",void 0),o}(),Ce={effect:null,subMesh:null},ln=function(o){W(t,o);function t(){var e=o.call(this)||this;return e.MAINUV1=!1,e.MAINUV2=!1,e.DIFFUSE=!1,e.DIFFUSEDIRECTUV=0,e.DETAIL=!1,e.DETAILDIRECTUV=0,e.DETAIL_NORMALBLENDMETHOD=0,e.AMBIENT=!1,e.AMBIENTDIRECTUV=0,e.OPACITY=!1,e.OPACITYDIRECTUV=0,e.OPACITYRGB=!1,e.REFLECTION=!1,e.EMISSIVE=!1,e.EMISSIVEDIRECTUV=0,e.SPECULAR=!1,e.SPECULARDIRECTUV=0,e.BUMP=!1,e.BUMPDIRECTUV=0,e.PARALLAX=!1,e.PARALLAXOCCLUSION=!1,e.SPECULAROVERALPHA=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.ALPHAFROMDIFFUSE=!1,e.POINTSIZE=!1,e.FOG=!1,e.SPECULARTERM=!1,e.DIFFUSEFRESNEL=!1,e.OPACITYFRESNEL=!1,e.REFLECTIONFRESNEL=!1,e.REFRACTIONFRESNEL=!1,e.EMISSIVEFRESNEL=!1,e.FRESNEL=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.BONETEXTURE=!1,e.BONES_VELOCITY_ENABLED=!1,e.INSTANCES=!1,e.THIN_INSTANCES=!1,e.GLOSSINESS=!1,e.ROUGHNESS=!1,e.EMISSIVEASILLUMINATION=!1,e.LINKEMISSIVEWITHDIFFUSE=!1,e.REFLECTIONFRESNELFROMSPECULAR=!1,e.LIGHTMAP=!1,e.LIGHTMAPDIRECTUV=0,e.OBJECTSPACE_NORMALMAP=!1,e.USELIGHTMAPASSHADOWMAP=!1,e.REFLECTIONMAP_3D=!1,e.REFLECTIONMAP_SPHERICAL=!1,e.REFLECTIONMAP_PLANAR=!1,e.REFLECTIONMAP_CUBIC=!1,e.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,e.REFLECTIONMAP_PROJECTION=!1,e.REFLECTIONMAP_SKYBOX=!1,e.REFLECTIONMAP_EXPLICIT=!1,e.REFLECTIONMAP_EQUIRECTANGULAR=!1,e.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,e.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,e.INVERTCUBICMAP=!1,e.LOGARITHMICDEPTH=!1,e.REFRACTION=!1,e.REFRACTIONMAP_3D=!1,e.REFLECTIONOVERALPHA=!1,e.TWOSIDEDLIGHTING=!1,e.SHADOWFLOAT=!1,e.MORPHTARGETS=!1,e.MORPHTARGETS_NORMAL=!1,e.MORPHTARGETS_TANGENT=!1,e.MORPHTARGETS_UV=!1,e.NUM_MORPH_INFLUENCERS=0,e.NONUNIFORMSCALING=!1,e.PREMULTIPLYALPHA=!1,e.ALPHATEST_AFTERALLALPHACOMPUTATIONS=!1,e.ALPHABLEND=!0,e.PREPASS=!1,e.PREPASS_IRRADIANCE=!1,e.PREPASS_IRRADIANCE_INDEX=-1,e.PREPASS_ALBEDO=!1,e.PREPASS_ALBEDO_INDEX=-1,e.PREPASS_DEPTHNORMAL=!1,e.PREPASS_DEPTHNORMAL_INDEX=-1,e.PREPASS_POSITION=!1,e.PREPASS_POSITION_INDEX=-1,e.PREPASS_VELOCITY=!1,e.PREPASS_VELOCITY_INDEX=-1,e.PREPASS_REFLECTIVITY=!1,e.PREPASS_REFLECTIVITY_INDEX=-1,e.SCENE_MRT_COUNT=0,e.RGBDLIGHTMAP=!1,e.RGBDREFLECTION=!1,e.RGBDREFRACTION=!1,e.IMAGEPROCESSING=!1,e.VIGNETTE=!1,e.VIGNETTEBLENDMODEMULTIPLY=!1,e.VIGNETTEBLENDMODEOPAQUE=!1,e.TONEMAPPING=!1,e.TONEMAPPING_ACES=!1,e.CONTRAST=!1,e.COLORCURVES=!1,e.COLORGRADING=!1,e.COLORGRADING3D=!1,e.SAMPLER3DGREENDEPTH=!1,e.SAMPLER3DBGRMAP=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.MULTIVIEW=!1,e.IS_REFLECTION_LINEAR=!1,e.IS_REFRACTION_LINEAR=!1,e.EXPOSURE=!1,e.rebuild(),e}return t.prototype.setReflectionMode=function(e){for(var i=["REFLECTIONMAP_CUBIC","REFLECTIONMAP_EXPLICIT","REFLECTIONMAP_PLANAR","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_SKYBOX","REFLECTIONMAP_SPHERICAL","REFLECTIONMAP_EQUIRECTANGULAR","REFLECTIONMAP_EQUIRECTANGULAR_FIXED","REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED"],n=0,r=i;n<r.length;n++){var a=r[n];this[a]=a===e}},t}(ut),Ne=function(o){W(t,o);function t(e,i){var n=o.call(this,e,i)||this;return n._diffuseTexture=null,n._ambientTexture=null,n._opacityTexture=null,n._reflectionTexture=null,n._emissiveTexture=null,n._specularTexture=null,n._bumpTexture=null,n._lightmapTexture=null,n._refractionTexture=null,n.ambientColor=new ne(0,0,0),n.diffuseColor=new ne(1,1,1),n.specularColor=new ne(1,1,1),n.emissiveColor=new ne(0,0,0),n.specularPower=64,n._useAlphaFromDiffuseTexture=!1,n._useEmissiveAsIllumination=!1,n._linkEmissiveWithDiffuse=!1,n._useSpecularOverAlpha=!1,n._useReflectionOverAlpha=!1,n._disableLighting=!1,n._useObjectSpaceNormalMap=!1,n._useParallax=!1,n._useParallaxOcclusion=!1,n.parallaxScaleBias=.05,n._roughness=0,n.indexOfRefraction=.98,n.invertRefractionY=!0,n.alphaCutOff=.4,n._useLightmapAsShadowmap=!1,n._useReflectionFresnelFromSpecular=!1,n._useGlossinessFromSpecularMapAlpha=!1,n._maxSimultaneousLights=4,n._invertNormalMapX=!1,n._invertNormalMapY=!1,n._twoSidedLighting=!1,n.detailMap=new be(n._markAllSubMeshesAsTexturesDirty.bind(n)),n._renderTargets=new ht(16),n._worldViewProjectionMatrix=M.Zero(),n._globalAmbientColor=new ne(0,0,0),n._rebuildInParallel=!1,n._attachImageProcessingConfiguration(null),n.prePassConfiguration=new Pe,n.getRenderTargetTextures=function(){return n._renderTargets.reset(),t.ReflectionTextureEnabled&&n._reflectionTexture&&n._reflectionTexture.isRenderTarget&&n._renderTargets.push(n._reflectionTexture),t.RefractionTextureEnabled&&n._refractionTexture&&n._refractionTexture.isRenderTarget&&n._renderTargets.push(n._refractionTexture),n._renderTargets},n}return Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(e){this._attachImageProcessingConfiguration(e),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),t.prototype._attachImageProcessingConfiguration=function(e){var i=this;e!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),e?this._imageProcessingConfiguration=e:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){i._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(t.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(e){this.imageProcessingConfiguration.colorCurvesEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(e){this.imageProcessingConfiguration.colorGradingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(e){this._imageProcessingConfiguration.toneMappingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(e){this._imageProcessingConfiguration.exposure=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(e){this._imageProcessingConfiguration.contrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(e){this._imageProcessingConfiguration.colorGradingTexture=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(e){this._imageProcessingConfiguration.colorCurves=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasRenderTargetTextures",{get:function(){return!!(t.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget||t.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"StandardMaterial"},Object.defineProperty(t.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(e){this._useLogarithmicDepth=e&&this.getScene().getEngine().getCaps().fragmentDepthSupported,this._markAllSubMeshesAsMiscDirty()},enumerable:!1,configurable:!0}),t.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromDiffuseTexture()||this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled},t.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===Q.MATERIAL_ALPHATEST)},t.prototype._shouldUseAlphaFromDiffuseTexture=function(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha&&this._useAlphaFromDiffuseTexture&&this._transparencyMode!==Q.MATERIAL_OPAQUE},t.prototype._hasAlphaChannel=function(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha||this._opacityTexture!=null},t.prototype.getAlphaTestTexture=function(){return this._diffuseTexture},t.prototype.isReadyForSubMesh=function(e,i,n){if(n===void 0&&(n=!1),i.effect&&this.isFrozen&&i.effect._wasPreviouslyReady)return!0;i._materialDefines||(i._materialDefines=new ln);var r=this.getScene(),a=i._materialDefines;if(this._isReadyForSubMesh(i))return!0;var s=r.getEngine();if(a._needNormals=O.PrepareDefinesForLights(r,e,a,!0,this._maxSimultaneousLights,this._disableLighting),O.PrepareDefinesForMultiview(r,a),O.PrepareDefinesForPrePass(r,a,this.canRenderToMRT),a._areTexturesDirty){if(a._needUVs=!1,a.MAINUV1=!1,a.MAINUV2=!1,r.texturesEnabled){if(this._diffuseTexture&&t.DiffuseTextureEnabled)if(this._diffuseTexture.isReadyOrNotBlocking())O.PrepareDefinesForMergedUV(this._diffuseTexture,a,"DIFFUSE");else return!1;else a.DIFFUSE=!1;if(this._ambientTexture&&t.AmbientTextureEnabled)if(this._ambientTexture.isReadyOrNotBlocking())O.PrepareDefinesForMergedUV(this._ambientTexture,a,"AMBIENT");else return!1;else a.AMBIENT=!1;if(this._opacityTexture&&t.OpacityTextureEnabled)if(this._opacityTexture.isReadyOrNotBlocking())O.PrepareDefinesForMergedUV(this._opacityTexture,a,"OPACITY"),a.OPACITYRGB=this._opacityTexture.getAlphaFromRGB;else return!1;else a.OPACITY=!1;if(this._reflectionTexture&&t.ReflectionTextureEnabled)if(this._reflectionTexture.isReadyOrNotBlocking()){switch(a._needNormals=!0,a.REFLECTION=!0,a.ROUGHNESS=this._roughness>0,a.REFLECTIONOVERALPHA=this._useReflectionOverAlpha,a.INVERTCUBICMAP=this._reflectionTexture.coordinatesMode===ie.INVCUBIC_MODE,a.REFLECTIONMAP_3D=this._reflectionTexture.isCube,a.RGBDREFLECTION=this._reflectionTexture.isRGBD,this._reflectionTexture.coordinatesMode){case ie.EXPLICIT_MODE:a.setReflectionMode("REFLECTIONMAP_EXPLICIT");break;case ie.PLANAR_MODE:a.setReflectionMode("REFLECTIONMAP_PLANAR");break;case ie.PROJECTION_MODE:a.setReflectionMode("REFLECTIONMAP_PROJECTION");break;case ie.SKYBOX_MODE:a.setReflectionMode("REFLECTIONMAP_SKYBOX");break;case ie.SPHERICAL_MODE:a.setReflectionMode("REFLECTIONMAP_SPHERICAL");break;case ie.EQUIRECTANGULAR_MODE:a.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR");break;case ie.FIXED_EQUIRECTANGULAR_MODE:a.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR_FIXED");break;case ie.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:a.setReflectionMode("REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED");break;case ie.CUBIC_MODE:case ie.INVCUBIC_MODE:default:a.setReflectionMode("REFLECTIONMAP_CUBIC");break}a.USE_LOCAL_REFLECTIONMAP_CUBIC=!!this._reflectionTexture.boundingBoxSize}else return!1;else a.REFLECTION=!1;if(this._emissiveTexture&&t.EmissiveTextureEnabled)if(this._emissiveTexture.isReadyOrNotBlocking())O.PrepareDefinesForMergedUV(this._emissiveTexture,a,"EMISSIVE");else return!1;else a.EMISSIVE=!1;if(this._lightmapTexture&&t.LightmapTextureEnabled)if(this._lightmapTexture.isReadyOrNotBlocking())O.PrepareDefinesForMergedUV(this._lightmapTexture,a,"LIGHTMAP"),a.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,a.RGBDLIGHTMAP=this._lightmapTexture.isRGBD;else return!1;else a.LIGHTMAP=!1;if(this._specularTexture&&t.SpecularTextureEnabled)if(this._specularTexture.isReadyOrNotBlocking())O.PrepareDefinesForMergedUV(this._specularTexture,a,"SPECULAR"),a.GLOSSINESS=this._useGlossinessFromSpecularMapAlpha;else return!1;else a.SPECULAR=!1;if(r.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&t.BumpTextureEnabled){if(this._bumpTexture.isReady())O.PrepareDefinesForMergedUV(this._bumpTexture,a,"BUMP"),a.PARALLAX=this._useParallax,a.PARALLAXOCCLUSION=this._useParallaxOcclusion;else return!1;a.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap}else a.BUMP=!1;if(this._refractionTexture&&t.RefractionTextureEnabled)if(this._refractionTexture.isReadyOrNotBlocking())a._needUVs=!0,a.REFRACTION=!0,a.REFRACTIONMAP_3D=this._refractionTexture.isCube,a.RGBDREFRACTION=this._refractionTexture.isRGBD;else return!1;else a.REFRACTION=!1;a.TWOSIDEDLIGHTING=!this._backFaceCulling&&this._twoSidedLighting}else a.DIFFUSE=!1,a.AMBIENT=!1,a.OPACITY=!1,a.REFLECTION=!1,a.EMISSIVE=!1,a.LIGHTMAP=!1,a.BUMP=!1,a.REFRACTION=!1;a.ALPHAFROMDIFFUSE=this._shouldUseAlphaFromDiffuseTexture(),a.EMISSIVEASILLUMINATION=this._useEmissiveAsIllumination,a.LINKEMISSIVEWITHDIFFUSE=this._linkEmissiveWithDiffuse,a.SPECULAROVERALPHA=this._useSpecularOverAlpha,a.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,a.ALPHATEST_AFTERALLALPHACOMPUTATIONS=this.transparencyMode!==null,a.ALPHABLEND=this.transparencyMode===null||this.needAlphaBlendingForMesh(e)}if(!this.detailMap.isReadyForSubMesh(a,r))return!1;if(a._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(a),a.IS_REFLECTION_LINEAR=this.reflectionTexture!=null&&!this.reflectionTexture.gammaSpace,a.IS_REFRACTION_LINEAR=this.refractionTexture!=null&&!this.refractionTexture.gammaSpace}if(a._areFresnelDirty&&(t.FresnelEnabled?(this._diffuseFresnelParameters||this._opacityFresnelParameters||this._emissiveFresnelParameters||this._refractionFresnelParameters||this._reflectionFresnelParameters)&&(a.DIFFUSEFRESNEL=this._diffuseFresnelParameters&&this._diffuseFresnelParameters.isEnabled,a.OPACITYFRESNEL=this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled,a.REFLECTIONFRESNEL=this._reflectionFresnelParameters&&this._reflectionFresnelParameters.isEnabled,a.REFLECTIONFRESNELFROMSPECULAR=this._useReflectionFresnelFromSpecular,a.REFRACTIONFRESNEL=this._refractionFresnelParameters&&this._refractionFresnelParameters.isEnabled,a.EMISSIVEFRESNEL=this._emissiveFresnelParameters&&this._emissiveFresnelParameters.isEnabled,a._needNormals=!0,a.FRESNEL=!0):a.FRESNEL=!1),O.PrepareDefinesForMisc(e,r,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e)||this._forceAlphaTest,a),O.PrepareDefinesForAttributes(e,a,!0,!0,!0),O.PrepareDefinesForFrameBoundValues(r,s,a,n,null,i.getRenderingMesh().hasThinInstances),this.detailMap.prepareDefines(a,r),a.isDirty){var f=a._areLightsDisposed;a.markAsProcessed();var l=new sn;a.REFLECTION&&l.addFallback(0,"REFLECTION"),a.SPECULAR&&l.addFallback(0,"SPECULAR"),a.BUMP&&l.addFallback(0,"BUMP"),a.PARALLAX&&l.addFallback(1,"PARALLAX"),a.PARALLAXOCCLUSION&&l.addFallback(0,"PARALLAXOCCLUSION"),a.SPECULAROVERALPHA&&l.addFallback(0,"SPECULAROVERALPHA"),a.FOG&&l.addFallback(1,"FOG"),a.POINTSIZE&&l.addFallback(0,"POINTSIZE"),a.LOGARITHMICDEPTH&&l.addFallback(0,"LOGARITHMICDEPTH"),O.HandleFallbacksForShadows(a,l,this._maxSimultaneousLights),a.SPECULARTERM&&l.addFallback(0,"SPECULARTERM"),a.DIFFUSEFRESNEL&&l.addFallback(1,"DIFFUSEFRESNEL"),a.OPACITYFRESNEL&&l.addFallback(2,"OPACITYFRESNEL"),a.REFLECTIONFRESNEL&&l.addFallback(3,"REFLECTIONFRESNEL"),a.EMISSIVEFRESNEL&&l.addFallback(4,"EMISSIVEFRESNEL"),a.FRESNEL&&l.addFallback(4,"FRESNEL"),a.MULTIVIEW&&l.addFallback(0,"MULTIVIEW");var u=[v.PositionKind];a.NORMAL&&u.push(v.NormalKind),a.UV1&&u.push(v.UVKind),a.UV2&&u.push(v.UV2Kind),a.VERTEXCOLOR&&u.push(v.ColorKind),O.PrepareAttributesForBones(u,e,a,l),O.PrepareAttributesForInstances(u,a),O.PrepareAttributesForMorphTargets(u,e,a);var h="default",c=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vDiffuseColor","vSpecularColor","vEmissiveColor","visibility","vFogInfos","vFogColor","pointSize","vDiffuseInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vEmissiveInfos","vSpecularInfos","vBumpInfos","vLightmapInfos","vRefractionInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","diffuseMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","specularMatrix","bumpMatrix","normalMatrix","lightmapMatrix","refractionMatrix","diffuseLeftColor","diffuseRightColor","opacityParts","reflectionLeftColor","reflectionRightColor","emissiveLeftColor","emissiveRightColor","refractionLeftColor","refractionRightColor","vReflectionPosition","vReflectionSize","logarithmicDepthConstant","vTangentSpaceParams","alphaCutOff","boneTextureWidth"],p=["diffuseSampler","ambientSampler","opacitySampler","reflectionCubeSampler","reflection2DSampler","emissiveSampler","specularSampler","bumpSampler","lightmapSampler","refractionCubeSampler","refraction2DSampler","boneSampler"],d=["Material","Scene"];be.AddUniforms(c),be.AddSamplers(p),Pe.AddUniforms(c),Pe.AddSamplers(c),Me&&(Me.PrepareUniforms(c,a),Me.PrepareSamplers(p,a)),O.PrepareUniformsAndSamplersList({uniformsNames:c,uniformBuffersNames:d,samplers:p,defines:a,maxSimultaneousLights:this._maxSimultaneousLights});var S={};this.customShaderNameResolve&&(h=this.customShaderNameResolve(h,c,d,p,a,u,S));var _=a.toString(),y=i.effect,m=r.getEngine().createEffect(h,{attributes:u,uniformsNames:c,uniformBuffersNames:d,samplers:p,defines:_,fallbacks:l,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:a.NUM_MORPH_INFLUENCERS},processFinalCode:S.processFinalCode,multiTarget:a.PREPASS},s);if(m)if(this._onEffectCreatedObservable&&(Ce.effect=m,Ce.subMesh=i,this._onEffectCreatedObservable.notifyObservers(Ce)),this.allowShaderHotSwapping&&y&&!m.isReady()){if(m=y,this._rebuildInParallel=!0,a.markAsUnprocessed(),f)return a._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,r.resetCachedMaterial(),i.setEffect(m,a),this.buildUniformLayout()}return!i.effect||!i.effect.isReady()?!1:(a._renderId=r.getRenderId(),i.effect._wasPreviouslyReady=!0,!0)},t.prototype.buildUniformLayout=function(){var e=this._uniformBuffer;e.addUniform("diffuseLeftColor",4),e.addUniform("diffuseRightColor",4),e.addUniform("opacityParts",4),e.addUniform("reflectionLeftColor",4),e.addUniform("reflectionRightColor",4),e.addUniform("refractionLeftColor",4),e.addUniform("refractionRightColor",4),e.addUniform("emissiveLeftColor",4),e.addUniform("emissiveRightColor",4),e.addUniform("vDiffuseInfos",2),e.addUniform("vAmbientInfos",2),e.addUniform("vOpacityInfos",2),e.addUniform("vReflectionInfos",2),e.addUniform("vReflectionPosition",3),e.addUniform("vReflectionSize",3),e.addUniform("vEmissiveInfos",2),e.addUniform("vLightmapInfos",2),e.addUniform("vSpecularInfos",2),e.addUniform("vBumpInfos",3),e.addUniform("diffuseMatrix",16),e.addUniform("ambientMatrix",16),e.addUniform("opacityMatrix",16),e.addUniform("reflectionMatrix",16),e.addUniform("emissiveMatrix",16),e.addUniform("lightmapMatrix",16),e.addUniform("specularMatrix",16),e.addUniform("bumpMatrix",16),e.addUniform("vTangentSpaceParams",2),e.addUniform("pointSize",1),e.addUniform("refractionMatrix",16),e.addUniform("vRefractionInfos",4),e.addUniform("vSpecularColor",4),e.addUniform("vEmissiveColor",3),e.addUniform("visibility",1),e.addUniform("vDiffuseColor",4),be.PrepareUniformBuffer(e),e.create()},t.prototype.unbind=function(){if(this._activeEffect){var e=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),e=!0),this._refractionTexture&&this._refractionTexture.isRenderTarget&&(this._activeEffect.setTexture("refraction2DSampler",null),e=!0),e&&this._markAllSubMeshesAsTexturesDirty()}o.prototype.unbind.call(this)},t.prototype.bindForSubMesh=function(e,i,n){var r=this.getScene(),a=n._materialDefines;if(!!a){var s=n.effect;if(!!s){this._activeEffect=s,(!a.INSTANCES||a.THIN_INSTANCES)&&this.bindOnlyWorldMatrix(e),this.prePassConfiguration.bindForSubMesh(this._activeEffect,r,i,e,this.isFrozen),a.OBJECTSPACE_NORMALMAP&&(e.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var f=this._mustRebind(r,s,i.visibility);O.BindBonesParameters(i,s);var l=this._uniformBuffer;if(f){if(l.bindToEffect(s,"Material"),this.bindViewProjection(s),!l.useUbo||!this.isFrozen||!l.isSync){if(t.FresnelEnabled&&a.FRESNEL&&(this.diffuseFresnelParameters&&this.diffuseFresnelParameters.isEnabled&&(l.updateColor4("diffuseLeftColor",this.diffuseFresnelParameters.leftColor,this.diffuseFresnelParameters.power),l.updateColor4("diffuseRightColor",this.diffuseFresnelParameters.rightColor,this.diffuseFresnelParameters.bias)),this.opacityFresnelParameters&&this.opacityFresnelParameters.isEnabled&&l.updateColor4("opacityParts",new ne(this.opacityFresnelParameters.leftColor.toLuminance(),this.opacityFresnelParameters.rightColor.toLuminance(),this.opacityFresnelParameters.bias),this.opacityFresnelParameters.power),this.reflectionFresnelParameters&&this.reflectionFresnelParameters.isEnabled&&(l.updateColor4("reflectionLeftColor",this.reflectionFresnelParameters.leftColor,this.reflectionFresnelParameters.power),l.updateColor4("reflectionRightColor",this.reflectionFresnelParameters.rightColor,this.reflectionFresnelParameters.bias)),this.refractionFresnelParameters&&this.refractionFresnelParameters.isEnabled&&(l.updateColor4("refractionLeftColor",this.refractionFresnelParameters.leftColor,this.refractionFresnelParameters.power),l.updateColor4("refractionRightColor",this.refractionFresnelParameters.rightColor,this.refractionFresnelParameters.bias)),this.emissiveFresnelParameters&&this.emissiveFresnelParameters.isEnabled&&(l.updateColor4("emissiveLeftColor",this.emissiveFresnelParameters.leftColor,this.emissiveFresnelParameters.power),l.updateColor4("emissiveRightColor",this.emissiveFresnelParameters.rightColor,this.emissiveFresnelParameters.bias))),r.texturesEnabled){if(this._diffuseTexture&&t.DiffuseTextureEnabled&&(l.updateFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),O.BindTextureMatrix(this._diffuseTexture,l,"diffuse")),this._ambientTexture&&t.AmbientTextureEnabled&&(l.updateFloat2("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level),O.BindTextureMatrix(this._ambientTexture,l,"ambient")),this._opacityTexture&&t.OpacityTextureEnabled&&(l.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),O.BindTextureMatrix(this._opacityTexture,l,"opacity")),this._hasAlphaChannel()&&s.setFloat("alphaCutOff",this.alphaCutOff),this._reflectionTexture&&t.ReflectionTextureEnabled&&(l.updateFloat2("vReflectionInfos",this._reflectionTexture.level,this.roughness),l.updateMatrix("reflectionMatrix",this._reflectionTexture.getReflectionTextureMatrix()),this._reflectionTexture.boundingBoxSize)){var u=this._reflectionTexture;l.updateVector3("vReflectionPosition",u.boundingBoxPosition),l.updateVector3("vReflectionSize",u.boundingBoxSize)}if(this._emissiveTexture&&t.EmissiveTextureEnabled&&(l.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),O.BindTextureMatrix(this._emissiveTexture,l,"emissive")),this._lightmapTexture&&t.LightmapTextureEnabled&&(l.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),O.BindTextureMatrix(this._lightmapTexture,l,"lightmap")),this._specularTexture&&t.SpecularTextureEnabled&&(l.updateFloat2("vSpecularInfos",this._specularTexture.coordinatesIndex,this._specularTexture.level),O.BindTextureMatrix(this._specularTexture,l,"specular")),this._bumpTexture&&r.getEngine().getCaps().standardDerivatives&&t.BumpTextureEnabled&&(l.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,1/this._bumpTexture.level,this.parallaxScaleBias),O.BindTextureMatrix(this._bumpTexture,l,"bump"),r._mirroredCameraPosition?l.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):l.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1)),this._refractionTexture&&t.RefractionTextureEnabled){var h=1;this._refractionTexture.isCube||(l.updateMatrix("refractionMatrix",this._refractionTexture.getReflectionTextureMatrix()),this._refractionTexture.depth&&(h=this._refractionTexture.depth)),l.updateFloat4("vRefractionInfos",this._refractionTexture.level,this.indexOfRefraction,h,this.invertRefractionY?-1:1)}}this.pointsCloud&&l.updateFloat("pointSize",this.pointSize),a.SPECULARTERM&&l.updateColor4("vSpecularColor",this.specularColor,this.specularPower),l.updateColor3("vEmissiveColor",t.EmissiveTextureEnabled?this.emissiveColor:ne.BlackReadOnly),l.updateColor4("vDiffuseColor",this.diffuseColor,this.alpha)}if(l.updateFloat("visibility",i.visibility),r.texturesEnabled&&(this._diffuseTexture&&t.DiffuseTextureEnabled&&s.setTexture("diffuseSampler",this._diffuseTexture),this._ambientTexture&&t.AmbientTextureEnabled&&s.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&t.OpacityTextureEnabled&&s.setTexture("opacitySampler",this._opacityTexture),this._reflectionTexture&&t.ReflectionTextureEnabled&&(this._reflectionTexture.isCube?s.setTexture("reflectionCubeSampler",this._reflectionTexture):s.setTexture("reflection2DSampler",this._reflectionTexture)),this._emissiveTexture&&t.EmissiveTextureEnabled&&s.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&t.LightmapTextureEnabled&&s.setTexture("lightmapSampler",this._lightmapTexture),this._specularTexture&&t.SpecularTextureEnabled&&s.setTexture("specularSampler",this._specularTexture),this._bumpTexture&&r.getEngine().getCaps().standardDerivatives&&t.BumpTextureEnabled&&s.setTexture("bumpSampler",this._bumpTexture),this._refractionTexture&&t.RefractionTextureEnabled)){var h=1;this._refractionTexture.isCube?s.setTexture("refractionCubeSampler",this._refractionTexture):s.setTexture("refraction2DSampler",this._refractionTexture)}this.detailMap.bindForSubMesh(l,r,this.isFrozen),O.BindClipPlane(s,r),r.ambientColor.multiplyToRef(this.ambientColor,this._globalAmbientColor),O.BindEyePosition(s,r),s.setColor3("vAmbientColor",this._globalAmbientColor)}(f||!this.isFrozen)&&(r.lightsEnabled&&!this._disableLighting&&O.BindLights(r,i,s,a,this._maxSimultaneousLights,this._rebuildInParallel),(r.fogEnabled&&i.applyFog&&r.fogMode!==G.FOGMODE_NONE||this._reflectionTexture||this._refractionTexture)&&this.bindView(s),O.BindFogParameters(r,i,s),a.NUM_MORPH_INFLUENCERS&&O.BindMorphTargetParameters(i,s),this.useLogarithmicDepth&&O.BindLogDepth(a,s,r),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect)),l.update(),this._afterBind(i,this._activeEffect)}}},t.prototype.getAnimatables=function(){var e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&e.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&e.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&e.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&e.push(this._emissiveTexture),this._specularTexture&&this._specularTexture.animations&&this._specularTexture.animations.length>0&&e.push(this._specularTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&e.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&e.push(this._lightmapTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&e.push(this._refractionTexture),this.detailMap.getAnimatables(e),e},t.prototype.getActiveTextures=function(){var e=o.prototype.getActiveTextures.call(this);return this._diffuseTexture&&e.push(this._diffuseTexture),this._ambientTexture&&e.push(this._ambientTexture),this._opacityTexture&&e.push(this._opacityTexture),this._reflectionTexture&&e.push(this._reflectionTexture),this._emissiveTexture&&e.push(this._emissiveTexture),this._specularTexture&&e.push(this._specularTexture),this._bumpTexture&&e.push(this._bumpTexture),this._lightmapTexture&&e.push(this._lightmapTexture),this._refractionTexture&&e.push(this._refractionTexture),this.detailMap.getActiveTextures(e),e},t.prototype.hasTexture=function(e){return o.prototype.hasTexture.call(this,e)||this._diffuseTexture===e||this._ambientTexture===e||this._opacityTexture===e||this._reflectionTexture===e||this._emissiveTexture===e||this._specularTexture===e||this._bumpTexture===e||this._lightmapTexture===e||this._refractionTexture===e?!0:this.detailMap.hasTexture(e)},t.prototype.dispose=function(e,i){var n,r,a,s,f,l,u,h,c;i&&((n=this._diffuseTexture)===null||n===void 0||n.dispose(),(r=this._ambientTexture)===null||r===void 0||r.dispose(),(a=this._opacityTexture)===null||a===void 0||a.dispose(),(s=this._reflectionTexture)===null||s===void 0||s.dispose(),(f=this._emissiveTexture)===null||f===void 0||f.dispose(),(l=this._specularTexture)===null||l===void 0||l.dispose(),(u=this._bumpTexture)===null||u===void 0||u.dispose(),(h=this._lightmapTexture)===null||h===void 0||h.dispose(),(c=this._refractionTexture)===null||c===void 0||c.dispose()),this.detailMap.dispose(i),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),o.prototype.dispose.call(this,e,i)},t.prototype.clone=function(e){var i=this,n=Y.Clone(function(){return new t(e,i.getScene())},this);return n.name=e,n.id=e,n},t.prototype.serialize=function(){return Y.Serialize(this)},t.Parse=function(e,i,n){return Y.Parse(function(){return new t(e.name,i)},e,i,n)},Object.defineProperty(t,"DiffuseTextureEnabled",{get:function(){return B.DiffuseTextureEnabled},set:function(e){B.DiffuseTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"DetailTextureEnabled",{get:function(){return B.DetailTextureEnabled},set:function(e){B.DetailTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"AmbientTextureEnabled",{get:function(){return B.AmbientTextureEnabled},set:function(e){B.AmbientTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"OpacityTextureEnabled",{get:function(){return B.OpacityTextureEnabled},set:function(e){B.OpacityTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"ReflectionTextureEnabled",{get:function(){return B.ReflectionTextureEnabled},set:function(e){B.ReflectionTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"EmissiveTextureEnabled",{get:function(){return B.EmissiveTextureEnabled},set:function(e){B.EmissiveTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"SpecularTextureEnabled",{get:function(){return B.SpecularTextureEnabled},set:function(e){B.SpecularTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"BumpTextureEnabled",{get:function(){return B.BumpTextureEnabled},set:function(e){B.BumpTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"LightmapTextureEnabled",{get:function(){return B.LightmapTextureEnabled},set:function(e){B.LightmapTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"RefractionTextureEnabled",{get:function(){return B.RefractionTextureEnabled},set:function(e){B.RefractionTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"ColorGradingTextureEnabled",{get:function(){return B.ColorGradingTextureEnabled},set:function(e){B.ColorGradingTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"FresnelEnabled",{get:function(){return B.FresnelEnabled},set:function(e){B.FresnelEnabled=e},enumerable:!1,configurable:!0}),g([ae("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),g([x("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"diffuseTexture",void 0),g([ae("ambientTexture")],t.prototype,"_ambientTexture",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTexture",void 0),g([ae("opacityTexture")],t.prototype,"_opacityTexture",void 0),g([x("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"opacityTexture",void 0),g([ae("reflectionTexture")],t.prototype,"_reflectionTexture",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionTexture",void 0),g([ae("emissiveTexture")],t.prototype,"_emissiveTexture",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveTexture",void 0),g([ae("specularTexture")],t.prototype,"_specularTexture",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"specularTexture",void 0),g([ae("bumpTexture")],t.prototype,"_bumpTexture",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture",void 0),g([ae("lightmapTexture")],t.prototype,"_lightmapTexture",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"lightmapTexture",void 0),g([ae("refractionTexture")],t.prototype,"_refractionTexture",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"refractionTexture",void 0),g([Ie("ambient")],t.prototype,"ambientColor",void 0),g([Ie("diffuse")],t.prototype,"diffuseColor",void 0),g([Ie("specular")],t.prototype,"specularColor",void 0),g([Ie("emissive")],t.prototype,"emissiveColor",void 0),g([E()],t.prototype,"specularPower",void 0),g([E("useAlphaFromDiffuseTexture")],t.prototype,"_useAlphaFromDiffuseTexture",void 0),g([x("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"useAlphaFromDiffuseTexture",void 0),g([E("useEmissiveAsIllumination")],t.prototype,"_useEmissiveAsIllumination",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useEmissiveAsIllumination",void 0),g([E("linkEmissiveWithDiffuse")],t.prototype,"_linkEmissiveWithDiffuse",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"linkEmissiveWithDiffuse",void 0),g([E("useSpecularOverAlpha")],t.prototype,"_useSpecularOverAlpha",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useSpecularOverAlpha",void 0),g([E("useReflectionOverAlpha")],t.prototype,"_useReflectionOverAlpha",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useReflectionOverAlpha",void 0),g([E("disableLighting")],t.prototype,"_disableLighting",void 0),g([x("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),g([E("useObjectSpaceNormalMap")],t.prototype,"_useObjectSpaceNormalMap",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useObjectSpaceNormalMap",void 0),g([E("useParallax")],t.prototype,"_useParallax",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallax",void 0),g([E("useParallaxOcclusion")],t.prototype,"_useParallaxOcclusion",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallaxOcclusion",void 0),g([E()],t.prototype,"parallaxScaleBias",void 0),g([E("roughness")],t.prototype,"_roughness",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"roughness",void 0),g([E()],t.prototype,"indexOfRefraction",void 0),g([E()],t.prototype,"invertRefractionY",void 0),g([E()],t.prototype,"alphaCutOff",void 0),g([E("useLightmapAsShadowmap")],t.prototype,"_useLightmapAsShadowmap",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLightmapAsShadowmap",void 0),g([ge("diffuseFresnelParameters")],t.prototype,"_diffuseFresnelParameters",void 0),g([x("_markAllSubMeshesAsFresnelDirty")],t.prototype,"diffuseFresnelParameters",void 0),g([ge("opacityFresnelParameters")],t.prototype,"_opacityFresnelParameters",void 0),g([x("_markAllSubMeshesAsFresnelAndMiscDirty")],t.prototype,"opacityFresnelParameters",void 0),g([ge("reflectionFresnelParameters")],t.prototype,"_reflectionFresnelParameters",void 0),g([x("_markAllSubMeshesAsFresnelDirty")],t.prototype,"reflectionFresnelParameters",void 0),g([ge("refractionFresnelParameters")],t.prototype,"_refractionFresnelParameters",void 0),g([x("_markAllSubMeshesAsFresnelDirty")],t.prototype,"refractionFresnelParameters",void 0),g([ge("emissiveFresnelParameters")],t.prototype,"_emissiveFresnelParameters",void 0),g([x("_markAllSubMeshesAsFresnelDirty")],t.prototype,"emissiveFresnelParameters",void 0),g([E("useReflectionFresnelFromSpecular")],t.prototype,"_useReflectionFresnelFromSpecular",void 0),g([x("_markAllSubMeshesAsFresnelDirty")],t.prototype,"useReflectionFresnelFromSpecular",void 0),g([E("useGlossinessFromSpecularMapAlpha")],t.prototype,"_useGlossinessFromSpecularMapAlpha",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useGlossinessFromSpecularMapAlpha",void 0),g([E("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),g([x("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),g([E("invertNormalMapX")],t.prototype,"_invertNormalMapX",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapX",void 0),g([E("invertNormalMapY")],t.prototype,"_invertNormalMapY",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapY",void 0),g([E("twoSidedLighting")],t.prototype,"_twoSidedLighting",void 0),g([x("_markAllSubMeshesAsTexturesDirty")],t.prototype,"twoSidedLighting",void 0),g([E()],t.prototype,"useLogarithmicDepth",null),t}(At);fe.RegisteredTypes["BABYLON.StandardMaterial"]=Ne;G.DefaultMaterialFactory=function(o){return new Ne("default material",o)};var we;(function(o){o[o.STEP=1]="STEP"})(we||(we={}));var Qe=function(){function o(t,e,i){this.name=t,this.from=e,this.to=i}return o.prototype.clone=function(){return new o(this.name,this.from,this.to)},o}(),R=function(){function o(t,e,i,n,r,a){this.name=t,this.targetProperty=e,this.framePerSecond=i,this.dataType=n,this.loopMode=r,this.enableBlending=a,this._runtimeAnimations=new Array,this._events=new Array,this.blendingSpeed=.01,this._ranges={},this.targetPropertyPath=e.split("."),this.dataType=n,this.loopMode=r===void 0?o.ANIMATIONLOOPMODE_CYCLE:r}return o._PrepareAnimation=function(t,e,i,n,r,a,s,f){var l=void 0;if(!isNaN(parseFloat(r))&&isFinite(r)?l=o.ANIMATIONTYPE_FLOAT:r instanceof N?l=o.ANIMATIONTYPE_QUATERNION:r instanceof I?l=o.ANIMATIONTYPE_VECTOR3:r instanceof J?l=o.ANIMATIONTYPE_VECTOR2:r instanceof ne?l=o.ANIMATIONTYPE_COLOR3:r instanceof _e?l=o.ANIMATIONTYPE_COLOR4:r instanceof Ae&&(l=o.ANIMATIONTYPE_SIZE),l==null)return null;var u=new o(t,e,i,l,s),h=[{frame:0,value:r},{frame:n,value:a}];return u.setKeys(h),f!==void 0&&u.setEasingFunction(f),u},o.CreateAnimation=function(t,e,i,n){var r=new o(t+"Animation",t,i,e,o.ANIMATIONLOOPMODE_CONSTANT);return r.setEasingFunction(n),r},o.CreateAndStartAnimation=function(t,e,i,n,r,a,s,f,l,u){var h=o._PrepareAnimation(t,i,n,r,a,s,f,l);return h?e.getScene().beginDirectAnimation(e,[h],0,r,h.loopMode===1,1,u):null},o.CreateAndStartHierarchyAnimation=function(t,e,i,n,r,a,s,f,l,u,h){var c=o._PrepareAnimation(t,n,r,a,s,f,l,u);if(!c)return null;var p=e.getScene();return p.beginDirectHierarchyAnimation(e,i,[c],0,a,c.loopMode===1,1,h)},o.CreateMergeAndStartAnimation=function(t,e,i,n,r,a,s,f,l,u){var h=o._PrepareAnimation(t,i,n,r,a,s,f,l);return h?(e.animations.push(h),e.getScene().beginAnimation(e,0,r,h.loopMode===1,1,u)):null},o.MakeAnimationAdditive=function(t,e,i,n,r){e===void 0&&(e=0),n===void 0&&(n=!1);var a=t;if(n&&(a=t.clone(),a.name=r||a.name),!a._keys.length)return a;e=e>=0?e:0;var s=0,f=a._keys[0],l=a._keys.length-1,u=a._keys[l],h={referenceValue:f.value,referencePosition:L.Vector3[0],referenceQuaternion:L.Quaternion[0],referenceScaling:L.Vector3[1],keyPosition:L.Vector3[2],keyQuaternion:L.Quaternion[1],keyScaling:L.Vector3[3]},c=!1,p=f.frame,d=u.frame;if(i){var S=a.getRange(i);S&&(p=S.from,d=S.to)}var _=f.frame===p,y=u.frame===d;if(a._keys.length===1){var m=a._getKeyValue(a._keys[0]);h.referenceValue=m.clone?m.clone():m,c=!0}else if(e<=f.frame){var m=a._getKeyValue(f.value);h.referenceValue=m.clone?m.clone():m,c=!0}else if(e>=u.frame){var m=a._getKeyValue(u.value);h.referenceValue=m.clone?m.clone():m,c=!0}for(var T=0;!c||!_||!y&&T<a._keys.length-1;){var b=a._keys[T],C=a._keys[T+1];if(!c&&e>=b.frame&&e<=C.frame){var m=void 0;if(e===b.frame)m=a._getKeyValue(b.value);else if(e===C.frame)m=a._getKeyValue(C.value);else{var P={key:T,repeatCount:0,loopMode:this.ANIMATIONLOOPMODE_CONSTANT};m=a._interpolate(e,P)}h.referenceValue=m.clone?m.clone():m,c=!0}if(!_&&p>=b.frame&&p<=C.frame){if(p===b.frame)s=T;else if(p===C.frame)s=T+1;else{var P={key:T,repeatCount:0,loopMode:this.ANIMATIONLOOPMODE_CONSTANT},m=a._interpolate(p,P),A={frame:p,value:m.clone?m.clone():m};a._keys.splice(T+1,0,A),s=T+1}_=!0}if(!y&&d>=b.frame&&d<=C.frame){if(d===b.frame)l=T;else if(d===C.frame)l=T+1;else{var P={key:T,repeatCount:0,loopMode:this.ANIMATIONLOOPMODE_CONSTANT},m=a._interpolate(d,P),A={frame:d,value:m.clone?m.clone():m};a._keys.splice(T+1,0,A),l=T+1}y=!0}T++}a.dataType===o.ANIMATIONTYPE_QUATERNION?h.referenceValue.normalize().conjugateInPlace():a.dataType===o.ANIMATIONTYPE_MATRIX&&(h.referenceValue.decompose(h.referenceScaling,h.referenceQuaternion,h.referencePosition),h.referenceQuaternion.normalize().conjugateInPlace());for(var T=s;T<=l;T++){var A=a._keys[T];if(!(T&&a.dataType!==o.ANIMATIONTYPE_FLOAT&&A.value===f.value))switch(a.dataType){case o.ANIMATIONTYPE_MATRIX:A.value.decompose(h.keyScaling,h.keyQuaternion,h.keyPosition),h.keyPosition.subtractInPlace(h.referencePosition),h.keyScaling.divideInPlace(h.referenceScaling),h.referenceQuaternion.multiplyToRef(h.keyQuaternion,h.keyQuaternion),M.ComposeToRef(h.keyScaling,h.keyQuaternion,h.keyPosition,A.value);break;case o.ANIMATIONTYPE_QUATERNION:h.referenceValue.multiplyToRef(A.value,A.value);break;case o.ANIMATIONTYPE_VECTOR2:case o.ANIMATIONTYPE_VECTOR3:case o.ANIMATIONTYPE_COLOR3:case o.ANIMATIONTYPE_COLOR4:A.value.subtractToRef(h.referenceValue,A.value);break;case o.ANIMATIONTYPE_SIZE:A.value.width-=h.referenceValue.width,A.value.height-=h.referenceValue.height;break;default:A.value-=h.referenceValue}}return a},o.TransitionTo=function(t,e,i,n,r,a,s,f){if(f===void 0&&(f=null),s<=0)return i[t]=e,f&&f(),null;var l=r*(s/1e3);a.setKeys([{frame:0,value:i[t].clone?i[t].clone():i[t]},{frame:l,value:e}]),i.animations||(i.animations=[]),i.animations.push(a);var u=n.beginAnimation(i,0,l,!1);return u.onAnimationEnd=f,u},Object.defineProperty(o.prototype,"runtimeAnimations",{get:function(){return this._runtimeAnimations},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"hasRunningRuntimeAnimations",{get:function(){for(var t=0,e=this._runtimeAnimations;t<e.length;t++){var i=e[t];if(!i.isStopped)return!0}return!1},enumerable:!1,configurable:!0}),o.prototype.toString=function(t){var e="Name: "+this.name+", property: "+this.targetProperty;if(e+=", datatype: "+["Float","Vector3","Quaternion","Matrix","Color3","Vector2"][this.dataType],e+=", nKeys: "+(this._keys?this._keys.length:"none"),e+=", nRanges: "+(this._ranges?Object.keys(this._ranges).length:"none"),t){e+=", Ranges: {";var i=!0;for(var n in this._ranges)i&&(e+=", ",i=!1),e+=n;e+="}"}return e},o.prototype.addEvent=function(t){this._events.push(t),this._events.sort(function(e,i){return e.frame-i.frame})},o.prototype.removeEvents=function(t){for(var e=0;e<this._events.length;e++)this._events[e].frame===t&&(this._events.splice(e,1),e--)},o.prototype.getEvents=function(){return this._events},o.prototype.createRange=function(t,e,i){this._ranges[t]||(this._ranges[t]=new Qe(t,e,i))},o.prototype.deleteRange=function(t,e){e===void 0&&(e=!0);var i=this._ranges[t];if(!!i){if(e)for(var n=i.from,r=i.to,a=this._keys.length-1;a>=0;a--)this._keys[a].frame>=n&&this._keys[a].frame<=r&&this._keys.splice(a,1);this._ranges[t]=null}},o.prototype.getRange=function(t){return this._ranges[t]},o.prototype.getKeys=function(){return this._keys},o.prototype.getHighestFrame=function(){for(var t=0,e=0,i=this._keys.length;e<i;e++)t<this._keys[e].frame&&(t=this._keys[e].frame);return t},o.prototype.getEasingFunction=function(){return this._easingFunction},o.prototype.setEasingFunction=function(t){this._easingFunction=t},o.prototype.floatInterpolateFunction=function(t,e,i){return Oe.Lerp(t,e,i)},o.prototype.floatInterpolateFunctionWithTangents=function(t,e,i,n,r){return Oe.Hermite(t,e,i,n,r)},o.prototype.quaternionInterpolateFunction=function(t,e,i){return N.Slerp(t,e,i)},o.prototype.quaternionInterpolateFunctionWithTangents=function(t,e,i,n,r){return N.Hermite(t,e,i,n,r).normalize()},o.prototype.vector3InterpolateFunction=function(t,e,i){return I.Lerp(t,e,i)},o.prototype.vector3InterpolateFunctionWithTangents=function(t,e,i,n,r){return I.Hermite(t,e,i,n,r)},o.prototype.vector2InterpolateFunction=function(t,e,i){return J.Lerp(t,e,i)},o.prototype.vector2InterpolateFunctionWithTangents=function(t,e,i,n,r){return J.Hermite(t,e,i,n,r)},o.prototype.sizeInterpolateFunction=function(t,e,i){return Ae.Lerp(t,e,i)},o.prototype.color3InterpolateFunction=function(t,e,i){return ne.Lerp(t,e,i)},o.prototype.color4InterpolateFunction=function(t,e,i){return _e.Lerp(t,e,i)},o.prototype._getKeyValue=function(t){return typeof t=="function"?t():t},o.prototype._interpolate=function(t,e){if(e.loopMode===o.ANIMATIONLOOPMODE_CONSTANT&&e.repeatCount>0)return e.highLimitValue.clone?e.highLimitValue.clone():e.highLimitValue;var i=this._keys;if(i.length===1)return this._getKeyValue(i[0].value);var n=e.key;if(i[n].frame>=t)for(;n-1>=0&&i[n].frame>=t;)n--;for(var r=n;r<i.length;r++){var a=i[r+1];if(a.frame>=t){e.key=r;var s=i[r],f=this._getKeyValue(s.value);if(s.interpolation===we.STEP)return f;var l=this._getKeyValue(a.value),u=s.outTangent!==void 0&&a.inTangent!==void 0,h=a.frame-s.frame,c=(t-s.frame)/h,p=this.getEasingFunction();switch(p!=null&&(c=p.ease(c)),this.dataType){case o.ANIMATIONTYPE_FLOAT:var d=u?this.floatInterpolateFunctionWithTangents(f,s.outTangent*h,l,a.inTangent*h,c):this.floatInterpolateFunction(f,l,c);switch(e.loopMode){case o.ANIMATIONLOOPMODE_CYCLE:case o.ANIMATIONLOOPMODE_CONSTANT:return d;case o.ANIMATIONLOOPMODE_RELATIVE:return e.offsetValue*e.repeatCount+d}break;case o.ANIMATIONTYPE_QUATERNION:var S=u?this.quaternionInterpolateFunctionWithTangents(f,s.outTangent.scale(h),l,a.inTangent.scale(h),c):this.quaternionInterpolateFunction(f,l,c);switch(e.loopMode){case o.ANIMATIONLOOPMODE_CYCLE:case o.ANIMATIONLOOPMODE_CONSTANT:return S;case o.ANIMATIONLOOPMODE_RELATIVE:return S.addInPlace(e.offsetValue.scale(e.repeatCount))}return S;case o.ANIMATIONTYPE_VECTOR3:var _=u?this.vector3InterpolateFunctionWithTangents(f,s.outTangent.scale(h),l,a.inTangent.scale(h),c):this.vector3InterpolateFunction(f,l,c);switch(e.loopMode){case o.ANIMATIONLOOPMODE_CYCLE:case o.ANIMATIONLOOPMODE_CONSTANT:return _;case o.ANIMATIONLOOPMODE_RELATIVE:return _.add(e.offsetValue.scale(e.repeatCount))}case o.ANIMATIONTYPE_VECTOR2:var y=u?this.vector2InterpolateFunctionWithTangents(f,s.outTangent.scale(h),l,a.inTangent.scale(h),c):this.vector2InterpolateFunction(f,l,c);switch(e.loopMode){case o.ANIMATIONLOOPMODE_CYCLE:case o.ANIMATIONLOOPMODE_CONSTANT:return y;case o.ANIMATIONLOOPMODE_RELATIVE:return y.add(e.offsetValue.scale(e.repeatCount))}case o.ANIMATIONTYPE_SIZE:switch(e.loopMode){case o.ANIMATIONLOOPMODE_CYCLE:case o.ANIMATIONLOOPMODE_CONSTANT:return this.sizeInterpolateFunction(f,l,c);case o.ANIMATIONLOOPMODE_RELATIVE:return this.sizeInterpolateFunction(f,l,c).add(e.offsetValue.scale(e.repeatCount))}case o.ANIMATIONTYPE_COLOR3:switch(e.loopMode){case o.ANIMATIONLOOPMODE_CYCLE:case o.ANIMATIONLOOPMODE_CONSTANT:return this.color3InterpolateFunction(f,l,c);case o.ANIMATIONLOOPMODE_RELATIVE:return this.color3InterpolateFunction(f,l,c).add(e.offsetValue.scale(e.repeatCount))}case o.ANIMATIONTYPE_COLOR4:switch(e.loopMode){case o.ANIMATIONLOOPMODE_CYCLE:case o.ANIMATIONLOOPMODE_CONSTANT:return this.color4InterpolateFunction(f,l,c);case o.ANIMATIONLOOPMODE_RELATIVE:return this.color4InterpolateFunction(f,l,c).add(e.offsetValue.scale(e.repeatCount))}case o.ANIMATIONTYPE_MATRIX:switch(e.loopMode){case o.ANIMATIONLOOPMODE_CYCLE:case o.ANIMATIONLOOPMODE_CONSTANT:if(o.AllowMatricesInterpolation)return this.matrixInterpolateFunction(f,l,c,e.workValue);case o.ANIMATIONLOOPMODE_RELATIVE:return f}}break}}return this._getKeyValue(i[i.length-1].value)},o.prototype.matrixInterpolateFunction=function(t,e,i,n){return o.AllowMatrixDecomposeForInterpolation?n?(M.DecomposeLerpToRef(t,e,i,n),n):M.DecomposeLerp(t,e,i):n?(M.LerpToRef(t,e,i,n),n):M.Lerp(t,e,i)},o.prototype.clone=function(){var t=new o(this.name,this.targetPropertyPath.join("."),this.framePerSecond,this.dataType,this.loopMode);if(t.enableBlending=this.enableBlending,t.blendingSpeed=this.blendingSpeed,this._keys&&t.setKeys(this._keys),this._ranges){t._ranges={};for(var e in this._ranges){var i=this._ranges[e];!i||(t._ranges[e]=i.clone())}}return t},o.prototype.setKeys=function(t){this._keys=t.slice(0)},o.prototype.serialize=function(){var t={};t.name=this.name,t.property=this.targetProperty,t.framePerSecond=this.framePerSecond,t.dataType=this.dataType,t.loopBehavior=this.loopMode,t.enableBlending=this.enableBlending,t.blendingSpeed=this.blendingSpeed;var e=this.dataType;t.keys=[];for(var i=this.getKeys(),n=0;n<i.length;n++){var r=i[n],a={};switch(a.frame=r.frame,e){case o.ANIMATIONTYPE_FLOAT:a.values=[r.value],r.inTangent!==void 0&&a.values.push(r.inTangent),r.outTangent!==void 0&&(r.inTangent===void 0&&a.values.push(void 0),a.values.push(r.outTangent));break;case o.ANIMATIONTYPE_QUATERNION:case o.ANIMATIONTYPE_MATRIX:case o.ANIMATIONTYPE_VECTOR3:case o.ANIMATIONTYPE_COLOR3:case o.ANIMATIONTYPE_COLOR4:a.values=r.value.asArray(),r.inTangent!=null&&a.values.push(r.inTangent.asArray()),r.outTangent!=null&&(r.inTangent===void 0&&a.values.push(void 0),a.values.push(r.outTangent.asArray()));break}t.keys.push(a)}t.ranges=[];for(var s in this._ranges){var f=this._ranges[s];if(!!f){var l={};l.name=s,l.from=f.from,l.to=f.to,t.ranges.push(l)}}return t},o._UniversalLerp=function(t,e,i){var n=t.constructor;return n.Lerp?n.Lerp(t,e,i):n.Slerp?n.Slerp(t,e,i):t.toFixed?t*(1-i)+i*e:e},o.Parse=function(t){var e=new o(t.name,t.property,t.framePerSecond,t.dataType,t.loopBehavior),i=t.dataType,n=[],r,a;for(t.enableBlending&&(e.enableBlending=t.enableBlending),t.blendingSpeed&&(e.blendingSpeed=t.blendingSpeed),a=0;a<t.keys.length;a++){var s=t.keys[a],f,l;switch(i){case o.ANIMATIONTYPE_FLOAT:r=s.values[0],s.values.length>=1&&(f=s.values[1]),s.values.length>=2&&(l=s.values[2]);break;case o.ANIMATIONTYPE_QUATERNION:if(r=N.FromArray(s.values),s.values.length>=8){var u=N.FromArray(s.values.slice(4,8));u.equals(N.Zero())||(f=u)}if(s.values.length>=12){var h=N.FromArray(s.values.slice(8,12));h.equals(N.Zero())||(l=h)}break;case o.ANIMATIONTYPE_MATRIX:r=M.FromArray(s.values);break;case o.ANIMATIONTYPE_COLOR3:r=ne.FromArray(s.values);break;case o.ANIMATIONTYPE_COLOR4:r=_e.FromArray(s.values);break;case o.ANIMATIONTYPE_VECTOR3:default:r=I.FromArray(s.values);break}var c={};c.frame=s.frame,c.value=r,f!=null&&(c.inTangent=f),l!=null&&(c.outTangent=l),n.push(c)}if(e.setKeys(n),t.ranges)for(a=0;a<t.ranges.length;a++)r=t.ranges[a],e.createRange(r.name,r.from,r.to);return e},o.AppendSerializedAnimations=function(t,e){Y.AppendSerializedAnimations(t,e)},o.ParseFromFileAsync=function(t,e){var i=this;return new Promise(function(n,r){var a=new Ue;a.addEventListener("readystatechange",function(){if(a.readyState==4)if(a.status==200){var s=JSON.parse(a.responseText);if(s.length){for(var f=new Array,l=0,u=s;l<u.length;l++){var h=u[l];f.push(i.Parse(h))}n(f)}else{var f=i.Parse(s);t&&(f.name=t),n(f)}}else r("Unable to load the animation")}),a.open("GET",e),a.send()})},o.CreateFromSnippetAsync=function(t){var e=this;return new Promise(function(i,n){var r=new Ue;r.addEventListener("readystatechange",function(){if(r.readyState==4)if(r.status==200){var a=JSON.parse(JSON.parse(r.responseText).jsonPayload);if(a.animations){for(var s=JSON.parse(a.animations),f=new Array,l=0,u=s;l<u.length;l++){var h=u[l];f.push(e.Parse(h))}i(f)}else{var s=JSON.parse(a.animation),f=e.Parse(s);f.snippetId=t,i(f)}}else n("Unable to load the snippet "+t)}),r.open("GET",e.SnippetUrl+"/"+t.replace(/#/g,"/")),r.send()})},o.AllowMatricesInterpolation=!1,o.AllowMatrixDecomposeForInterpolation=!0,o.SnippetUrl="https://snippet.babylonjs.com",o.ANIMATIONTYPE_FLOAT=0,o.ANIMATIONTYPE_VECTOR3=1,o.ANIMATIONTYPE_QUATERNION=2,o.ANIMATIONTYPE_MATRIX=3,o.ANIMATIONTYPE_COLOR3=4,o.ANIMATIONTYPE_COLOR4=7,o.ANIMATIONTYPE_VECTOR2=5,o.ANIMATIONTYPE_SIZE=6,o.ANIMATIONLOOPMODE_RELATIVE=0,o.ANIMATIONLOOPMODE_CYCLE=1,o.ANIMATIONLOOPMODE_CONSTANT=2,o}();fe.RegisteredTypes["BABYLON.Animation"]=R;Se._AnimationRangeFactory=function(o,t,e){return new Qe(o,t,e)};var fn=function(){function o(){this._zoomStopsAnimation=!1,this._idleRotationSpeed=.05,this._idleRotationWaitTime=2e3,this._idleRotationSpinupTime=2e3,this._isPointerDown=!1,this._lastFrameTime=null,this._lastInteractionTime=-1/0,this._cameraRotationSpeed=0,this._lastFrameRadius=0}return Object.defineProperty(o.prototype,"name",{get:function(){return"AutoRotation"},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"zoomStopsAnimation",{get:function(){return this._zoomStopsAnimation},set:function(t){this._zoomStopsAnimation=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"idleRotationSpeed",{get:function(){return this._idleRotationSpeed},set:function(t){this._idleRotationSpeed=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"idleRotationWaitTime",{get:function(){return this._idleRotationWaitTime},set:function(t){this._idleRotationWaitTime=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"idleRotationSpinupTime",{get:function(){return this._idleRotationSpinupTime},set:function(t){this._idleRotationSpinupTime=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rotationInProgress",{get:function(){return Math.abs(this._cameraRotationSpeed)>0},enumerable:!1,configurable:!0}),o.prototype.init=function(){},o.prototype.attach=function(t){var e=this;this._attachedCamera=t;var i=this._attachedCamera.getScene();this._onPrePointerObservableObserver=i.onPrePointerObservable.add(function(n){if(n.type===q.POINTERDOWN){e._isPointerDown=!0;return}n.type===q.POINTERUP&&(e._isPointerDown=!1)}),this._onAfterCheckInputsObserver=t.onAfterCheckInputsObservable.add(function(){var n=ye.Now,r=0;e._lastFrameTime!=null&&(r=n-e._lastFrameTime),e._lastFrameTime=n,e._applyUserInteraction();var a=n-e._lastInteractionTime-e._idleRotationWaitTime,s=Math.max(Math.min(a/e._idleRotationSpinupTime,1),0);e._cameraRotationSpeed=e._idleRotationSpeed*s,e._attachedCamera&&(e._attachedCamera.alpha-=e._cameraRotationSpeed*(r/1e3))})},o.prototype.detach=function(){if(!!this._attachedCamera){var t=this._attachedCamera.getScene();this._onPrePointerObservableObserver&&t.onPrePointerObservable.remove(this._onPrePointerObservableObserver),this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver),this._attachedCamera=null}},o.prototype._userIsZooming=function(){return this._attachedCamera?this._attachedCamera.inertialRadiusOffset!==0:!1},o.prototype._shouldAnimationStopForInteraction=function(){if(!this._attachedCamera)return!1;var t=!1;return this._lastFrameRadius===this._attachedCamera.radius&&this._attachedCamera.inertialRadiusOffset!==0&&(t=!0),this._lastFrameRadius=this._attachedCamera.radius,this._zoomStopsAnimation?t:this._userIsZooming()},o.prototype._applyUserInteraction=function(){this._userIsMoving()&&!this._shouldAnimationStopForInteraction()&&(this._lastInteractionTime=ye.Now)},o.prototype._userIsMoving=function(){return this._attachedCamera?this._attachedCamera.inertialAlphaOffset!==0||this._attachedCamera.inertialBetaOffset!==0||this._attachedCamera.inertialRadiusOffset!==0||this._attachedCamera.inertialPanningX!==0||this._attachedCamera.inertialPanningY!==0||this._isPointerDown:!1},o}(),te=function(){function o(){this._easingMode=o.EASINGMODE_EASEIN}return o.prototype.setEasingMode=function(t){var e=Math.min(Math.max(t,0),2);this._easingMode=e},o.prototype.getEasingMode=function(){return this._easingMode},o.prototype.easeInCore=function(t){throw new Error("You must implement this method")},o.prototype.ease=function(t){switch(this._easingMode){case o.EASINGMODE_EASEIN:return this.easeInCore(t);case o.EASINGMODE_EASEOUT:return 1-this.easeInCore(1-t)}return t>=.5?(1-this.easeInCore((1-t)*2))*.5+.5:this.easeInCore(t*2)*.5},o.EASINGMODE_EASEIN=0,o.EASINGMODE_EASEOUT=1,o.EASINGMODE_EASEINOUT=2,o}();(function(o){W(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t.prototype.easeInCore=function(e){return e=Math.max(0,Math.min(1,e)),1-Math.sqrt(1-e*e)},t})(te);var un=function(o){W(t,o);function t(e){e===void 0&&(e=1);var i=o.call(this)||this;return i.amplitude=e,i}return t.prototype.easeInCore=function(e){var i=Math.max(0,this.amplitude);return Math.pow(e,3)-e*i*Math.sin(3.141592653589793*e)},t}(te);(function(o){W(t,o);function t(e,i){e===void 0&&(e=3),i===void 0&&(i=2);var n=o.call(this)||this;return n.bounces=e,n.bounciness=i,n}return t.prototype.easeInCore=function(e){var i=Math.max(0,this.bounces),n=this.bounciness;n<=1&&(n=1.001);var r=Math.pow(n,i),a=1-n,s=(1-r)/a+r*.5,f=e*s,l=Math.log(-f*(1-n)+1)/Math.log(n),u=Math.floor(l),h=u+1,c=(1-Math.pow(n,u))/(a*s),p=(1-Math.pow(n,h))/(a*s),d=(c+p)*.5,S=e-d,_=d-c;return-Math.pow(1/n,i-u)/(_*_)*(S-_)*(S+_)},t})(te);(function(o){W(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t.prototype.easeInCore=function(e){return e*e*e},t})(te);(function(o){W(t,o);function t(e,i){e===void 0&&(e=3),i===void 0&&(i=3);var n=o.call(this)||this;return n.oscillations=e,n.springiness=i,n}return t.prototype.easeInCore=function(e){var i,n=Math.max(0,this.oscillations),r=Math.max(0,this.springiness);return r==0?i=e:i=(Math.exp(r*e)-1)/(Math.exp(r)-1),i*Math.sin((6.283185307179586*n+1.5707963267948966)*e)},t})(te);var hn=function(o){W(t,o);function t(e){e===void 0&&(e=2);var i=o.call(this)||this;return i.exponent=e,i}return t.prototype.easeInCore=function(e){return this.exponent<=0?e:(Math.exp(this.exponent*e)-1)/(Math.exp(this.exponent)-1)},t}(te);(function(o){W(t,o);function t(e){e===void 0&&(e=2);var i=o.call(this)||this;return i.power=e,i}return t.prototype.easeInCore=function(e){var i=Math.max(0,this.power);return Math.pow(e,i)},t})(te);(function(o){W(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t.prototype.easeInCore=function(e){return e*e},t})(te);(function(o){W(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t.prototype.easeInCore=function(e){return e*e*e*e},t})(te);(function(o){W(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t.prototype.easeInCore=function(e){return e*e*e*e*e},t})(te);(function(o){W(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t.prototype.easeInCore=function(e){return 1-Math.sin(1.5707963267948966*(1-e))},t})(te);(function(o){W(t,o);function t(e,i,n,r){e===void 0&&(e=0),i===void 0&&(i=0),n===void 0&&(n=1),r===void 0&&(r=1);var a=o.call(this)||this;return a.x1=e,a.y1=i,a.x2=n,a.y2=r,a}return t.prototype.easeInCore=function(e){return vt.Interpolate(e,this.x1,this.y1,this.x2,this.y2)},t})(te);var cn=function(){function o(){this.transitionDuration=450,this.lowerRadiusTransitionRange=2,this.upperRadiusTransitionRange=-2,this._autoTransitionRange=!1,this._radiusIsAnimating=!1,this._radiusBounceTransition=null,this._animatables=new Array}return Object.defineProperty(o.prototype,"name",{get:function(){return"Bouncing"},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"autoTransitionRange",{get:function(){return this._autoTransitionRange},set:function(t){var e=this;if(this._autoTransitionRange!==t){this._autoTransitionRange=t;var i=this._attachedCamera;!i||(t?this._onMeshTargetChangedObserver=i.onMeshTargetChangedObservable.add(function(n){if(!!n){n.computeWorldMatrix(!0);var r=n.getBoundingInfo().diagonalLength;e.lowerRadiusTransitionRange=r*.05,e.upperRadiusTransitionRange=r*.05}}):this._onMeshTargetChangedObserver&&i.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))}},enumerable:!1,configurable:!0}),o.prototype.init=function(){},o.prototype.attach=function(t){var e=this;this._attachedCamera=t,this._onAfterCheckInputsObserver=t.onAfterCheckInputsObservable.add(function(){!e._attachedCamera||(e._isRadiusAtLimit(e._attachedCamera.lowerRadiusLimit)&&e._applyBoundRadiusAnimation(e.lowerRadiusTransitionRange),e._isRadiusAtLimit(e._attachedCamera.upperRadiusLimit)&&e._applyBoundRadiusAnimation(e.upperRadiusTransitionRange))})},o.prototype.detach=function(){!this._attachedCamera||(this._onAfterCheckInputsObserver&&this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver),this._onMeshTargetChangedObserver&&this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver),this._attachedCamera=null)},o.prototype._isRadiusAtLimit=function(t){return this._attachedCamera?this._attachedCamera.radius===t&&!this._radiusIsAnimating:!1},o.prototype._applyBoundRadiusAnimation=function(t){var e=this;if(!!this._attachedCamera){this._radiusBounceTransition||(o.EasingFunction.setEasingMode(o.EasingMode),this._radiusBounceTransition=R.CreateAnimation("radius",R.ANIMATIONTYPE_FLOAT,60,o.EasingFunction)),this._cachedWheelPrecision=this._attachedCamera.wheelPrecision,this._attachedCamera.wheelPrecision=1/0,this._attachedCamera.inertialRadiusOffset=0,this.stopAllAnimations(),this._radiusIsAnimating=!0;var i=R.TransitionTo("radius",this._attachedCamera.radius+t,this._attachedCamera,this._attachedCamera.getScene(),60,this._radiusBounceTransition,this.transitionDuration,function(){return e._clearAnimationLocks()});i&&this._animatables.push(i)}},o.prototype._clearAnimationLocks=function(){this._radiusIsAnimating=!1,this._attachedCamera&&(this._attachedCamera.wheelPrecision=this._cachedWheelPrecision)},o.prototype.stopAllAnimations=function(){for(this._attachedCamera&&(this._attachedCamera.animations=[]);this._animatables.length;)this._animatables[0].onAnimationEnd=null,this._animatables[0].stop(),this._animatables.shift()},o.EasingFunction=new un(.3),o.EasingMode=te.EASINGMODE_EASEOUT,o}(),dn=function(){function o(){this._mode=o.FitFrustumSidesMode,this._radiusScale=1,this._positionScale=.5,this._defaultElevation=.3,this._elevationReturnTime=1500,this._elevationReturnWaitTime=1e3,this._zoomStopsAnimation=!1,this._framingTime=1500,this.autoCorrectCameraLimitsAndSensibility=!0,this._isPointerDown=!1,this._lastInteractionTime=-1/0,this._animatables=new Array,this._betaIsAnimating=!1}return Object.defineProperty(o.prototype,"name",{get:function(){return"Framing"},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"mode",{get:function(){return this._mode},set:function(t){this._mode=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"radiusScale",{get:function(){return this._radiusScale},set:function(t){this._radiusScale=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"positionScale",{get:function(){return this._positionScale},set:function(t){this._positionScale=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"defaultElevation",{get:function(){return this._defaultElevation},set:function(t){this._defaultElevation=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"elevationReturnTime",{get:function(){return this._elevationReturnTime},set:function(t){this._elevationReturnTime=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"elevationReturnWaitTime",{get:function(){return this._elevationReturnWaitTime},set:function(t){this._elevationReturnWaitTime=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"zoomStopsAnimation",{get:function(){return this._zoomStopsAnimation},set:function(t){this._zoomStopsAnimation=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"framingTime",{get:function(){return this._framingTime},set:function(t){this._framingTime=t},enumerable:!1,configurable:!0}),o.prototype.init=function(){},o.prototype.attach=function(t){var e=this;this._attachedCamera=t;var i=this._attachedCamera.getScene();o.EasingFunction.setEasingMode(o.EasingMode),this._onPrePointerObservableObserver=i.onPrePointerObservable.add(function(n){if(n.type===q.POINTERDOWN){e._isPointerDown=!0;return}n.type===q.POINTERUP&&(e._isPointerDown=!1)}),this._onMeshTargetChangedObserver=t.onMeshTargetChangedObservable.add(function(n){n&&e.zoomOnMesh(n)}),this._onAfterCheckInputsObserver=t.onAfterCheckInputsObservable.add(function(){e._applyUserInteraction(),e._maintainCameraAboveGround()})},o.prototype.detach=function(){if(!!this._attachedCamera){var t=this._attachedCamera.getScene();this._onPrePointerObservableObserver&&t.onPrePointerObservable.remove(this._onPrePointerObservableObserver),this._onAfterCheckInputsObserver&&this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver),this._onMeshTargetChangedObserver&&this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver),this._attachedCamera=null}},o.prototype.zoomOnMesh=function(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=null),t.computeWorldMatrix(!0);var n=t.getBoundingInfo().boundingBox;this.zoomOnBoundingInfo(n.minimumWorld,n.maximumWorld,e,i)},o.prototype.zoomOnMeshHierarchy=function(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=null),t.computeWorldMatrix(!0);var n=t.getHierarchyBoundingVectors(!0);this.zoomOnBoundingInfo(n.min,n.max,e,i)},o.prototype.zoomOnMeshesHierarchy=function(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=null);for(var n=new I(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),r=new I(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),a=0;a<t.length;a++){var s=t[a].getHierarchyBoundingVectors(!0);I.CheckExtends(s.min,n,r),I.CheckExtends(s.max,n,r)}this.zoomOnBoundingInfo(n,r,e,i)},o.prototype.zoomOnBoundingInfo=function(t,e,i,n){var r=this;i===void 0&&(i=!1),n===void 0&&(n=null);var a;if(!!this._attachedCamera){var s=t.y,f=e.y,l=s+(f-s)*this._positionScale,u=e.subtract(t).scale(.5);if(i)a=new I(0,l,0);else{var h=t.add(u);a=new I(h.x,l,h.z)}this._vectorTransition||(this._vectorTransition=R.CreateAnimation("target",R.ANIMATIONTYPE_VECTOR3,60,o.EasingFunction)),this._betaIsAnimating=!0;var c=R.TransitionTo("target",a,this._attachedCamera,this._attachedCamera.getScene(),60,this._vectorTransition,this._framingTime);c&&this._animatables.push(c);var p=0;if(this._mode===o.FitFrustumSidesMode){var d=this._calculateLowerRadiusFromModelBoundingSphere(t,e);this.autoCorrectCameraLimitsAndSensibility&&(this._attachedCamera.lowerRadiusLimit=u.length()+this._attachedCamera.minZ),p=d}else this._mode===o.IgnoreBoundsSizeMode&&(p=this._calculateLowerRadiusFromModelBoundingSphere(t,e),this.autoCorrectCameraLimitsAndSensibility&&this._attachedCamera.lowerRadiusLimit===null&&(this._attachedCamera.lowerRadiusLimit=this._attachedCamera.minZ));if(this.autoCorrectCameraLimitsAndSensibility){var S=e.subtract(t).length();this._attachedCamera.panningSensibility=5e3/S,this._attachedCamera.wheelPrecision=100/p}this._radiusTransition||(this._radiusTransition=R.CreateAnimation("radius",R.ANIMATIONTYPE_FLOAT,60,o.EasingFunction)),c=R.TransitionTo("radius",p,this._attachedCamera,this._attachedCamera.getScene(),60,this._radiusTransition,this._framingTime,function(){r.stopAllAnimations(),n&&n(),r._attachedCamera&&r._attachedCamera.useInputToRestoreState&&r._attachedCamera.storeState()}),c&&this._animatables.push(c)}},o.prototype._calculateLowerRadiusFromModelBoundingSphere=function(t,e){var i=e.subtract(t),n=i.length(),r=this._getFrustumSlope(),a=n*.5,s=a*this._radiusScale,f=s*Math.sqrt(1+1/(r.x*r.x)),l=s*Math.sqrt(1+1/(r.y*r.y)),u=Math.max(f,l),h=this._attachedCamera;return h?(h.lowerRadiusLimit&&this._mode===o.IgnoreBoundsSizeMode&&(u=u<h.lowerRadiusLimit?h.lowerRadiusLimit:u),h.upperRadiusLimit&&(u=u>h.upperRadiusLimit?h.upperRadiusLimit:u),u):0},o.prototype._maintainCameraAboveGround=function(){var t=this;if(!(this._elevationReturnTime<0)){var e=ye.Now-this._lastInteractionTime,i=Math.PI*.5-this._defaultElevation,n=Math.PI*.5;if(this._attachedCamera&&!this._betaIsAnimating&&this._attachedCamera.beta>n&&e>=this._elevationReturnWaitTime){this._betaIsAnimating=!0,this.stopAllAnimations(),this._betaTransition||(this._betaTransition=R.CreateAnimation("beta",R.ANIMATIONTYPE_FLOAT,60,o.EasingFunction));var r=R.TransitionTo("beta",i,this._attachedCamera,this._attachedCamera.getScene(),60,this._betaTransition,this._elevationReturnTime,function(){t._clearAnimationLocks(),t.stopAllAnimations()});r&&this._animatables.push(r)}}},o.prototype._getFrustumSlope=function(){var t=this._attachedCamera;if(!t)return J.Zero();var e=t.getScene().getEngine(),i=e.getAspectRatio(t),n=Math.tan(t.fov/2),r=n*i;return new J(r,n)},o.prototype._clearAnimationLocks=function(){this._betaIsAnimating=!1},o.prototype._applyUserInteraction=function(){this.isUserIsMoving&&(this._lastInteractionTime=ye.Now,this.stopAllAnimations(),this._clearAnimationLocks())},o.prototype.stopAllAnimations=function(){for(this._attachedCamera&&(this._attachedCamera.animations=[]);this._animatables.length;)this._animatables[0]&&(this._animatables[0].onAnimationEnd=null,this._animatables[0].stop()),this._animatables.shift()},Object.defineProperty(o.prototype,"isUserIsMoving",{get:function(){return this._attachedCamera?this._attachedCamera.inertialAlphaOffset!==0||this._attachedCamera.inertialBetaOffset!==0||this._attachedCamera.inertialRadiusOffset!==0||this._attachedCamera.inertialPanningX!==0||this._attachedCamera.inertialPanningY!==0||this._isPointerDown:!1},enumerable:!1,configurable:!0}),o.EasingFunction=new hn,o.EasingMode=te.EASINGMODE_EASEINOUT,o.IgnoreBoundsSizeMode=0,o.FitFrustumSidesMode=1,o}(),pn=function(o){W(t,o);function t(e,i,n,r){r===void 0&&(r=!0);var a=o.call(this,e,i,n,r)||this;return a._tmpUpVector=I.Zero(),a._tmpTargetVector=I.Zero(),a.cameraDirection=new I(0,0,0),a.cameraRotation=new J(0,0),a.ignoreParentScaling=!1,a.updateUpVectorFromRotation=!1,a._tmpQuaternion=new N,a.rotation=new I(0,0,0),a.speed=2,a.noRotationConstraint=!1,a.invertRotation=!1,a.inverseRotationSpeed=.2,a.lockedTarget=null,a._currentTarget=I.Zero(),a._initialFocalDistance=1,a._viewMatrix=M.Zero(),a._camMatrix=M.Zero(),a._cameraTransformMatrix=M.Zero(),a._cameraRotationMatrix=M.Zero(),a._referencePoint=new I(0,0,1),a._transformedReferencePoint=I.Zero(),a._defaultUp=I.Up(),a._cachedRotationZ=0,a._cachedQuaternionRotationZ=0,a}return t.prototype.getFrontPosition=function(e){this.getWorldMatrix();var i=this.getTarget().subtract(this.position);return i.normalize(),i.scaleInPlace(e),this.globalPosition.add(i)},t.prototype._getLockedTargetPosition=function(){return this.lockedTarget?(this.lockedTarget.absolutePosition&&this.lockedTarget.computeWorldMatrix(),this.lockedTarget.absolutePosition||this.lockedTarget):null},t.prototype.storeState=function(){return this._storedPosition=this.position.clone(),this._storedRotation=this.rotation.clone(),this.rotationQuaternion&&(this._storedRotationQuaternion=this.rotationQuaternion.clone()),o.prototype.storeState.call(this)},t.prototype._restoreStateValues=function(){return o.prototype._restoreStateValues.call(this)?(this.position=this._storedPosition.clone(),this.rotation=this._storedRotation.clone(),this.rotationQuaternion&&(this.rotationQuaternion=this._storedRotationQuaternion.clone()),this.cameraDirection.copyFromFloats(0,0,0),this.cameraRotation.copyFromFloats(0,0),!0):!1},t.prototype._initCache=function(){o.prototype._initCache.call(this),this._cache.lockedTarget=new I(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotation=new I(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotationQuaternion=new N(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},t.prototype._updateCache=function(e){e||o.prototype._updateCache.call(this);var i=this._getLockedTargetPosition();i?this._cache.lockedTarget?this._cache.lockedTarget.copyFrom(i):this._cache.lockedTarget=i.clone():this._cache.lockedTarget=null,this._cache.rotation.copyFrom(this.rotation),this.rotationQuaternion&&this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion)},t.prototype._isSynchronizedViewMatrix=function(){if(!o.prototype._isSynchronizedViewMatrix.call(this))return!1;var e=this._getLockedTargetPosition();return(this._cache.lockedTarget?this._cache.lockedTarget.equals(e):!e)&&(this.rotationQuaternion?this.rotationQuaternion.equals(this._cache.rotationQuaternion):this._cache.rotation.equals(this.rotation))},t.prototype._computeLocalCameraSpeed=function(){var e=this.getEngine();return this.speed*Math.sqrt(e.getDeltaTime()/(e.getFps()*100))},t.prototype.setTarget=function(e){this.upVector.normalize(),this._initialFocalDistance=e.subtract(this.position).length(),this.position.z===e.z&&(this.position.z+=oe),this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance),M.LookAtLHToRef(this.position,e,this._defaultUp,this._camMatrix),this._camMatrix.invert(),this.rotation.x=Math.atan(this._camMatrix.m[6]/this._camMatrix.m[10]);var i=e.subtract(this.position);i.x>=0?this.rotation.y=-Math.atan(i.z/i.x)+Math.PI/2:this.rotation.y=-Math.atan(i.z/i.x)-Math.PI/2,this.rotation.z=0,isNaN(this.rotation.x)&&(this.rotation.x=0),isNaN(this.rotation.y)&&(this.rotation.y=0),isNaN(this.rotation.z)&&(this.rotation.z=0),this.rotationQuaternion&&N.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)},Object.defineProperty(t.prototype,"target",{get:function(){return this.getTarget()},set:function(e){this.setTarget(e)},enumerable:!1,configurable:!0}),t.prototype.getTarget=function(){return this._currentTarget},t.prototype._decideIfNeedsToMove=function(){return Math.abs(this.cameraDirection.x)>0||Math.abs(this.cameraDirection.y)>0||Math.abs(this.cameraDirection.z)>0},t.prototype._updatePosition=function(){if(this.parent){this.parent.getWorldMatrix().invertToRef(L.Matrix[0]),I.TransformNormalToRef(this.cameraDirection,L.Matrix[0],L.Vector3[0]),this.position.addInPlace(L.Vector3[0]);return}this.position.addInPlace(this.cameraDirection)},t.prototype._checkInputs=function(){var e=this.invertRotation?-this.inverseRotationSpeed:1,i=this._decideIfNeedsToMove(),n=Math.abs(this.cameraRotation.x)>0||Math.abs(this.cameraRotation.y)>0;if(i&&this._updatePosition(),n){if(this.rotationQuaternion&&this.rotationQuaternion.toEulerAnglesToRef(this.rotation),this.rotation.x+=this.cameraRotation.x*e,this.rotation.y+=this.cameraRotation.y*e,!this.noRotationConstraint){var r=1.570796;this.rotation.x>r&&(this.rotation.x=r),this.rotation.x<-r&&(this.rotation.x=-r)}if(this.rotationQuaternion){var a=this.rotation.lengthSquared();a&&N.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)}}i&&(Math.abs(this.cameraDirection.x)<this.speed*oe&&(this.cameraDirection.x=0),Math.abs(this.cameraDirection.y)<this.speed*oe&&(this.cameraDirection.y=0),Math.abs(this.cameraDirection.z)<this.speed*oe&&(this.cameraDirection.z=0),this.cameraDirection.scaleInPlace(this.inertia)),n&&(Math.abs(this.cameraRotation.x)<this.speed*oe&&(this.cameraRotation.x=0),Math.abs(this.cameraRotation.y)<this.speed*oe&&(this.cameraRotation.y=0),this.cameraRotation.scaleInPlace(this.inertia)),o.prototype._checkInputs.call(this)},t.prototype._updateCameraRotationMatrix=function(){this.rotationQuaternion?this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix):M.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this._cameraRotationMatrix)},t.prototype._rotateUpVectorWithCameraRotationMatrix=function(){return I.TransformNormalToRef(this._defaultUp,this._cameraRotationMatrix,this.upVector),this},t.prototype._getViewMatrix=function(){return this.lockedTarget&&this.setTarget(this._getLockedTargetPosition()),this._updateCameraRotationMatrix(),this.rotationQuaternion&&this._cachedQuaternionRotationZ!=this.rotationQuaternion.z?(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedQuaternionRotationZ=this.rotationQuaternion.z):this._cachedRotationZ!=this.rotation.z&&(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedRotationZ=this.rotation.z),I.TransformCoordinatesToRef(this._referencePoint,this._cameraRotationMatrix,this._transformedReferencePoint),this.position.addToRef(this._transformedReferencePoint,this._currentTarget),this.updateUpVectorFromRotation&&(this.rotationQuaternion?Ve.Y.rotateByQuaternionToRef(this.rotationQuaternion,this.upVector):(N.FromEulerVectorToRef(this.rotation,this._tmpQuaternion),Ve.Y.rotateByQuaternionToRef(this._tmpQuaternion,this.upVector))),this._computeViewMatrix(this.position,this._currentTarget,this.upVector),this._viewMatrix},t.prototype._computeViewMatrix=function(e,i,n){if(this.ignoreParentScaling){if(this.parent){var r=this.parent.getWorldMatrix();I.TransformCoordinatesToRef(e,r,this._globalPosition),I.TransformCoordinatesToRef(i,r,this._tmpTargetVector),I.TransformNormalToRef(n,r,this._tmpUpVector),this._markSyncedWithParent()}else this._globalPosition.copyFrom(e),this._tmpTargetVector.copyFrom(i),this._tmpUpVector.copyFrom(n);this.getScene().useRightHandedSystem?M.LookAtRHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix):M.LookAtLHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix);return}if(this.getScene().useRightHandedSystem?M.LookAtRHToRef(e,i,n,this._viewMatrix):M.LookAtLHToRef(e,i,n,this._viewMatrix),this.parent){var r=this.parent.getWorldMatrix();this._viewMatrix.invert(),this._viewMatrix.multiplyToRef(r,this._viewMatrix),this._viewMatrix.getTranslationToRef(this._globalPosition),this._viewMatrix.invert(),this._markSyncedWithParent()}else this._globalPosition.copyFrom(e)},t.prototype.createRigCamera=function(e,i){if(this.cameraRigMode!==X.RIG_MODE_NONE){var n=new t(e,this.position.clone(),this.getScene());return n.isRigCamera=!0,n.rigParent=this,(this.cameraRigMode===X.RIG_MODE_VR||this.cameraRigMode===X.RIG_MODE_WEBVR)&&(this.rotationQuaternion||(this.rotationQuaternion=new N),n._cameraRigParams={},n.rotationQuaternion=new N),n}return null},t.prototype._updateRigCameras=function(){var e=this._rigCameras[0],i=this._rigCameras[1];switch(this.computeWorldMatrix(),this.cameraRigMode){case X.RIG_MODE_STEREOSCOPIC_ANAGLYPH:case X.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:case X.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:case X.RIG_MODE_STEREOSCOPIC_OVERUNDER:case X.RIG_MODE_STEREOSCOPIC_INTERLACED:var n=this.cameraRigMode===X.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?1:-1,r=this.cameraRigMode===X.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?-1:1;this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*n,e),this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*r,i);break;case X.RIG_MODE_VR:e.rotationQuaternion?(e.rotationQuaternion.copyFrom(this.rotationQuaternion),i.rotationQuaternion.copyFrom(this.rotationQuaternion)):(e.rotation.copyFrom(this.rotation),i.rotation.copyFrom(this.rotation)),e.position.copyFrom(this.position),i.position.copyFrom(this.position);break}o.prototype._updateRigCameras.call(this)},t.prototype._getRigCamPositionAndTarget=function(e,i){var n=this.getTarget();n.subtractToRef(this.position,t._TargetFocalPoint),t._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);var r=t._TargetFocalPoint.addInPlace(this.position);M.TranslationToRef(-r.x,-r.y,-r.z,t._TargetTransformMatrix),t._TargetTransformMatrix.multiplyToRef(M.RotationAxis(i.upVector,e),t._RigCamTransformMatrix),M.TranslationToRef(r.x,r.y,r.z,t._TargetTransformMatrix),t._RigCamTransformMatrix.multiplyToRef(t._TargetTransformMatrix,t._RigCamTransformMatrix),I.TransformCoordinatesToRef(this.position,t._RigCamTransformMatrix,i.position),i.setTarget(r)},t.prototype.getClassName=function(){return"TargetCamera"},t._RigCamTransformMatrix=new M,t._TargetTransformMatrix=new M,t._TargetFocalPoint=new I,g([xe()],t.prototype,"rotation",void 0),g([E()],t.prototype,"speed",void 0),g([ct("lockedTargetId")],t.prototype,"lockedTarget",void 0),t}(X),Te={},vn=function(){function o(t){this.attachedToElement=!1,this.attached={},this.camera=t,this.checkInputs=function(){}}return o.prototype.add=function(t){var e=t.getSimpleName();if(this.attached[e]){re.Warn("camera input of type "+e+" already exists on camera");return}this.attached[e]=t,t.camera=this.camera,t.checkInputs&&(this.checkInputs=this._addCheckInputs(t.checkInputs.bind(t))),this.attachedToElement&&t.attachControl()},o.prototype.remove=function(t){for(var e in this.attached){var i=this.attached[e];i===t&&(i.detachControl(),i.camera=null,delete this.attached[e],this.rebuildInputCheck())}},o.prototype.removeByType=function(t){for(var e in this.attached){var i=this.attached[e];i.getClassName()===t&&(i.detachControl(),i.camera=null,delete this.attached[e],this.rebuildInputCheck())}},o.prototype._addCheckInputs=function(t){var e=this.checkInputs;return function(){e(),t()}},o.prototype.attachInput=function(t){this.attachedToElement&&t.attachControl(this.noPreventDefault)},o.prototype.attachElement=function(t){if(t===void 0&&(t=!1),!this.attachedToElement){t=X.ForceAttachControlToAlwaysPreventDefault?!1:t,this.attachedToElement=!0,this.noPreventDefault=t;for(var e in this.attached)this.attached[e].attachControl(t)}},o.prototype.detachElement=function(t){t===void 0&&(t=!1);for(var e in this.attached)this.attached[e].detachControl(),t&&(this.attached[e].camera=null);this.attachedToElement=!1},o.prototype.rebuildInputCheck=function(){this.checkInputs=function(){};for(var t in this.attached){var e=this.attached[t];e.checkInputs&&(this.checkInputs=this._addCheckInputs(e.checkInputs.bind(e)))}},o.prototype.clear=function(){this.attachedToElement&&this.detachElement(!0),this.attached={},this.attachedToElement=!1,this.checkInputs=function(){}},o.prototype.serialize=function(t){var e={};for(var i in this.attached){var n=this.attached[i],r=Y.Serialize(n);e[n.getClassName()]=r}t.inputsmgr=e},o.prototype.parse=function(t){var e=t.inputsmgr;if(e){this.clear();for(var i in e){var n=Te[i];if(n){var r=e[i],a=Y.Parse(function(){return new n},r,null);this.add(a)}}}else for(var i in this.attached){var n=Te[this.attached[i].getClassName()];if(n){var a=Y.Parse(function(){return new n},t,null);this.remove(this.attached[i]),this.add(a)}}},o}(),mn=function(){function o(){this.buttons=[0,1,2]}return o.prototype.attachControl=function(t){var e=this;t=ee.BackCompatCameraNoPreventDefault(arguments);var i=this.camera.getEngine(),n=i.getInputElement(),r=0,a=null;this.pointA=null,this.pointB=null,this._altKey=!1,this._ctrlKey=!1,this._metaKey=!1,this._shiftKey=!1,this._buttonsPressed=0,this._pointerInput=function(f,l){var u=f.event,h=u.pointerType==="touch";if(!i.isInVRExclusivePointerMode&&!(f.type!==q.POINTERMOVE&&e.buttons.indexOf(u.button)===-1)){var c=u.srcElement||u.target;if(e._altKey=u.altKey,e._ctrlKey=u.ctrlKey,e._metaKey=u.metaKey,e._shiftKey=u.shiftKey,e._buttonsPressed=u.buttons,i.isPointerLock){var p=u.movementX||u.mozMovementX||u.webkitMovementX||u.msMovementX||0,d=u.movementY||u.mozMovementY||u.webkitMovementY||u.msMovementY||0;e.onTouch(null,p,d),e.pointA=null,e.pointB=null}else if(f.type===q.POINTERDOWN&&c){try{c.setPointerCapture(u.pointerId)}catch{}e.pointA===null?e.pointA={x:u.clientX,y:u.clientY,pointerId:u.pointerId,type:u.pointerType}:e.pointB===null&&(e.pointB={x:u.clientX,y:u.clientY,pointerId:u.pointerId,type:u.pointerType}),e.onButtonDown(u),t||(u.preventDefault(),n&&n.focus())}else if(f.type===q.POINTERDOUBLETAP)e.onDoubleTap(u.pointerType);else if(f.type===q.POINTERUP&&c){try{c.releasePointerCapture(u.pointerId)}catch{}h||(e.pointB=null),i._badOS?e.pointA=e.pointB=null:e.pointB&&e.pointA&&e.pointA.pointerId==u.pointerId?(e.pointA=e.pointB,e.pointB=null):e.pointA&&e.pointB&&e.pointB.pointerId==u.pointerId?e.pointB=null:e.pointA=e.pointB=null,(r!==0||a)&&(e.onMultiTouch(e.pointA,e.pointB,r,0,a,null),r=0,a=null),e.onButtonUp(u),t||u.preventDefault()}else if(f.type===q.POINTERMOVE){if(t||u.preventDefault(),e.pointA&&e.pointB===null){var p=u.clientX-e.pointA.x,d=u.clientY-e.pointA.y;e.onTouch(e.pointA,p,d),e.pointA.x=u.clientX,e.pointA.y=u.clientY}else if(e.pointA&&e.pointB){var S=e.pointA.pointerId===u.pointerId?e.pointA:e.pointB;S.x=u.clientX,S.y=u.clientY;var _=e.pointA.x-e.pointB.x,y=e.pointA.y-e.pointB.y,m=_*_+y*y,T={x:(e.pointA.x+e.pointB.x)/2,y:(e.pointA.y+e.pointB.y)/2,pointerId:u.pointerId,type:f.type};e.onMultiTouch(e.pointA,e.pointB,r,m,a,T),a=T,r=m}}}},this._observer=this.camera.getScene().onPointerObservable.add(this._pointerInput,q.POINTERDOWN|q.POINTERUP|q.POINTERMOVE),this._onLostFocus=function(){e.pointA=e.pointB=null,r=0,a=null,e.onLostFocus()},n&&n.addEventListener("contextmenu",this.onContextMenu.bind(this),!1);var s=this.camera.getScene().getEngine().getHostWindow();s&&ee.RegisterTopRootEvents(s,[{name:"blur",handler:this._onLostFocus}])},o.prototype.detachControl=function(t){if(this._onLostFocus){var e=this.camera.getScene().getEngine().getHostWindow();e&&ee.UnregisterTopRootEvents(e,[{name:"blur",handler:this._onLostFocus}])}if(this._observer){if(this.camera.getScene().onPointerObservable.remove(this._observer),this._observer=null,this.onContextMenu){var i=this.camera.getScene().getEngine().getInputElement();i&&i.removeEventListener("contextmenu",this.onContextMenu)}this._onLostFocus=null}this._altKey=!1,this._ctrlKey=!1,this._metaKey=!1,this._shiftKey=!1,this._buttonsPressed=0},o.prototype.getClassName=function(){return"BaseCameraPointersInput"},o.prototype.getSimpleName=function(){return"pointers"},o.prototype.onDoubleTap=function(t){},o.prototype.onTouch=function(t,e,i){},o.prototype.onMultiTouch=function(t,e,i,n,r,a){},o.prototype.onContextMenu=function(t){t.preventDefault()},o.prototype.onButtonDown=function(t){},o.prototype.onButtonUp=function(t){},o.prototype.onLostFocus=function(){},g([E()],o.prototype,"buttons",void 0),o}(),$e=function(o){W(t,o);function t(){var e=o!==null&&o.apply(this,arguments)||this;return e.buttons=[0,1,2],e.angularSensibilityX=1e3,e.angularSensibilityY=1e3,e.pinchPrecision=12,e.pinchDeltaPercentage=0,e.useNaturalPinchZoom=!1,e.panningSensibility=1e3,e.multiTouchPanning=!0,e.multiTouchPanAndZoom=!0,e.pinchInwards=!0,e._isPanClick=!1,e._twoFingerActivityCount=0,e._isPinching=!1,e}return t.prototype.getClassName=function(){return"ArcRotateCameraPointersInput"},t.prototype.onTouch=function(e,i,n){this.panningSensibility!==0&&(this._ctrlKey&&this.camera._useCtrlForPanning||this._isPanClick)?(this.camera.inertialPanningX+=-i/this.panningSensibility,this.camera.inertialPanningY+=n/this.panningSensibility):(this.camera.inertialAlphaOffset-=i/this.angularSensibilityX,this.camera.inertialBetaOffset-=n/this.angularSensibilityY)},t.prototype.onDoubleTap=function(e){this.camera.useInputToRestoreState&&this.camera.restoreState()},t.prototype.onMultiTouch=function(e,i,n,r,a,s){if(!(n===0&&a===null)&&!(r===0&&s===null)){var f=this.pinchInwards?1:-1;if(this.multiTouchPanAndZoom){if(this.useNaturalPinchZoom?this.camera.radius=this.camera.radius*Math.sqrt(n)/Math.sqrt(r):this.pinchDeltaPercentage?this.camera.inertialRadiusOffset+=(r-n)*.001*this.camera.radius*this.pinchDeltaPercentage:this.camera.inertialRadiusOffset+=(r-n)/(this.pinchPrecision*f*(this.angularSensibilityX+this.angularSensibilityY)/2),this.panningSensibility!==0&&a&&s){var l=s.x-a.x,u=s.y-a.y;this.camera.inertialPanningX+=-l/this.panningSensibility,this.camera.inertialPanningY+=u/this.panningSensibility}}else{this._twoFingerActivityCount++;var h=Math.sqrt(n),c=Math.sqrt(r);if(this._isPinching||this._twoFingerActivityCount<20&&Math.abs(c-h)>this.camera.pinchToPanMaxDistance)this.pinchDeltaPercentage?this.camera.inertialRadiusOffset+=(r-n)*.001*this.camera.radius*this.pinchDeltaPercentage:this.camera.inertialRadiusOffset+=(r-n)/(this.pinchPrecision*f*(this.angularSensibilityX+this.angularSensibilityY)/2),this._isPinching=!0;else if(this.panningSensibility!==0&&this.multiTouchPanning&&s&&a){var l=s.x-a.x,u=s.y-a.y;this.camera.inertialPanningX+=-l/this.panningSensibility,this.camera.inertialPanningY+=u/this.panningSensibility}}}},t.prototype.onButtonDown=function(e){this._isPanClick=e.button===this.camera._panningMouseButton},t.prototype.onButtonUp=function(e){this._twoFingerActivityCount=0,this._isPinching=!1},t.prototype.onLostFocus=function(){this._isPanClick=!1,this._twoFingerActivityCount=0,this._isPinching=!1},g([E()],t.prototype,"buttons",void 0),g([E()],t.prototype,"angularSensibilityX",void 0),g([E()],t.prototype,"angularSensibilityY",void 0),g([E()],t.prototype,"pinchPrecision",void 0),g([E()],t.prototype,"pinchDeltaPercentage",void 0),g([E()],t.prototype,"useNaturalPinchZoom",void 0),g([E()],t.prototype,"panningSensibility",void 0),g([E()],t.prototype,"multiTouchPanning",void 0),g([E()],t.prototype,"multiTouchPanAndZoom",void 0),t}(mn);Te.ArcRotateCameraPointersInput=$e;var Ze=function(){function o(){this.keysUp=[38],this.keysDown=[40],this.keysLeft=[37],this.keysRight=[39],this.keysReset=[220],this.panningSensibility=50,this.zoomingSensibility=25,this.useAltToZoom=!0,this.angularSpeed=.01,this._keys=new Array}return o.prototype.attachControl=function(t){var e=this;t=ee.BackCompatCameraNoPreventDefault(arguments),!this._onCanvasBlurObserver&&(this._scene=this.camera.getScene(),this._engine=this._scene.getEngine(),this._onCanvasBlurObserver=this._engine.onCanvasBlurObservable.add(function(){e._keys=[]}),this._onKeyboardObserver=this._scene.onKeyboardObservable.add(function(i){var n=i.event;if(!n.metaKey){if(i.type===dt.KEYDOWN){if(e._ctrlPressed=n.ctrlKey,e._altPressed=n.altKey,e.keysUp.indexOf(n.keyCode)!==-1||e.keysDown.indexOf(n.keyCode)!==-1||e.keysLeft.indexOf(n.keyCode)!==-1||e.keysRight.indexOf(n.keyCode)!==-1||e.keysReset.indexOf(n.keyCode)!==-1){var r=e._keys.indexOf(n.keyCode);r===-1&&e._keys.push(n.keyCode),n.preventDefault&&(t||n.preventDefault())}}else if(e.keysUp.indexOf(n.keyCode)!==-1||e.keysDown.indexOf(n.keyCode)!==-1||e.keysLeft.indexOf(n.keyCode)!==-1||e.keysRight.indexOf(n.keyCode)!==-1||e.keysReset.indexOf(n.keyCode)!==-1){var r=e._keys.indexOf(n.keyCode);r>=0&&e._keys.splice(r,1),n.preventDefault&&(t||n.preventDefault())}}}))},o.prototype.detachControl=function(t){this._scene&&(this._onKeyboardObserver&&this._scene.onKeyboardObservable.remove(this._onKeyboardObserver),this._onCanvasBlurObserver&&this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver),this._onKeyboardObserver=null,this._onCanvasBlurObserver=null),this._keys=[]},o.prototype.checkInputs=function(){if(this._onKeyboardObserver)for(var t=this.camera,e=0;e<this._keys.length;e++){var i=this._keys[e];this.keysLeft.indexOf(i)!==-1?this._ctrlPressed&&this.camera._useCtrlForPanning?t.inertialPanningX-=1/this.panningSensibility:t.inertialAlphaOffset-=this.angularSpeed:this.keysUp.indexOf(i)!==-1?this._ctrlPressed&&this.camera._useCtrlForPanning?t.inertialPanningY+=1/this.panningSensibility:this._altPressed&&this.useAltToZoom?t.inertialRadiusOffset+=1/this.zoomingSensibility:t.inertialBetaOffset-=this.angularSpeed:this.keysRight.indexOf(i)!==-1?this._ctrlPressed&&this.camera._useCtrlForPanning?t.inertialPanningX+=1/this.panningSensibility:t.inertialAlphaOffset+=this.angularSpeed:this.keysDown.indexOf(i)!==-1?this._ctrlPressed&&this.camera._useCtrlForPanning?t.inertialPanningY-=1/this.panningSensibility:this._altPressed&&this.useAltToZoom?t.inertialRadiusOffset-=1/this.zoomingSensibility:t.inertialBetaOffset+=this.angularSpeed:this.keysReset.indexOf(i)!==-1&&t.useInputToRestoreState&&t.restoreState()}},o.prototype.getClassName=function(){return"ArcRotateCameraKeyboardMoveInput"},o.prototype.getSimpleName=function(){return"keyboard"},g([E()],o.prototype,"keysUp",void 0),g([E()],o.prototype,"keysDown",void 0),g([E()],o.prototype,"keysLeft",void 0),g([E()],o.prototype,"keysRight",void 0),g([E()],o.prototype,"keysReset",void 0),g([E()],o.prototype,"panningSensibility",void 0),g([E()],o.prototype,"zoomingSensibility",void 0),g([E()],o.prototype,"useAltToZoom",void 0),g([E()],o.prototype,"angularSpeed",void 0),o}();Te.ArcRotateCameraKeyboardMoveInput=Ze;var qe=function(){function o(){this.wheelPrecision=3,this.wheelDeltaPercentage=0}return o.prototype.computeDeltaFromMouseWheelLegacyEvent=function(t,e){var i=0,n=t*.01*this.wheelDeltaPercentage*e;return t>0?i=n/(1+this.wheelDeltaPercentage):i=n*(1+this.wheelDeltaPercentage),i},o.prototype.attachControl=function(t){var e=this;t=ee.BackCompatCameraNoPreventDefault(arguments),this._wheel=function(i,n){if(i.type===q.POINTERWHEEL){var r=i.event,a=0,s=r,f=0;if(s.wheelDelta?f=s.wheelDelta:f=-(r.deltaY||r.detail)*60,e.wheelDeltaPercentage){if(a=e.computeDeltaFromMouseWheelLegacyEvent(f,e.camera.radius),a>0){for(var l=e.camera.radius,u=e.camera.inertialRadiusOffset+a,h=0;h<20&&Math.abs(u)>.001;h++)l-=u,u*=e.camera.inertia;l=Oe.Clamp(l,0,Number.MAX_VALUE),a=e.computeDeltaFromMouseWheelLegacyEvent(f,l)}}else a=f/(e.wheelPrecision*40);a&&(e.camera.inertialRadiusOffset+=a),r.preventDefault&&(t||r.preventDefault())}},this._observer=this.camera.getScene().onPointerObservable.add(this._wheel,q.POINTERWHEEL)},o.prototype.detachControl=function(t){this._observer&&(this.camera.getScene().onPointerObservable.remove(this._observer),this._observer=null,this._wheel=null)},o.prototype.getClassName=function(){return"ArcRotateCameraMouseWheelInput"},o.prototype.getSimpleName=function(){return"mousewheel"},g([E()],o.prototype,"wheelPrecision",void 0),g([E()],o.prototype,"wheelDeltaPercentage",void 0),o}();Te.ArcRotateCameraMouseWheelInput=qe;var gn=function(o){W(t,o);function t(e){return o.call(this,e)||this}return t.prototype.addMouseWheel=function(){return this.add(new qe),this},t.prototype.addPointers=function(){return this.add(new $e),this},t.prototype.addKeyboard=function(){return this.add(new Ze),this},t}(vn);Se.AddNodeConstructor("ArcRotateCamera",function(o,t){return function(){return new Je(o,0,0,1,I.Zero(),t)}});var Je=function(o){W(t,o);function t(e,i,n,r,a,s,f){f===void 0&&(f=!0);var l=o.call(this,e,I.Zero(),s,f)||this;return l.inertialAlphaOffset=0,l.inertialBetaOffset=0,l.inertialRadiusOffset=0,l.lowerAlphaLimit=null,l.upperAlphaLimit=null,l.lowerBetaLimit=.01,l.upperBetaLimit=Math.PI-.01,l.lowerRadiusLimit=null,l.upperRadiusLimit=null,l.inertialPanningX=0,l.inertialPanningY=0,l.pinchToPanMaxDistance=20,l.panningDistanceLimit=null,l.panningOriginTarget=I.Zero(),l.panningInertia=.9,l.zoomOnFactor=1,l.targetScreenOffset=J.Zero(),l.allowUpsideDown=!0,l.useInputToRestoreState=!0,l._viewMatrix=new M,l.panningAxis=new I(1,1,0),l.onMeshTargetChangedObservable=new se,l.checkCollisions=!1,l.collisionRadius=new I(.5,.5,.5),l._previousPosition=I.Zero(),l._collisionVelocity=I.Zero(),l._newPosition=I.Zero(),l._computationVector=I.Zero(),l._onCollisionPositionChange=function(u,h,c){c===void 0&&(c=null),c?(l.setPosition(h),l.onCollide&&l.onCollide(c)):l._previousPosition.copyFrom(l._position);var p=Math.cos(l.alpha),d=Math.sin(l.alpha),S=Math.cos(l.beta),_=Math.sin(l.beta);_===0&&(_=1e-4);var y=l._getTargetPosition();l._computationVector.copyFromFloats(l.radius*p*_,l.radius*S,l.radius*d*_),y.addToRef(l._computationVector,l._newPosition),l._position.copyFrom(l._newPosition);var m=l.upVector;l.allowUpsideDown&&l.beta<0&&(m=m.clone(),m=m.negate()),l._computeViewMatrix(l._position,y,m),l._viewMatrix.addAtIndex(12,l.targetScreenOffset.x),l._viewMatrix.addAtIndex(13,l.targetScreenOffset.y),l._collisionTriggered=!1},l._target=I.Zero(),a&&l.setTarget(a),l.alpha=i,l.beta=n,l.radius=r,l.getViewMatrix(),l.inputs=new gn(l),l.inputs.addKeyboard().addMouseWheel().addPointers(),l}return Object.defineProperty(t.prototype,"target",{get:function(){return this._target},set:function(e){this.setTarget(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this._position},set:function(e){this.setPosition(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"upVector",{get:function(){return this._upVector},set:function(e){this._upToYMatrix||(this._YToUpMatrix=new M,this._upToYMatrix=new M,this._upVector=I.Zero()),e.normalize(),this._upVector.copyFrom(e),this.setMatUp()},enumerable:!1,configurable:!0}),t.prototype.setMatUp=function(){M.RotationAlignToRef(I.UpReadOnly,this._upVector,this._YToUpMatrix),M.RotationAlignToRef(this._upVector,I.UpReadOnly,this._upToYMatrix)},Object.defineProperty(t.prototype,"angularSensibilityX",{get:function(){var e=this.inputs.attached.pointers;return e?e.angularSensibilityX:0},set:function(e){var i=this.inputs.attached.pointers;i&&(i.angularSensibilityX=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"angularSensibilityY",{get:function(){var e=this.inputs.attached.pointers;return e?e.angularSensibilityY:0},set:function(e){var i=this.inputs.attached.pointers;i&&(i.angularSensibilityY=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pinchPrecision",{get:function(){var e=this.inputs.attached.pointers;return e?e.pinchPrecision:0},set:function(e){var i=this.inputs.attached.pointers;i&&(i.pinchPrecision=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pinchDeltaPercentage",{get:function(){var e=this.inputs.attached.pointers;return e?e.pinchDeltaPercentage:0},set:function(e){var i=this.inputs.attached.pointers;i&&(i.pinchDeltaPercentage=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useNaturalPinchZoom",{get:function(){var e=this.inputs.attached.pointers;return e?e.useNaturalPinchZoom:!1},set:function(e){var i=this.inputs.attached.pointers;i&&(i.useNaturalPinchZoom=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"panningSensibility",{get:function(){var e=this.inputs.attached.pointers;return e?e.panningSensibility:0},set:function(e){var i=this.inputs.attached.pointers;i&&(i.panningSensibility=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"keysUp",{get:function(){var e=this.inputs.attached.keyboard;return e?e.keysUp:[]},set:function(e){var i=this.inputs.attached.keyboard;i&&(i.keysUp=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"keysDown",{get:function(){var e=this.inputs.attached.keyboard;return e?e.keysDown:[]},set:function(e){var i=this.inputs.attached.keyboard;i&&(i.keysDown=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"keysLeft",{get:function(){var e=this.inputs.attached.keyboard;return e?e.keysLeft:[]},set:function(e){var i=this.inputs.attached.keyboard;i&&(i.keysLeft=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"keysRight",{get:function(){var e=this.inputs.attached.keyboard;return e?e.keysRight:[]},set:function(e){var i=this.inputs.attached.keyboard;i&&(i.keysRight=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wheelPrecision",{get:function(){var e=this.inputs.attached.mousewheel;return e?e.wheelPrecision:0},set:function(e){var i=this.inputs.attached.mousewheel;i&&(i.wheelPrecision=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wheelDeltaPercentage",{get:function(){var e=this.inputs.attached.mousewheel;return e?e.wheelDeltaPercentage:0},set:function(e){var i=this.inputs.attached.mousewheel;i&&(i.wheelDeltaPercentage=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bouncingBehavior",{get:function(){return this._bouncingBehavior},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useBouncingBehavior",{get:function(){return this._bouncingBehavior!=null},set:function(e){e!==this.useBouncingBehavior&&(e?(this._bouncingBehavior=new cn,this.addBehavior(this._bouncingBehavior)):this._bouncingBehavior&&(this.removeBehavior(this._bouncingBehavior),this._bouncingBehavior=null))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"framingBehavior",{get:function(){return this._framingBehavior},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useFramingBehavior",{get:function(){return this._framingBehavior!=null},set:function(e){e!==this.useFramingBehavior&&(e?(this._framingBehavior=new dn,this.addBehavior(this._framingBehavior)):this._framingBehavior&&(this.removeBehavior(this._framingBehavior),this._framingBehavior=null))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"autoRotationBehavior",{get:function(){return this._autoRotationBehavior},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useAutoRotationBehavior",{get:function(){return this._autoRotationBehavior!=null},set:function(e){e!==this.useAutoRotationBehavior&&(e?(this._autoRotationBehavior=new fn,this.addBehavior(this._autoRotationBehavior)):this._autoRotationBehavior&&(this.removeBehavior(this._autoRotationBehavior),this._autoRotationBehavior=null))},enumerable:!1,configurable:!0}),t.prototype._initCache=function(){o.prototype._initCache.call(this),this._cache._target=new I(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.alpha=void 0,this._cache.beta=void 0,this._cache.radius=void 0,this._cache.targetScreenOffset=J.Zero()},t.prototype._updateCache=function(e){e||o.prototype._updateCache.call(this),this._cache._target.copyFrom(this._getTargetPosition()),this._cache.alpha=this.alpha,this._cache.beta=this.beta,this._cache.radius=this.radius,this._cache.targetScreenOffset.copyFrom(this.targetScreenOffset)},t.prototype._getTargetPosition=function(){if(this._targetHost&&this._targetHost.getAbsolutePosition){var e=this._targetHost.absolutePosition;this._targetBoundingCenter?e.addToRef(this._targetBoundingCenter,this._target):this._target.copyFrom(e)}var i=this._getLockedTargetPosition();return i||this._target},t.prototype.storeState=function(){return this._storedAlpha=this.alpha,this._storedBeta=this.beta,this._storedRadius=this.radius,this._storedTarget=this._getTargetPosition().clone(),this._storedTargetScreenOffset=this.targetScreenOffset.clone(),o.prototype.storeState.call(this)},t.prototype._restoreStateValues=function(){return o.prototype._restoreStateValues.call(this)?(this.setTarget(this._storedTarget.clone()),this.alpha=this._storedAlpha,this.beta=this._storedBeta,this.radius=this._storedRadius,this.targetScreenOffset=this._storedTargetScreenOffset.clone(),this.inertialAlphaOffset=0,this.inertialBetaOffset=0,this.inertialRadiusOffset=0,this.inertialPanningX=0,this.inertialPanningY=0,!0):!1},t.prototype._isSynchronizedViewMatrix=function(){return o.prototype._isSynchronizedViewMatrix.call(this)?this._cache._target.equals(this._getTargetPosition())&&this._cache.alpha===this.alpha&&this._cache.beta===this.beta&&this._cache.radius===this.radius&&this._cache.targetScreenOffset.equals(this.targetScreenOffset):!1},t.prototype.attachControl=function(e,i,n,r){var a=this;n===void 0&&(n=!0),r===void 0&&(r=2),i=ee.BackCompatCameraNoPreventDefault(arguments),this._useCtrlForPanning=n,this._panningMouseButton=r,typeof arguments[0]=="boolean"&&(arguments.length>1&&(this._useCtrlForPanning=arguments[1]),arguments.length>2&&(this._panningMouseButton=arguments[2])),this.inputs.attachElement(i),this._reset=function(){a.inertialAlphaOffset=0,a.inertialBetaOffset=0,a.inertialRadiusOffset=0,a.inertialPanningX=0,a.inertialPanningY=0}},t.prototype.detachControl=function(e){this.inputs.detachElement(),this._reset&&this._reset()},t.prototype._checkInputs=function(){if(!this._collisionTriggered){if(this.inputs.checkInputs(),this.inertialAlphaOffset!==0||this.inertialBetaOffset!==0||this.inertialRadiusOffset!==0){var e=this.inertialAlphaOffset;this.beta<=0&&(e*=-1),this.getScene().useRightHandedSystem&&(e*=-1),this.parent&&this.parent._getWorldMatrixDeterminant()<0&&(e*=-1),this.alpha+=e,this.beta+=this.inertialBetaOffset,this.radius-=this.inertialRadiusOffset,this.inertialAlphaOffset*=this.inertia,this.inertialBetaOffset*=this.inertia,this.inertialRadiusOffset*=this.inertia,Math.abs(this.inertialAlphaOffset)<oe&&(this.inertialAlphaOffset=0),Math.abs(this.inertialBetaOffset)<oe&&(this.inertialBetaOffset=0),Math.abs(this.inertialRadiusOffset)<this.speed*oe&&(this.inertialRadiusOffset=0)}if(this.inertialPanningX!==0||this.inertialPanningY!==0){if(this._localDirection||(this._localDirection=I.Zero(),this._transformedDirection=I.Zero()),this._localDirection.copyFromFloats(this.inertialPanningX,this.inertialPanningY,this.inertialPanningY),this._localDirection.multiplyInPlace(this.panningAxis),this._viewMatrix.invertToRef(this._cameraTransformMatrix),I.TransformNormalToRef(this._localDirection,this._cameraTransformMatrix,this._transformedDirection),this.panningAxis.y||(this._transformedDirection.y=0),!this._targetHost)if(this.panningDistanceLimit){this._transformedDirection.addInPlace(this._target);var i=I.DistanceSquared(this._transformedDirection,this.panningOriginTarget);i<=this.panningDistanceLimit*this.panningDistanceLimit&&this._target.copyFrom(this._transformedDirection)}else this._target.addInPlace(this._transformedDirection);this.inertialPanningX*=this.panningInertia,this.inertialPanningY*=this.panningInertia,Math.abs(this.inertialPanningX)<this.speed*oe&&(this.inertialPanningX=0),Math.abs(this.inertialPanningY)<this.speed*oe&&(this.inertialPanningY=0)}this._checkLimits(),o.prototype._checkInputs.call(this)}},t.prototype._checkLimits=function(){this.lowerBetaLimit===null||this.lowerBetaLimit===void 0?this.allowUpsideDown&&this.beta>Math.PI&&(this.beta=this.beta-2*Math.PI):this.beta<this.lowerBetaLimit&&(this.beta=this.lowerBetaLimit),this.upperBetaLimit===null||this.upperBetaLimit===void 0?this.allowUpsideDown&&this.beta<-Math.PI&&(this.beta=this.beta+2*Math.PI):this.beta>this.upperBetaLimit&&(this.beta=this.upperBetaLimit),this.lowerAlphaLimit!==null&&this.alpha<this.lowerAlphaLimit&&(this.alpha=this.lowerAlphaLimit),this.upperAlphaLimit!==null&&this.alpha>this.upperAlphaLimit&&(this.alpha=this.upperAlphaLimit),this.lowerRadiusLimit!==null&&this.radius<this.lowerRadiusLimit&&(this.radius=this.lowerRadiusLimit,this.inertialRadiusOffset=0),this.upperRadiusLimit!==null&&this.radius>this.upperRadiusLimit&&(this.radius=this.upperRadiusLimit,this.inertialRadiusOffset=0)},t.prototype.rebuildAnglesAndRadius=function(){this._position.subtractToRef(this._getTargetPosition(),this._computationVector),(this._upVector.x!==0||this._upVector.y!==1||this._upVector.z!==0)&&I.TransformCoordinatesToRef(this._computationVector,this._upToYMatrix,this._computationVector),this.radius=this._computationVector.length(),this.radius===0&&(this.radius=1e-4);var e=this.alpha;this._computationVector.x===0&&this._computationVector.z===0?this.alpha=Math.PI/2:this.alpha=Math.acos(this._computationVector.x/Math.sqrt(Math.pow(this._computationVector.x,2)+Math.pow(this._computationVector.z,2))),this._computationVector.z<0&&(this.alpha=2*Math.PI-this.alpha);var i=Math.round((e-this.alpha)/(2*Math.PI));this.alpha+=i*2*Math.PI,this.beta=Math.acos(this._computationVector.y/this.radius),this._checkLimits()},t.prototype.setPosition=function(e){this._position.equals(e)||(this._position.copyFrom(e),this.rebuildAnglesAndRadius())},t.prototype.setTarget=function(e,i,n){if(i===void 0&&(i=!1),n===void 0&&(n=!1),e.getBoundingInfo)i?this._targetBoundingCenter=e.getBoundingInfo().boundingBox.centerWorld.clone():this._targetBoundingCenter=null,e.computeWorldMatrix(),this._targetHost=e,this._target=this._getTargetPosition(),this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);else{var r=e,a=this._getTargetPosition();if(a&&!n&&a.equals(r))return;this._targetHost=null,this._target=r,this._targetBoundingCenter=null,this.onMeshTargetChangedObservable.notifyObservers(null)}this.rebuildAnglesAndRadius()},t.prototype._getViewMatrix=function(){var e=Math.cos(this.alpha),i=Math.sin(this.alpha),n=Math.cos(this.beta),r=Math.sin(this.beta);r===0&&(r=1e-4),this.radius===0&&(this.radius=1e-4);var a=this._getTargetPosition();if(this._computationVector.copyFromFloats(this.radius*e*r,this.radius*n,this.radius*i*r),(this._upVector.x!==0||this._upVector.y!==1||this._upVector.z!==0)&&I.TransformCoordinatesToRef(this._computationVector,this._YToUpMatrix,this._computationVector),a.addToRef(this._computationVector,this._newPosition),this.getScene().collisionsEnabled&&this.checkCollisions){var s=this.getScene().collisionCoordinator;this._collider||(this._collider=s.createCollider()),this._collider._radius=this.collisionRadius,this._newPosition.subtractToRef(this._position,this._collisionVelocity),this._collisionTriggered=!0,s.getNewPosition(this._position,this._collisionVelocity,this._collider,3,null,this._onCollisionPositionChange,this.uniqueId)}else{this._position.copyFrom(this._newPosition);var f=this.upVector;this.allowUpsideDown&&r<0&&(f=f.negate()),this._computeViewMatrix(this._position,a,f),this._viewMatrix.addAtIndex(12,this.targetScreenOffset.x),this._viewMatrix.addAtIndex(13,this.targetScreenOffset.y)}return this._currentTarget=a,this._viewMatrix},t.prototype.zoomOn=function(e,i){i===void 0&&(i=!1),e=e||this.getScene().meshes;var n=$.MinMax(e),r=I.Distance(n.min,n.max);this.radius=r*this.zoomOnFactor,this.focusOn({min:n.min,max:n.max,distance:r},i)},t.prototype.focusOn=function(e,i){i===void 0&&(i=!1);var n,r;if(e.min===void 0){var a=e||this.getScene().meshes;n=$.MinMax(a),r=I.Distance(n.min,n.max)}else{var s=e;n=s,r=s.distance}this._target=$.Center(n),i||(this.maxZ=r*2)},t.prototype.createRigCamera=function(e,i){var n=0;switch(this.cameraRigMode){case X.RIG_MODE_STEREOSCOPIC_ANAGLYPH:case X.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:case X.RIG_MODE_STEREOSCOPIC_OVERUNDER:case X.RIG_MODE_STEREOSCOPIC_INTERLACED:case X.RIG_MODE_VR:n=this._cameraRigParams.stereoHalfAngle*(i===0?1:-1);break;case X.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:n=this._cameraRigParams.stereoHalfAngle*(i===0?-1:1);break}var r=new t(e,this.alpha+n,this.beta,this.radius,this._target,this.getScene());return r._cameraRigParams={},r.isRigCamera=!0,r.rigParent=this,r.upVector=this.upVector,r},t.prototype._updateRigCameras=function(){var e=this._rigCameras[0],i=this._rigCameras[1];switch(e.beta=i.beta=this.beta,this.cameraRigMode){case X.RIG_MODE_STEREOSCOPIC_ANAGLYPH:case X.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:case X.RIG_MODE_STEREOSCOPIC_OVERUNDER:case X.RIG_MODE_STEREOSCOPIC_INTERLACED:case X.RIG_MODE_VR:e.alpha=this.alpha-this._cameraRigParams.stereoHalfAngle,i.alpha=this.alpha+this._cameraRigParams.stereoHalfAngle;break;case X.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:e.alpha=this.alpha+this._cameraRigParams.stereoHalfAngle,i.alpha=this.alpha-this._cameraRigParams.stereoHalfAngle;break}o.prototype._updateRigCameras.call(this)},t.prototype.dispose=function(){this.inputs.clear(),o.prototype.dispose.call(this)},t.prototype.getClassName=function(){return"ArcRotateCamera"},g([E()],t.prototype,"alpha",void 0),g([E()],t.prototype,"beta",void 0),g([E()],t.prototype,"radius",void 0),g([xe("target")],t.prototype,"_target",void 0),g([E()],t.prototype,"inertialAlphaOffset",void 0),g([E()],t.prototype,"inertialBetaOffset",void 0),g([E()],t.prototype,"inertialRadiusOffset",void 0),g([E()],t.prototype,"lowerAlphaLimit",void 0),g([E()],t.prototype,"upperAlphaLimit",void 0),g([E()],t.prototype,"lowerBetaLimit",void 0),g([E()],t.prototype,"upperBetaLimit",void 0),g([E()],t.prototype,"lowerRadiusLimit",void 0),g([E()],t.prototype,"upperRadiusLimit",void 0),g([E()],t.prototype,"inertialPanningX",void 0),g([E()],t.prototype,"inertialPanningY",void 0),g([E()],t.prototype,"pinchToPanMaxDistance",void 0),g([E()],t.prototype,"panningDistanceLimit",void 0),g([xe()],t.prototype,"panningOriginTarget",void 0),g([E()],t.prototype,"panningInertia",void 0),g([E()],t.prototype,"zoomOnFactor",void 0),g([E()],t.prototype,"targetScreenOffset",void 0),g([E()],t.prototype,"allowUpsideDown",void 0),g([E()],t.prototype,"useInputToRestoreState",void 0),t}(pn);$._instancedMeshFactory=function(o,t){var e=new _n(o,t);if(t.instancedBuffers){e.instancedBuffers={};for(var i in t.instancedBuffers)e.instancedBuffers[i]=t.instancedBuffers[i]}return e};var _n=function(o){W(t,o);function t(e,i){var n=o.call(this,e,i.getScene())||this;n._indexInSourceMeshInstanceArray=-1,i.addInstance(n),n._sourceMesh=i,n._unIndexed=i._unIndexed,n.position.copyFrom(i.position),n.rotation.copyFrom(i.rotation),n.scaling.copyFrom(i.scaling),i.rotationQuaternion&&(n.rotationQuaternion=i.rotationQuaternion.clone()),n.animations=ee.Slice(i.animations);for(var r=0,a=i.getAnimationRanges();r<a.length;r++){var s=a[r];s!=null&&n.createAnimationRange(s.name,s.from,s.to)}return n.infiniteDistance=i.infiniteDistance,n.setPivotMatrix(i.getPivotMatrix()),n.refreshBoundingInfo(),n._syncSubMeshes(),n}return t.prototype.getClassName=function(){return"InstancedMesh"},Object.defineProperty(t.prototype,"lightSources",{get:function(){return this._sourceMesh._lightSources},enumerable:!1,configurable:!0}),t.prototype._resyncLightSources=function(){},t.prototype._resyncLightSource=function(e){},t.prototype._removeLightSource=function(e,i){},Object.defineProperty(t.prototype,"receiveShadows",{get:function(){return this._sourceMesh.receiveShadows},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"material",{get:function(){return this._sourceMesh.material},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visibility",{get:function(){return this._sourceMesh.visibility},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"skeleton",{get:function(){return this._sourceMesh.skeleton},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"renderingGroupId",{get:function(){return this._sourceMesh.renderingGroupId},set:function(e){!this._sourceMesh||e===this._sourceMesh.renderingGroupId||re.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")},enumerable:!1,configurable:!0}),t.prototype.getTotalVertices=function(){return this._sourceMesh?this._sourceMesh.getTotalVertices():0},t.prototype.getTotalIndices=function(){return this._sourceMesh.getTotalIndices()},Object.defineProperty(t.prototype,"sourceMesh",{get:function(){return this._sourceMesh},enumerable:!1,configurable:!0}),t.prototype.createInstance=function(e){return this._sourceMesh.createInstance(e)},t.prototype.isReady=function(e){return e===void 0&&(e=!1),this._sourceMesh.isReady(e,!0)},t.prototype.getVerticesData=function(e,i){return this._sourceMesh.getVerticesData(e,i)},t.prototype.setVerticesData=function(e,i,n,r){return this.sourceMesh&&this.sourceMesh.setVerticesData(e,i,n,r),this.sourceMesh},t.prototype.updateVerticesData=function(e,i,n,r){return this.sourceMesh&&this.sourceMesh.updateVerticesData(e,i,n,r),this.sourceMesh},t.prototype.setIndices=function(e,i){return i===void 0&&(i=null),this.sourceMesh&&this.sourceMesh.setIndices(e,i),this.sourceMesh},t.prototype.isVerticesDataPresent=function(e){return this._sourceMesh.isVerticesDataPresent(e)},t.prototype.getIndices=function(){return this._sourceMesh.getIndices()},Object.defineProperty(t.prototype,"_positions",{get:function(){return this._sourceMesh._positions},enumerable:!1,configurable:!0}),t.prototype.refreshBoundingInfo=function(e){if(e===void 0&&(e=!1),this._boundingInfo&&this._boundingInfo.isLocked)return this;var i=this._sourceMesh.geometry?this._sourceMesh.geometry.boundingBias:null;return this._refreshBoundingInfo(this._sourceMesh._getPositionData(e),i),this},t.prototype._preActivate=function(){return this._currentLOD&&this._currentLOD._preActivate(),this},t.prototype._activate=function(e,i){if(this._sourceMesh.subMeshes||re.Warn("Instances should only be created for meshes with geometry."),this._currentLOD){var n=this._currentLOD._getWorldMatrixDeterminant()>0!=this._getWorldMatrixDeterminant()>0;if(n)return this._internalAbstractMeshDataInfo._actAsRegularMesh=!0,!0;if(this._internalAbstractMeshDataInfo._actAsRegularMesh=!1,this._currentLOD._registerInstanceForRenderId(this,e),i){if(!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate)return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!0,!0}else if(!this._currentLOD._internalAbstractMeshDataInfo._isActive)return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances=!0,!0}return!1},t.prototype._postActivate=function(){this._sourceMesh.edgesShareWithInstances&&this._sourceMesh._edgesRenderer&&this._sourceMesh._edgesRenderer.isEnabled&&this._sourceMesh._renderingGroup?(this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer),this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())):this._edgesRenderer&&this._edgesRenderer.isEnabled&&this._sourceMesh._renderingGroup&&this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)},t.prototype.getWorldMatrix=function(){if(this._currentLOD&&this._currentLOD.billboardMode!==Ge.BILLBOARDMODE_NONE&&this._currentLOD._masterMesh!==this){var e=this._currentLOD._masterMesh;return this._currentLOD._masterMesh=this,L.Vector3[7].copyFrom(this._currentLOD.position),this._currentLOD.position.set(0,0,0),L.Matrix[0].copyFrom(this._currentLOD.computeWorldMatrix(!0)),this._currentLOD.position.copyFrom(L.Vector3[7]),this._currentLOD._masterMesh=e,L.Matrix[0]}return o.prototype.getWorldMatrix.call(this)},Object.defineProperty(t.prototype,"isAnInstance",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.getLOD=function(e){if(!e)return this;var i=this.getBoundingInfo();return this._currentLOD=this.sourceMesh.getLOD(e,i.boundingSphere),this._currentLOD===this.sourceMesh?this.sourceMesh:this._currentLOD},t.prototype._preActivateForIntermediateRendering=function(e){return this.sourceMesh._preActivateForIntermediateRendering(e)},t.prototype._syncSubMeshes=function(){if(this.releaseSubMeshes(),this._sourceMesh.subMeshes)for(var e=0;e<this._sourceMesh.subMeshes.length;e++)this._sourceMesh.subMeshes[e].clone(this,this._sourceMesh);return this},t.prototype._generatePointsArray=function(){return this._sourceMesh._generatePointsArray()},t.prototype._updateBoundingInfo=function(){var e=this;return this._boundingInfo?this._boundingInfo.update(e.worldMatrixFromCache):this._boundingInfo=new he(this.absolutePosition,this.absolutePosition,e.worldMatrixFromCache),this._updateSubMeshesBoundingInfo(e.worldMatrixFromCache),this},t.prototype.clone=function(e,i,n){i===void 0&&(i=null);var r=this._sourceMesh.createInstance(e);if(ze.DeepCopy(this,r,["name","subMeshes","uniqueId","parent","lightSources","receiveShadows","material","visibility","skeleton","sourceMesh","isAnInstance","facetNb","isFacetDataEnabled","isBlocked","useBones","hasInstances","collider","edgesRenderer","forward","up","right","absolutePosition","absoluteScaling","absoluteRotationQuaternion","isWorldMatrixFrozen","nonUniformScaling","behaviors","worldMatrixFromCache","hasThinInstances"],[]),this.refreshBoundingInfo(),i&&(r.parent=i),!n)for(var a=0;a<this.getScene().meshes.length;a++){var s=this.getScene().meshes[a];s.parent===this&&s.clone(s.name,r)}return r.computeWorldMatrix(!0),r},t.prototype.dispose=function(e,i){i===void 0&&(i=!1),this._sourceMesh.removeInstance(this),o.prototype.dispose.call(this,e,i)},t}(He);$.prototype.edgesShareWithInstances=!1;$.prototype.registerInstancedBuffer=function(o,t){if(this.removeVerticesData(o),!this.instancedBuffers){this.instancedBuffers={};for(var e=0,i=this.instances;e<i.length;e++){var n=i[e];n.instancedBuffers={}}this._userInstancedBuffersStorage={data:{},vertexBuffers:{},strides:{},sizes:{}}}this.instancedBuffers[o]=null,this._userInstancedBuffersStorage.strides[o]=t,this._userInstancedBuffersStorage.sizes[o]=t*32,this._userInstancedBuffersStorage.data[o]=new Float32Array(this._userInstancedBuffersStorage.sizes[o]),this._userInstancedBuffersStorage.vertexBuffers[o]=new v(this.getEngine(),this._userInstancedBuffersStorage.data[o],o,!0,!1,t,!0),this.setVerticesBuffer(this._userInstancedBuffersStorage.vertexBuffers[o]);for(var r=0,a=this.instances;r<a.length;r++){var n=a[r];n.instancedBuffers[o]=null}};$.prototype._processInstancedBuffers=function(o,t){var e=o.length;for(var i in this.instancedBuffers){for(var n=this._userInstancedBuffersStorage.sizes[i],r=this._userInstancedBuffersStorage.strides[i],a=(e+1)*r;n<a;)n*=2;this._userInstancedBuffersStorage.data[i].length!=n&&(this._userInstancedBuffersStorage.data[i]=new Float32Array(n),this._userInstancedBuffersStorage.sizes[i]=n,this._userInstancedBuffersStorage.vertexBuffers[i]&&(this._userInstancedBuffersStorage.vertexBuffers[i].dispose(),this._userInstancedBuffersStorage.vertexBuffers[i]=null));var s=this._userInstancedBuffersStorage.data[i],f=0;if(t){var l=this.instancedBuffers[i];l.toArray?l.toArray(s,f):l.copyToArray(s,f),f+=r}for(var u=0;u<e;u++){var h=o[u],l=h.instancedBuffers[i];l.toArray?l.toArray(s,f):l.copyToArray(s,f),f+=r}this._userInstancedBuffersStorage.vertexBuffers[i]?this._userInstancedBuffersStorage.vertexBuffers[i].updateDirectly(s,0):(this._userInstancedBuffersStorage.vertexBuffers[i]=new v(this.getEngine(),this._userInstancedBuffersStorage.data[i],i,!0,!1,r,!0),this.setVerticesBuffer(this._userInstancedBuffersStorage.vertexBuffers[i]))}};$.prototype._disposeInstanceSpecificData=function(){for(this._instanceDataStorage.instancesBuffer&&(this._instanceDataStorage.instancesBuffer.dispose(),this._instanceDataStorage.instancesBuffer=null);this.instances.length;)this.instances[0].dispose();for(var o in this.instancedBuffers)this._userInstancedBuffersStorage.vertexBuffers[o]&&this._userInstancedBuffersStorage.vertexBuffers[o].dispose();this.instancedBuffers={}};var Sn=Object.freeze(new N(0,0,0,0)),yn=Object.freeze(I.Zero()),An=Object.freeze(J.Zero()),Tn=Object.freeze(Ae.Zero()),En=Object.freeze(ne.Black()),In=function(){function o(t,e,i,n){var r=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=e,this._target=t,this._scene=i,this._host=n,this._activeTargets=[],e._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===R.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=M.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var a={frame:0,value:this._minValue};this._keys.splice(0,0,a)}if(this._target instanceof Array){for(var s=0,f=0,l=this._target;f<l.length;f++){var u=l[f];this._preparePath(u,s),this._getOriginalValues(s),s++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var h=e.getEvents();h&&h.length>0&&h.forEach(function(c){r._events.push(c._clone())}),this._enableBlending=t&&t.animationPropertiesOverride?t.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(o.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),o.prototype._preparePath=function(t,e){e===void 0&&(e=0);var i=this._animation.targetPropertyPath;if(i.length>1){for(var n=t[i[0]],r=1;r<i.length-1;r++)n=n[i[r]];this._targetPath=i[i.length-1],this._activeTargets[e]=n}else this._targetPath=i[0],this._activeTargets[e]=t},Object.defineProperty(o.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),o.prototype.reset=function(t){if(t===void 0&&(t=!1),t)if(this._target instanceof Array)for(var e=0,i=0,n=this._target;i<n.length;i++){var r=n[i];this._originalValue[e]!==void 0&&this._setValue(r,this._activeTargets[e],this._originalValue[e],-1,e),e++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var e=0;e<this._events.length;e++)this._events[e].isDone=!1},o.prototype.isStopped=function(){return this._stopped},o.prototype.dispose=function(){var t=this._animation.runtimeAnimations.indexOf(this);t>-1&&this._animation.runtimeAnimations.splice(t,1)},o.prototype.setValue=function(t,e){if(this._targetIsArray){for(var i=0;i<this._target.length;i++){var n=this._target[i];this._setValue(n,this._activeTargets[i],t,e,i)}return}this._setValue(this._target,this._directTarget,t,e,0)},o.prototype._getOriginalValues=function(t){t===void 0&&(t=0);var e,i=this._activeTargets[t];i.getRestPose&&this._targetPath==="_matrix"?e=i.getRestPose():e=i[this._targetPath],e&&e.clone?this._originalValue[t]=e.clone():this._originalValue[t]=e},o.prototype._setValue=function(t,e,i,n,r){if(this._currentActiveTarget=e,this._weight=n,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var a=e[this._targetPath];a.clone?this._originalBlendValue=a.clone():this._originalBlendValue=a}this._originalBlendValue.m?R.AllowMatrixDecomposeForInterpolation?this._currentValue?M.DecomposeLerpToRef(this._originalBlendValue,i,this._blendingFactor,this._currentValue):this._currentValue=M.DecomposeLerp(this._originalBlendValue,i,this._blendingFactor):this._currentValue?M.LerpToRef(this._originalBlendValue,i,this._blendingFactor,this._currentValue):this._currentValue=M.Lerp(this._originalBlendValue,i,this._blendingFactor):this._currentValue=R._UniversalLerp(this._originalBlendValue,i,this._blendingFactor);var s=t&&t.animationPropertiesOverride?t.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=s}else this._currentValue=i;n!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[r]):e[this._targetPath]=this._currentValue,t.markAsDirty&&t.markAsDirty(this._animation.targetProperty)},o.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},o.prototype.goToFrame=function(t){var e=this._animation.getKeys();t<e[0].frame?t=e[0].frame:t>e[e.length-1].frame&&(t=e[e.length-1].frame);var i=this._events;if(i.length)for(var n=0;n<i.length;n++)i[n].onlyOnce||(i[n].isDone=i[n].frame<t);this._currentFrame=t;var r=this._animation._interpolate(t,this._animationState);this.setValue(r,-1)},o.prototype._prepareForSpeedRatioChange=function(t){var e=this._previousDelay*(this._animation.framePerSecond*t)/1e3;this._ratioOffset=this._previousRatio-e},o.prototype.animate=function(t,e,i,n,r,a){a===void 0&&(a=-1);var s=this._animation,f=s.targetPropertyPath;if(!f||f.length<1)return this._stopped=!0,!1;var l=!0;(e<this._minFrame||e>this._maxFrame)&&(e=this._minFrame),(i<this._minFrame||i>this._maxFrame)&&(i=this._maxFrame);var u=i-e,h,c=t*(s.framePerSecond*r)/1e3+this._ratioOffset,p=0;if(this._previousDelay=t,this._previousRatio=c,!n&&i>=e&&c>=u)l=!1,p=s._getKeyValue(this._maxValue);else if(!n&&e>=i&&c<=u)l=!1,p=s._getKeyValue(this._minValue);else if(this._animationState.loopMode!==R.ANIMATIONLOOPMODE_CYCLE){var d=i.toString()+e.toString();if(!this._offsetsCache[d]){this._animationState.repeatCount=0,this._animationState.loopMode=R.ANIMATIONLOOPMODE_CYCLE;var S=s._interpolate(e,this._animationState),_=s._interpolate(i,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),s.dataType){case R.ANIMATIONTYPE_FLOAT:this._offsetsCache[d]=_-S;break;case R.ANIMATIONTYPE_QUATERNION:this._offsetsCache[d]=_.subtract(S);break;case R.ANIMATIONTYPE_VECTOR3:this._offsetsCache[d]=_.subtract(S);case R.ANIMATIONTYPE_VECTOR2:this._offsetsCache[d]=_.subtract(S);case R.ANIMATIONTYPE_SIZE:this._offsetsCache[d]=_.subtract(S);case R.ANIMATIONTYPE_COLOR3:this._offsetsCache[d]=_.subtract(S)}this._highLimitsCache[d]=_}p=this._highLimitsCache[d],h=this._offsetsCache[d]}if(h===void 0)switch(s.dataType){case R.ANIMATIONTYPE_FLOAT:h=0;break;case R.ANIMATIONTYPE_QUATERNION:h=Sn;break;case R.ANIMATIONTYPE_VECTOR3:h=yn;break;case R.ANIMATIONTYPE_VECTOR2:h=An;break;case R.ANIMATIONTYPE_SIZE:h=Tn;break;case R.ANIMATIONTYPE_COLOR3:h=En}var y;if(this._host&&this._host.syncRoot){var m=this._host.syncRoot,T=(m.masterFrame-m.fromFrame)/(m.toFrame-m.fromFrame);y=e+(i-e)*T}else y=l&&u!==0?e+c%u:i;var b=this._events;if((u>0&&this.currentFrame>y||u<0&&this.currentFrame<y)&&(this._onLoop(),b.length))for(var C=0;C<b.length;C++)b[C].onlyOnce||(b[C].isDone=!1);this._currentFrame=y,this._animationState.repeatCount=u===0?0:c/u>>0,this._animationState.highLimitValue=p,this._animationState.offsetValue=h;var P=s._interpolate(y,this._animationState);if(this.setValue(P,a),b.length){for(var C=0;C<b.length;C++)if(u>0&&y>=b[C].frame&&b[C].frame>=e||u<0&&y<=b[C].frame&&b[C].frame<=e){var A=b[C];A.isDone||(A.onlyOnce&&(b.splice(C,1),C--),A.isDone=!0,A.action(y))}}return l||(this._stopped=!0),l},o}(),bn=function(o){W(t,o);function t(e,i,n,r,a,s,f){n===void 0&&(n=null),r===void 0&&(r=null),a===void 0&&(a=null),s===void 0&&(s=null),f===void 0&&(f=null);var l=o.call(this,e,i.getScene())||this;return l.name=e,l.children=new Array,l.animations=new Array,l._index=null,l._absoluteTransform=new M,l._invertedAbsoluteTransform=new M,l._scalingDeterminant=1,l._worldTransform=new M,l._needToDecompose=!0,l._needToCompose=!1,l._linkedTransformNode=null,l._waitingTransformNodeId=null,l._skeleton=i,l._localMatrix=r?r.clone():M.Identity(),l._restPose=a||l._localMatrix.clone(),l._bindPose=l._localMatrix.clone(),l._baseMatrix=s||l._localMatrix.clone(),l._index=f,i.bones.push(l),l.setParent(n,!1),(s||r)&&l._updateDifferenceMatrix(),l}return Object.defineProperty(t.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(e){this._localMatrix.copyFrom(e),this._needToDecompose=!0},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"Bone"},t.prototype.getSkeleton=function(){return this._skeleton},t.prototype.getParent=function(){return this._parent},t.prototype.getChildren=function(){return this.children},t.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},t.prototype.setParent=function(e,i){if(i===void 0&&(i=!0),this._parent!==e){if(this._parent){var n=this._parent.children.indexOf(this);n!==-1&&this._parent.children.splice(n,1)}this._parent=e,this._parent&&this._parent.children.push(this),i&&this._updateDifferenceMatrix(),this.markAsDirty()}},t.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},t.prototype.getBaseMatrix=function(){return this._baseMatrix},t.prototype.getRestPose=function(){return this._restPose},t.prototype.setRestPose=function(e){this._restPose.copyFrom(e)},t.prototype.getBindPose=function(){return this._bindPose},t.prototype.setBindPose=function(e){this._bindPose.copyFrom(e)},t.prototype.getWorldMatrix=function(){return this._worldTransform},t.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},t.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},t.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},t.prototype.linkTransformNode=function(e){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=e,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},t.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(t.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(e){this._decompose(),this._localPosition.copyFrom(e),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this.getRotation()},set:function(e){this.setRotation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(e){this.setRotationQuaternion(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scaling",{get:function(){return this.getScale()},set:function(e){this.setScale(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),t.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=I.Zero(),this._localRotation=N.Zero(),this._localPosition=I.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},t.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,M.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},t.prototype.updateMatrix=function(e,i,n){i===void 0&&(i=!0),n===void 0&&(n=!0),this._baseMatrix.copyFrom(e),i&&this._updateDifferenceMatrix(),n?(this._needToCompose=!1,this._localMatrix.copyFrom(e),this._markAsDirtyAndDecompose()):this.markAsDirty()},t.prototype._updateDifferenceMatrix=function(e,i){if(i===void 0&&(i=!0),e||(e=this._baseMatrix),this._parent?e.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(e),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),i)for(var n=0;n<this.children.length;n++)this.children[n]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},t.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},t.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},t.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},t.prototype.translate=function(e,i,n){i===void 0&&(i=w.LOCAL);var r=this.getLocalMatrix();if(i==w.LOCAL)r.addAtIndex(12,e.x),r.addAtIndex(13,e.y),r.addAtIndex(14,e.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var s=t._tmpMats[0],f=t._tmpVecs[0];this._parent?n&&a?(s.copyFrom(this._parent.getAbsoluteTransform()),s.multiplyToRef(a,s)):s.copyFrom(this._parent.getAbsoluteTransform()):M.IdentityToRef(s),s.setTranslationFromFloats(0,0,0),s.invert(),I.TransformCoordinatesToRef(e,s,f),r.addAtIndex(12,f.x),r.addAtIndex(13,f.y),r.addAtIndex(14,f.z)}this._markAsDirtyAndDecompose()},t.prototype.setPosition=function(e,i,n){i===void 0&&(i=w.LOCAL);var r=this.getLocalMatrix();if(i==w.LOCAL)r.setTranslationFromFloats(e.x,e.y,e.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var s=t._tmpMats[0],f=t._tmpVecs[0];this._parent?(n&&a?(s.copyFrom(this._parent.getAbsoluteTransform()),s.multiplyToRef(a,s)):s.copyFrom(this._parent.getAbsoluteTransform()),s.invert()):M.IdentityToRef(s),I.TransformCoordinatesToRef(e,s,f),r.setTranslationFromFloats(f.x,f.y,f.z)}this._markAsDirtyAndDecompose()},t.prototype.setAbsolutePosition=function(e,i){this.setPosition(e,w.WORLD,i)},t.prototype.scale=function(e,i,n,r){r===void 0&&(r=!1);var a=this.getLocalMatrix(),s=t._tmpMats[0];M.ScalingToRef(e,i,n,s),s.multiplyToRef(a,a),s.invert();for(var f=0,l=this.children;f<l.length;f++){var u=l[f],h=u.getLocalMatrix();h.multiplyToRef(s,h),h.multiplyAtIndex(12,e),h.multiplyAtIndex(13,i),h.multiplyAtIndex(14,n),u._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),r)for(var c=0,p=this.children;c<p.length;c++){var u=p[c];u.scale(e,i,n,r)}},t.prototype.setScale=function(e){this._decompose(),this._localScaling.copyFrom(e),this._markAsDirtyAndCompose()},t.prototype.getScale=function(){return this._decompose(),this._localScaling},t.prototype.getScaleToRef=function(e){this._decompose(),e.copyFrom(this._localScaling)},t.prototype.setYawPitchRoll=function(e,i,n,r,a){if(r===void 0&&(r=w.LOCAL),r===w.LOCAL){var s=t._tmpQuat;N.RotationYawPitchRollToRef(e,i,n,s),this.setRotationQuaternion(s,r,a);return}var f=t._tmpMats[0];if(!!this._getNegativeRotationToRef(f,a)){var l=t._tmpMats[1];M.RotationYawPitchRollToRef(e,i,n,l),f.multiplyToRef(l,l),this._rotateWithMatrix(l,r,a)}},t.prototype.rotate=function(e,i,n,r){n===void 0&&(n=w.LOCAL);var a=t._tmpMats[0];a.setTranslationFromFloats(0,0,0),M.RotationAxisToRef(e,i,a),this._rotateWithMatrix(a,n,r)},t.prototype.setAxisAngle=function(e,i,n,r){if(n===void 0&&(n=w.LOCAL),n===w.LOCAL){var a=t._tmpQuat;N.RotationAxisToRef(e,i,a),this.setRotationQuaternion(a,n,r);return}var s=t._tmpMats[0];if(!!this._getNegativeRotationToRef(s,r)){var f=t._tmpMats[1];M.RotationAxisToRef(e,i,f),s.multiplyToRef(f,f),this._rotateWithMatrix(f,n,r)}},t.prototype.setRotation=function(e,i,n){i===void 0&&(i=w.LOCAL),this.setYawPitchRoll(e.y,e.x,e.z,i,n)},t.prototype.setRotationQuaternion=function(e,i,n){if(i===void 0&&(i=w.LOCAL),i===w.LOCAL){this._decompose(),this._localRotation.copyFrom(e),this._markAsDirtyAndCompose();return}var r=t._tmpMats[0];if(!!this._getNegativeRotationToRef(r,n)){var a=t._tmpMats[1];M.FromQuaternionToRef(e,a),r.multiplyToRef(a,a),this._rotateWithMatrix(a,i,n)}},t.prototype.setRotationMatrix=function(e,i,n){if(i===void 0&&(i=w.LOCAL),i===w.LOCAL){var r=t._tmpQuat;N.FromRotationMatrixToRef(e,r),this.setRotationQuaternion(r,i,n);return}var a=t._tmpMats[0];if(!!this._getNegativeRotationToRef(a,n)){var s=t._tmpMats[1];s.copyFrom(e),a.multiplyToRef(e,s),this._rotateWithMatrix(s,i,n)}},t.prototype._rotateWithMatrix=function(e,i,n){i===void 0&&(i=w.LOCAL);var r=this.getLocalMatrix(),a=r.m[12],s=r.m[13],f=r.m[14],l=this.getParent(),u=t._tmpMats[3],h=t._tmpMats[4];l&&i==w.WORLD?(n?(u.copyFrom(n.getWorldMatrix()),l.getAbsoluteTransform().multiplyToRef(u,u)):u.copyFrom(l.getAbsoluteTransform()),h.copyFrom(u),h.invert(),r.multiplyToRef(u,r),r.multiplyToRef(e,r),r.multiplyToRef(h,r)):i==w.WORLD&&n?(u.copyFrom(n.getWorldMatrix()),h.copyFrom(u),h.invert(),r.multiplyToRef(u,r),r.multiplyToRef(e,r),r.multiplyToRef(h,r)):r.multiplyToRef(e,r),r.setTranslationFromFloats(a,s,f),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},t.prototype._getNegativeRotationToRef=function(e,i){var n=t._tmpMats[2];return e.copyFrom(this.getAbsoluteTransform()),i&&(e.multiplyToRef(i.getWorldMatrix(),e),M.ScalingToRef(i.scaling.x,i.scaling.y,i.scaling.z,n)),e.invert(),isNaN(e.m[0])?!1:(n.multiplyAtIndex(0,this._scalingDeterminant),e.multiplyToRef(n,e),!0)},t.prototype.getPosition=function(e,i){e===void 0&&(e=w.LOCAL),i===void 0&&(i=null);var n=I.Zero();return this.getPositionToRef(e,i,n),n},t.prototype.getPositionToRef=function(e,i,n){if(e===void 0&&(e=w.LOCAL),e==w.LOCAL){var r=this.getLocalMatrix();n.x=r.m[12],n.y=r.m[13],n.z=r.m[14]}else{var a=null;i&&(a=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var s=t._tmpMats[0];i&&a?(s.copyFrom(this.getAbsoluteTransform()),s.multiplyToRef(a,s)):s=this.getAbsoluteTransform(),n.x=s.m[12],n.y=s.m[13],n.z=s.m[14]}},t.prototype.getAbsolutePosition=function(e){e===void 0&&(e=null);var i=I.Zero();return this.getPositionToRef(w.WORLD,e,i),i},t.prototype.getAbsolutePositionToRef=function(e,i){this.getPositionToRef(w.WORLD,e,i)},t.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var e=this._skeleton.getPoseMatrix();e&&this._absoluteTransform.multiplyToRef(e,this._absoluteTransform)}for(var i=this.children,n=i.length,r=0;r<n;r++)i[r].computeAbsoluteTransforms()},t.prototype.getDirection=function(e,i){i===void 0&&(i=null);var n=I.Zero();return this.getDirectionToRef(e,i,n),n},t.prototype.getDirectionToRef=function(e,i,n){i===void 0&&(i=null);var r=null;i&&(r=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=t._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),i&&r&&a.multiplyToRef(r,a),I.TransformNormalToRef(e,a,n),n.normalize()},t.prototype.getRotation=function(e,i){e===void 0&&(e=w.LOCAL),i===void 0&&(i=null);var n=I.Zero();return this.getRotationToRef(e,i,n),n},t.prototype.getRotationToRef=function(e,i,n){e===void 0&&(e=w.LOCAL),i===void 0&&(i=null);var r=t._tmpQuat;this.getRotationQuaternionToRef(e,i,r),r.toEulerAnglesToRef(n)},t.prototype.getRotationQuaternion=function(e,i){e===void 0&&(e=w.LOCAL),i===void 0&&(i=null);var n=N.Identity();return this.getRotationQuaternionToRef(e,i,n),n},t.prototype.getRotationQuaternionToRef=function(e,i,n){if(e===void 0&&(e=w.LOCAL),i===void 0&&(i=null),e==w.LOCAL)this._decompose(),n.copyFrom(this._localRotation);else{var r=t._tmpMats[0],a=this.getAbsoluteTransform();i?a.multiplyToRef(i.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.decompose(void 0,n,void 0)}},t.prototype.getRotationMatrix=function(e,i){e===void 0&&(e=w.LOCAL);var n=M.Identity();return this.getRotationMatrixToRef(e,i,n),n},t.prototype.getRotationMatrixToRef=function(e,i,n){if(e===void 0&&(e=w.LOCAL),e==w.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(n);else{var r=t._tmpMats[0],a=this.getAbsoluteTransform();i?a.multiplyToRef(i.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.getRotationMatrixToRef(n)}},t.prototype.getAbsolutePositionFromLocal=function(e,i){i===void 0&&(i=null);var n=I.Zero();return this.getAbsolutePositionFromLocalToRef(e,i,n),n},t.prototype.getAbsolutePositionFromLocalToRef=function(e,i,n){i===void 0&&(i=null);var r=null;i&&(r=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=t._tmpMats[0];i&&r?(a.copyFrom(this.getAbsoluteTransform()),a.multiplyToRef(r,a)):a=this.getAbsoluteTransform(),I.TransformCoordinatesToRef(e,a,n)},t.prototype.getLocalPositionFromAbsolute=function(e,i){i===void 0&&(i=null);var n=I.Zero();return this.getLocalPositionFromAbsoluteToRef(e,i,n),n},t.prototype.getLocalPositionFromAbsoluteToRef=function(e,i,n){i===void 0&&(i=null);var r=null;i&&(r=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=t._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),i&&r&&a.multiplyToRef(r,a),a.invert(),I.TransformCoordinatesToRef(e,a,n)},t.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},t._tmpVecs=Xe.BuildArray(2,I.Zero),t._tmpQuat=N.Identity(),t._tmpMats=Xe.BuildArray(5,M.Identity),t}(Se),et=function(){function o(t,e,i,n,r,a,s,f,l,u){i===void 0&&(i=0),n===void 0&&(n=100),r===void 0&&(r=!1),a===void 0&&(a=1),u===void 0&&(u=!1),this.target=e,this.fromFrame=i,this.toFrame=n,this.loopAnimation=r,this.onAnimationEnd=s,this.onAnimationLoop=l,this.isAdditive=u,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new se,this.onAnimationLoopObservable=new se,this._scene=t,f&&this.appendAnimations(e,f),this._speedRatio=a,t._activeAnimatables.push(this)}return Object.defineProperty(o.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"weight",{get:function(){return this._weight},set:function(t){if(t===-1){this._weight=-1;return}this._weight=Math.min(Math.max(t,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(t){for(var e=0;e<this._runtimeAnimations.length;e++){var i=this._runtimeAnimations[e];i._prepareForSpeedRatioChange(t)}this._speedRatio=t},enumerable:!1,configurable:!0}),o.prototype.syncWith=function(t){if(this._syncRoot=t,t){var e=this._scene._activeAnimatables.indexOf(this);e>-1&&(this._scene._activeAnimatables.splice(e,1),this._scene._activeAnimatables.push(this))}return this},o.prototype.getAnimations=function(){return this._runtimeAnimations},o.prototype.appendAnimations=function(t,e){for(var i=this,n=0;n<e.length;n++){var r=e[n],a=new In(t,r,this._scene,this);a._onLoop=function(){i.onAnimationLoopObservable.notifyObservers(i),i.onAnimationLoop&&i.onAnimationLoop()},this._runtimeAnimations.push(a)}},o.prototype.getAnimationByTargetProperty=function(t){for(var e=this._runtimeAnimations,i=0;i<e.length;i++)if(e[i].animation.targetProperty===t)return e[i].animation;return null},o.prototype.getRuntimeAnimationByTargetProperty=function(t){for(var e=this._runtimeAnimations,i=0;i<e.length;i++)if(e[i].animation.targetProperty===t)return e[i];return null},o.prototype.reset=function(){for(var t=this._runtimeAnimations,e=0;e<t.length;e++)t[e].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},o.prototype.enableBlending=function(t){for(var e=this._runtimeAnimations,i=0;i<e.length;i++)e[i].animation.enableBlending=!0,e[i].animation.blendingSpeed=t},o.prototype.disableBlending=function(){for(var t=this._runtimeAnimations,e=0;e<t.length;e++)t[e].animation.enableBlending=!1},o.prototype.goToFrame=function(t){var e=this._runtimeAnimations;if(e[0]){var i=e[0].animation.framePerSecond,n=e[0].currentFrame,r=this.speedRatio===0?0:(t-n)/i*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=r}for(var a=0;a<e.length;a++)e[a].goToFrame(t)},o.prototype.pause=function(){this._paused||(this._paused=!0)},o.prototype.restart=function(){this._paused=!1},o.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},o.prototype.stop=function(t,e){if(t||e){var i=this._scene._activeAnimatables.indexOf(this);if(i>-1){for(var n=this._runtimeAnimations,r=n.length-1;r>=0;r--){var a=n[r];t&&a.animation.name!=t||e&&!e(a.target)||(a.dispose(),n.splice(r,1))}n.length==0&&(this._scene._activeAnimatables.splice(i,1),this._raiseOnAnimationEnd())}}else{var r=this._scene._activeAnimatables.indexOf(this);if(r>-1){this._scene._activeAnimatables.splice(r,1);for(var n=this._runtimeAnimations,r=0;r<n.length;r++)n[r].dispose();this._raiseOnAnimationEnd()}}},o.prototype.waitAsync=function(){var t=this;return new Promise(function(e,i){t.onAnimationEndObservable.add(function(){e(t)},void 0,void 0,t,!0)})},o.prototype._animate=function(t){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=t),!0;if(this._localDelayOffset===null?(this._localDelayOffset=t,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=t-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var e=!1,i=this._runtimeAnimations,n;for(n=0;n<i.length;n++){var r=i[n],a=r.animate(t-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);e=e||a}if(this.animationStarted=e,!e){if(this.disposeOnEnd)for(n=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(n,1),n=0;n<i.length;n++)i[n].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return e},o}();G.prototype._animate=function(){if(!!this.animationsEnabled){var o=ye.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=o}this.deltaTime=this.useConstantAnimationDeltaTime?16:(o-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=o;var t=this._activeAnimatables;if(t.length!==0){this._animationTime+=this.deltaTime;for(var e=this._animationTime,i=0;i<t.length;i++){var n=t[i];!n._animate(e)&&n.disposeOnEnd&&i--}this._processLateAnimationBindings()}}};G.prototype.beginWeightedAnimation=function(o,t,e,i,n,r,a,s,f,l,u){i===void 0&&(i=1),r===void 0&&(r=1),u===void 0&&(u=!1);var h=this.beginAnimation(o,t,e,n,r,a,s,!1,f,l,u);return h.weight=i,h};G.prototype.beginAnimation=function(o,t,e,i,n,r,a,s,f,l,u){n===void 0&&(n=1),s===void 0&&(s=!0),u===void 0&&(u=!1),t>e&&n>0&&(n*=-1),s&&this.stopAnimation(o,void 0,f),a||(a=new et(this,o,t,e,i,n,r,void 0,l,u));var h=f?f(o):!0;if(o.animations&&h&&a.appendAnimations(o,o.animations),o.getAnimatables)for(var c=o.getAnimatables(),p=0;p<c.length;p++)this.beginAnimation(c[p],t,e,i,n,r,a,s,f,l);return a.reset(),a};G.prototype.beginHierarchyAnimation=function(o,t,e,i,n,r,a,s,f,l,u,h){r===void 0&&(r=1),f===void 0&&(f=!0),h===void 0&&(h=!1);var c=o.getDescendants(t),p=[];p.push(this.beginAnimation(o,e,i,n,r,a,s,f,l,void 0,h));for(var d=0,S=c;d<S.length;d++){var _=S[d];p.push(this.beginAnimation(_,e,i,n,r,a,s,f,l,void 0,h))}return p};G.prototype.beginDirectAnimation=function(o,t,e,i,n,r,a,s,f){f===void 0&&(f=!1),r===void 0&&(r=1),e>i&&r>0&&(r*=-1);var l=new et(this,o,e,i,n,r,a,t,s,f);return l};G.prototype.beginDirectHierarchyAnimation=function(o,t,e,i,n,r,a,s,f,l){l===void 0&&(l=!1);var u=o.getDescendants(t),h=[];h.push(this.beginDirectAnimation(o,e,i,n,r,a,s,f,l));for(var c=0,p=u;c<p.length;c++){var d=p[c];h.push(this.beginDirectAnimation(d,e,i,n,r,a,s,f,l))}return h};G.prototype.getAnimatableByTarget=function(o){for(var t=0;t<this._activeAnimatables.length;t++)if(this._activeAnimatables[t].target===o)return this._activeAnimatables[t];return null};G.prototype.getAllAnimatablesByTarget=function(o){for(var t=[],e=0;e<this._activeAnimatables.length;e++)this._activeAnimatables[e].target===o&&t.push(this._activeAnimatables[e]);return t};G.prototype.stopAnimation=function(o,t,e){for(var i=this.getAllAnimatablesByTarget(o),n=0,r=i;n<r.length;n++){var a=r[n];a.stop(t,e)}};G.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var o=0;o<this._activeAnimatables.length;o++)this._activeAnimatables[o].stop();this._activeAnimatables=[]}for(var t=0,e=this.animationGroups;t<e.length;t++){var i=e[t];i.stop()}};G.prototype._registerTargetForLateAnimationBinding=function(o,t){var e=o.target;this._registeredForLateAnimationBindings.pushNoDuplicate(e),e._lateAnimationHolders||(e._lateAnimationHolders={}),e._lateAnimationHolders[o.targetPath]||(e._lateAnimationHolders[o.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:t}),o.isAdditive?(e._lateAnimationHolders[o.targetPath].additiveAnimations.push(o),e._lateAnimationHolders[o.targetPath].totalAdditiveWeight+=o.weight):(e._lateAnimationHolders[o.targetPath].animations.push(o),e._lateAnimationHolders[o.targetPath].totalWeight+=o.weight)};G.prototype._processLateAnimationBindingsForMatrices=function(o){if(o.totalWeight===0&&o.totalAdditiveWeight===0)return o.originalValue;var t=1,e=L.Vector3[0],i=L.Vector3[1],n=L.Quaternion[0],r=0,a=o.animations[0],s=o.originalValue,f=1,l=!1;if(o.totalWeight<1)f=1-o.totalWeight,s.decompose(i,n,e);else{if(r=1,t=o.totalWeight,f=a.weight/t,f==1)if(o.totalAdditiveWeight)l=!0;else return a.currentValue;a.currentValue.decompose(i,n,e)}if(!l){i.scaleInPlace(f),e.scaleInPlace(f),n.scaleInPlace(f);for(var u=r;u<o.animations.length;u++){var h=o.animations[u];if(h.weight!==0){var f=h.weight/t,c=L.Vector3[2],p=L.Vector3[3],d=L.Quaternion[1];h.currentValue.decompose(p,d,c),p.scaleAndAddToRef(f,i),d.scaleAndAddToRef(f,n),c.scaleAndAddToRef(f,e)}}}for(var S=0;S<o.additiveAnimations.length;S++){var h=o.additiveAnimations[S];if(h.weight!==0){var c=L.Vector3[2],p=L.Vector3[3],d=L.Quaternion[1];h.currentValue.decompose(p,d,c),p.multiplyToRef(i,p),I.LerpToRef(i,p,h.weight,i),n.multiplyToRef(d,d),N.SlerpToRef(n,d,h.weight,n),c.scaleAndAddToRef(h.weight,e)}}var _=a?a._animationState.workValue:L.Matrix[0].clone();return M.ComposeToRef(i,n,e,_),_};G.prototype._processLateAnimationBindingsForQuaternions=function(o,t){if(o.totalWeight===0&&o.totalAdditiveWeight===0)return t;var e=o.animations[0],i=o.originalValue,n=t;if(o.totalWeight===0&&o.totalAdditiveWeight>0)n.copyFrom(i);else if(o.animations.length===1){if(N.SlerpToRef(i,e.currentValue,Math.min(1,o.totalWeight),n),o.totalAdditiveWeight===0)return n}else if(o.animations.length>1){var r=1,a=void 0,s=void 0;if(o.totalWeight<1){var f=1-o.totalWeight;a=[],s=[],a.push(i),s.push(f)}else{if(o.animations.length===2&&(N.SlerpToRef(o.animations[0].currentValue,o.animations[1].currentValue,o.animations[1].weight/o.totalWeight,t),o.totalAdditiveWeight===0))return t;a=[],s=[],r=o.totalWeight}for(var l=0;l<o.animations.length;l++){var u=o.animations[l];a.push(u.currentValue),s.push(u.weight/r)}for(var h=0,c=0;c<a.length;){if(!c){N.SlerpToRef(a[c],a[c+1],s[c+1]/(s[c]+s[c+1]),t),n=t,h=s[c]+s[c+1],c+=2;continue}h+=s[c],N.SlerpToRef(n,a[c],s[c]/h,n),c++}}for(var p=0;p<o.additiveAnimations.length;p++){var u=o.additiveAnimations[p];u.weight!==0&&(n.multiplyToRef(u.currentValue,L.Quaternion[0]),N.SlerpToRef(n,L.Quaternion[0],u.weight,n))}return n};G.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var o=0;o<this._registeredForLateAnimationBindings.length;o++){var t=this._registeredForLateAnimationBindings.data[o];for(var e in t._lateAnimationHolders){var i=t._lateAnimationHolders[e],n=i.animations[0],r=i.originalValue,a=R.AllowMatrixDecomposeForInterpolation&&r.m,s=t[e];if(a)s=this._processLateAnimationBindingsForMatrices(i);else{var f=r.w!==void 0;if(f)s=this._processLateAnimationBindingsForQuaternions(i,s||N.Identity());else{var l=0,u=1;if(i.totalWeight<1)n&&r.scale?s=r.scale(1-i.totalWeight):n?s=r*(1-i.totalWeight):r.clone?s=r.clone():s=r;else if(n){u=i.totalWeight;var h=n.weight/u;h!==1?n.currentValue.scale?s=n.currentValue.scale(h):s=n.currentValue*h:s=n.currentValue,l=1}for(var c=l;c<i.animations.length;c++){var p=i.animations[c],d=p.weight/u;if(d)p.currentValue.scaleAndAddToRef?p.currentValue.scaleAndAddToRef(d,s):s+=p.currentValue*d;else continue}for(var S=0;S<i.additiveAnimations.length;S++){var p=i.additiveAnimations[S],d=p.weight;if(d)p.currentValue.scaleAndAddToRef?p.currentValue.scaleAndAddToRef(d,s):s+=p.currentValue*d;else continue}}}t[e]=s}t._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}};bn.prototype.copyAnimationRange=function(o,t,e,i,n){i===void 0&&(i=!1),n===void 0&&(n=null),this.animations.length===0&&(this.animations.push(new R(this.name,"_matrix",o.animations[0].framePerSecond,R.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var r=o.animations[0].getRange(t);if(!r)return!1;for(var a=r.from,s=r.to,f=o.animations[0].getKeys(),l=o.length,u=o.getParent(),h=this.getParent(),c=i&&u&&l&&this.length&&l!==this.length,p=c&&h&&u?h.length/u.length:1,d=i&&!h&&n&&(n.x!==1||n.y!==1||n.z!==1),S=this.animations[0].getKeys(),_,y,m,T=0,b=f.length;T<b;T++)_=f[T],_.frame>=a&&_.frame<=s&&(i?(m=_.value.clone(),c?(y=m.getTranslation(),m.setTranslation(y.scaleInPlace(p))):d&&n?(y=m.getTranslation(),m.setTranslation(y.multiplyInPlace(n))):m=_.value):m=_.value,S.push({frame:_.frame+e,value:m}));return this.animations[0].createRange(t,a+e,s+e),!0};const De=[-1,0,1],de=Math.PI/2,ke=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,-1],[0,0,1]],Mn=[[0,.3,.7],[0,.6,.3],[1,1,1],[1,.8,0],[.7,0,.2],[1,.3,0]],Pn=[[0,-de,0],[0,de,0],[de,0,0],[-de,0,0],[0,0,0],[Math.PI,0,0]],Cn=(...o)=>new Promise(t=>{R.CreateAndStartAnimation("",...o).onAnimationEnd=t}),Rn=o=>{const t=new Je("",.4,1.2,7,I.Zero(),o);return t.wheelPrecision=100,t.lowerRadiusLimit=6,t.upperRadiusLimit=8,t},Ln=o=>{const t=Ke.CreateBox("",{size:1},o),e=De.flatMap(n=>De.flatMap(r=>De.map(a=>{const s=t.createInstance("");return s.position.set(n,r,a),s})));for(const[n,r]of ke.entries()){const a=je.CreatePlane("",{size:.9},o);a.material=new Ne("",o),a.material.ambientColor.set(...Mn[n]),a.isVisible=!1;for(const s of e){const f=s.position.add(r);if(e.some(u=>u.position.equals(f)))continue;const l=a.createInstance("");l.parent=s,l.rotation.set(...Pn[n]),l.position.set(...r).scaleInPlace(.501)}}const i=new Map(ke.map((n,r)=>{const a=n.findIndex(c=>c),s=de*n[a],f="xyz"[a],l=`rotation.${f}`,u=c=>c.position.asArray().every((p,d)=>!n[d]||n[d]===p),h=new Ge("",o);return h.position.set(...n),["FBUDLR"[r],async(c,p)=>{if(!c)return;const d=s*c,S=e.filter(u);for(const _ of S)_.setParent(h);p?await Cn(h,l,60,p,0,d,0):h.rotation[f]=d;for(const _ of S)_.setParent(null),_.position.set(..._.position.asArray().map(y=>Math.round(y))),_.rotation.set(..._.rotation.asArray().map(y=>Math.round(y/de)*de));h.rotation.set(0,0,0)}]}));return(n,r,a=0)=>{var s;return(s=i.get(n))==null?void 0:s(r,a)}};export{Rn as createCamera,Ln as createGeometry};
//# sourceMappingURL=geometry.4a204530.js.map

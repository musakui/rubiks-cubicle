import{V as W,a as xe,C as Ie,M as z,b as _,c as ie,d as k,S as O,e as b,L as Z,f as ue,G as Le,g as H,s as m,h as B,T as me,i as D,j as I,I as ye,P as De,_ as he,k as P,l as be,m as Re,n as ae,o as ee,p as K,q as Oe,r as Fe,B as Ne,D as we,A as Ue,Q as X,t as Xe,u as y,v as C,w as ge,N as Ve,x as Be,H as te}from"./scene.166bd9f8.js";import{_ as j,v as ce,L as de,O as re,z as d,S as Q,x as oe,E as R,G as g,P as We}from"./vendor.db607760.js";W.CreateBox=function(o){var t=6,e=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23],n=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],i=[],r=[],a=o.width||o.size||1,s=o.height||o.size||1,f=o.depth||o.size||1,l=o.wrap||!1,c=o.topBaseAt===void 0?1:o.topBaseAt,p=o.bottomBaseAt===void 0?0:o.bottomBaseAt;c=(c+4)%4,p=(p+4)%4;var h=[2,0,3,1],v=[2,0,1,3],u=h[c],S=v[p],E=[1,-1,1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,-1,1,-1,1,1,1,1,-1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,1];if(l){e=[2,3,0,2,0,1,4,5,6,4,6,7,9,10,11,9,11,8,12,14,15,12,13,14],E=[-1,1,1,1,1,1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,1,1,1,-1,1,-1,-1,1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1];for(var T=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1]],x=[[-1,-1,1],[1,-1,1],[1,-1,-1],[-1,-1,-1]],w=[17,18,19,16],L=[22,23,20,21];u>0;)T.unshift(T.pop()),w.unshift(w.pop()),u--;for(;S>0;)x.unshift(x.pop()),L.unshift(L.pop()),S--;T=T.flat(),x=x.flat(),E=E.concat(T).concat(x),e.push(w[0],w[2],w[3],w[0],w[1],w[2]),e.push(L[0],L[2],L[3],L[0],L[1],L[2])}var F=[a/2,s/2,f/2];r=E.reduce(function(Pe,Ce,Me){return Pe.concat(Ce*F[Me%3])},[]);for(var q=o.sideOrientation===0?0:o.sideOrientation||W.DEFAULTSIDE,N=o.faceUV||new Array(6),G=o.faceColors,J=[],Y=0;Y<6;Y++)N[Y]===void 0&&(N[Y]=new xe(0,0,1,1)),G&&G[Y]===void 0&&(G[Y]=new Ie(1,1,1,1));for(var U=0;U<t;U++)if(i.push(N[U].z,N[U].w),i.push(N[U].x,N[U].w),i.push(N[U].x,N[U].y),i.push(N[U].z,N[U].y),G)for(var ve=0;ve<4;ve++)J.push(G[U].r,G[U].g,G[U].b,G[U].a);W._ComputeSides(q,r,e,n,i,o.frontUVs,o.backUVs);var $=new W;if($.indices=e,$.positions=r,$.normals=n,$.uvs=i,G){var Ae=q===W.DOUBLESIDE?J.concat(J):J;$.colors=Ae}return $};z.CreateBox=function(o,t,e,n,i){e===void 0&&(e=null);var r={size:t,sideOrientation:i,updatable:n};return Se.CreateBox(o,r,e)};var Se=function(){function o(){}return o.CreateBox=function(t,e,n){n===void 0&&(n=null);var i=new z(t,n);e.sideOrientation=z._GetDefaultSideOrientation(e.sideOrientation),i._originalBuilderSideOrientation=e.sideOrientation;var r=W.CreateBox(e);return r.applyToMesh(i,e.updatable),i},o}();W.CreatePlane=function(o){var t=[],e=[],n=[],i=[],r=o.width||o.size||1,a=o.height||o.size||1,s=o.sideOrientation===0?0:o.sideOrientation||W.DEFAULTSIDE,f=r/2,l=a/2;e.push(-f,-l,0),n.push(0,0,-1),i.push(0,0),e.push(f,-l,0),n.push(0,0,-1),i.push(1,0),e.push(f,l,0),n.push(0,0,-1),i.push(1,1),e.push(-f,l,0),n.push(0,0,-1),i.push(0,1),t.push(0),t.push(1),t.push(2),t.push(0),t.push(2),t.push(3),W._ComputeSides(s,e,t,n,i,o.frontUVs,o.backUVs);var c=new W;return c.indices=t,c.positions=e,c.normals=n,c.uvs=i,c};z.CreatePlane=function(o,t,e,n,i){var r={size:t,width:t,height:t,sideOrientation:i,updatable:n};return Ee.CreatePlane(o,r,e)};var Ee=function(){function o(){}return o.CreatePlane=function(t,e,n){n===void 0&&(n=null);var i=new z(t,n);e.sideOrientation=z._GetDefaultSideOrientation(e.sideOrientation),i._originalBuilderSideOrientation=e.sideOrientation;var r=W.CreatePlane(e);return r.applyToMesh(i,e.updatable),e.sourcePlane&&(i.translate(e.sourcePlane.normal,-e.sourcePlane.d),i.setDirection(e.sourcePlane.normal.scale(-1))),i},o}(),se=function(){function o(){this.previousWorldMatrices={},this.previousBones={}}return o.AddUniforms=function(t){t.push("previousWorld","previousViewProjection")},o.AddSamplers=function(t){},o.prototype.bindForSubMesh=function(t,e,n,i,r){e.prePassRenderer&&e.prePassRenderer.enabled&&e.prePassRenderer.getIndex(2)!==-1&&(this.previousWorldMatrices[n.uniqueId]||(this.previousWorldMatrices[n.uniqueId]=_.Identity()),this.previousViewProjection||(this.previousViewProjection=e.getTransformMatrix()),t.setMatrix("previousWorld",this.previousWorldMatrices[n.uniqueId]),t.setMatrix("previousViewProjection",this.previousViewProjection),this.previousWorldMatrices[n.uniqueId]=i.clone(),this.previousViewProjection=e.getTransformMatrix().clone())},o}(),He=function(o){j(t,o);function t(e,n){var i=o.call(this,e,n)||this;return i._normalMatrix=new _,i._storeEffectOnSubMeshes=!0,i}return t.prototype.getEffect=function(){return this._activeEffect},t.prototype.isReady=function(e,n){return e?!e.subMeshes||e.subMeshes.length===0?!0:this.isReadyForSubMesh(e,e.subMeshes[0],n):!1},t.prototype._isReadyForSubMesh=function(e){var n=e._materialDefines;return!!(!this.checkReadyOnEveryCall&&e.effect&&n&&n._renderId===this.getScene().getRenderId())},t.prototype.bindOnlyWorldMatrix=function(e){this._activeEffect.setMatrix("world",e)},t.prototype.bindOnlyNormalMatrix=function(e){this._activeEffect.setMatrix("normalMatrix",e)},t.prototype.bind=function(e,n){!n||this.bindForSubMesh(e,n,n.subMeshes[0])},t.prototype._afterBind=function(e,n){n===void 0&&(n=null),o.prototype._afterBind.call(this,e),this.getScene()._cachedEffect=n},t.prototype._mustRebind=function(e,n,i){return i===void 0&&(i=1),e.isCachedMaterialInvalid(this,n,i)},t}(ie),ze=function(){function o(){}return o.BindClipPlane=function(t,e){if(e.clipPlane){var n=e.clipPlane;t.setFloat4("vClipPlane",n.normal.x,n.normal.y,n.normal.z,n.d)}if(e.clipPlane2){var n=e.clipPlane2;t.setFloat4("vClipPlane2",n.normal.x,n.normal.y,n.normal.z,n.d)}if(e.clipPlane3){var n=e.clipPlane3;t.setFloat4("vClipPlane3",n.normal.x,n.normal.y,n.normal.z,n.d)}if(e.clipPlane4){var n=e.clipPlane4;t.setFloat4("vClipPlane4",n.normal.x,n.normal.y,n.normal.z,n.d)}if(e.clipPlane5){var n=e.clipPlane5;t.setFloat4("vClipPlane5",n.normal.x,n.normal.y,n.normal.z,n.d)}if(e.clipPlane6){var n=e.clipPlane6;t.setFloat4("vClipPlane6",n.normal.x,n.normal.y,n.normal.z,n.d)}},o}(),A=function(){function o(){}return o.BindEyePosition=function(t,e,n){if(n===void 0&&(n="vEyePosition"),e._forcedViewPosition){t.setVector3(n,e._forcedViewPosition);return}var i=e.activeCamera.globalPosition;i||(i=e.activeCamera.devicePosition),t.setVector3(n,e._mirroredCameraPosition?e._mirroredCameraPosition:i)},o.PrepareDefinesForMergedUV=function(t,e,n){e._needUVs=!0,e[n]=!0,t.getTextureMatrix().isIdentityAs3x2()?(e[n+"DIRECTUV"]=t.coordinatesIndex+1,t.coordinatesIndex===0?e.MAINUV1=!0:e.MAINUV2=!0):e[n+"DIRECTUV"]=0},o.BindTextureMatrix=function(t,e,n){var i=t.getTextureMatrix();e.updateMatrix(n+"Matrix",i)},o.GetFogState=function(t,e){return e.fogEnabled&&t.applyFog&&e.fogMode!==O.FOGMODE_NONE},o.PrepareDefinesForMisc=function(t,e,n,i,r,a,s){s._areMiscDirty&&(s.LOGARITHMICDEPTH=n,s.POINTSIZE=i,s.FOG=r&&this.GetFogState(t,e),s.NONUNIFORMSCALING=t.nonUniformScaling,s.ALPHATEST=a)},o.PrepareDefinesForFrameBoundValues=function(t,e,n,i,r,a){r===void 0&&(r=null),a===void 0&&(a=!1);var s=!1,f=!1,l=!1,c=!1,p=!1,h=!1,v=!1;f=r==null?t.clipPlane!==void 0&&t.clipPlane!==null:r,l=r==null?t.clipPlane2!==void 0&&t.clipPlane2!==null:r,c=r==null?t.clipPlane3!==void 0&&t.clipPlane3!==null:r,p=r==null?t.clipPlane4!==void 0&&t.clipPlane4!==null:r,h=r==null?t.clipPlane5!==void 0&&t.clipPlane5!==null:r,v=r==null?t.clipPlane6!==void 0&&t.clipPlane6!==null:r,n.CLIPPLANE!==f&&(n.CLIPPLANE=f,s=!0),n.CLIPPLANE2!==l&&(n.CLIPPLANE2=l,s=!0),n.CLIPPLANE3!==c&&(n.CLIPPLANE3=c,s=!0),n.CLIPPLANE4!==p&&(n.CLIPPLANE4=p,s=!0),n.CLIPPLANE5!==h&&(n.CLIPPLANE5=h,s=!0),n.CLIPPLANE6!==v&&(n.CLIPPLANE6=v,s=!0),n.DEPTHPREPASS!==!e.getColorWrite()&&(n.DEPTHPREPASS=!n.DEPTHPREPASS,s=!0),n.INSTANCES!==i&&(n.INSTANCES=i,s=!0),n.THIN_INSTANCES!==a&&(n.THIN_INSTANCES=a,s=!0),s&&n.markAsUnprocessed()},o.PrepareDefinesForBones=function(t,e){if(t.useBones&&t.computeBonesUsingShaders&&t.skeleton){e.NUM_BONE_INFLUENCERS=t.numBoneInfluencers;var n=e.BONETEXTURE!==void 0;if(t.skeleton.isUsingTextureForMatrices&&n)e.BONETEXTURE=!0;else{e.BonesPerMesh=t.skeleton.bones.length+1,e.BONETEXTURE=n?!1:void 0;var i=t.getScene().prePassRenderer;if(i&&i.enabled){var r=i.excludedSkinnedMesh.indexOf(t)===-1;e.BONES_VELOCITY_ENABLED=r}}}else e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0},o.PrepareDefinesForMorphTargets=function(t,e){var n=t.morphTargetManager;n?(e.MORPHTARGETS_UV=n.supportsUVs&&e.UV1,e.MORPHTARGETS_TANGENT=n.supportsTangents&&e.TANGENT,e.MORPHTARGETS_NORMAL=n.supportsNormals&&e.NORMAL,e.MORPHTARGETS=n.numInfluencers>0,e.NUM_MORPH_INFLUENCERS=n.numInfluencers):(e.MORPHTARGETS_UV=!1,e.MORPHTARGETS_TANGENT=!1,e.MORPHTARGETS_NORMAL=!1,e.MORPHTARGETS=!1,e.NUM_MORPH_INFLUENCERS=0)},o.PrepareDefinesForAttributes=function(t,e,n,i,r,a){if(r===void 0&&(r=!1),a===void 0&&(a=!0),!e._areAttributesDirty&&e._needNormals===e._normals&&e._needUVs===e._uvs)return!1;if(e._normals=e._needNormals,e._uvs=e._needUVs,e.NORMAL=e._needNormals&&t.isVerticesDataPresent(b.NormalKind),e._needNormals&&t.isVerticesDataPresent(b.TangentKind)&&(e.TANGENT=!0),e._needUVs?(e.UV1=t.isVerticesDataPresent(b.UVKind),e.UV2=t.isVerticesDataPresent(b.UV2Kind)):(e.UV1=!1,e.UV2=!1),n){var s=t.useVertexColors&&t.isVerticesDataPresent(b.ColorKind);e.VERTEXCOLOR=s,e.VERTEXALPHA=t.hasVertexAlpha&&s&&a}return i&&this.PrepareDefinesForBones(t,e),r&&this.PrepareDefinesForMorphTargets(t,e),!0},o.PrepareDefinesForMultiview=function(t,e){if(t.activeCamera){var n=e.MULTIVIEW;e.MULTIVIEW=t.activeCamera.outputRenderTarget!==null&&t.activeCamera.outputRenderTarget.getViewCount()>1,e.MULTIVIEW!=n&&e.markAsUnprocessed()}},o.PrepareDefinesForPrePass=function(t,e,n){var i=e.PREPASS;if(!!e._arePrePassDirty){var r=[{type:1,define:"PREPASS_POSITION",index:"PREPASS_POSITION_INDEX"},{type:2,define:"PREPASS_VELOCITY",index:"PREPASS_VELOCITY_INDEX"},{type:3,define:"PREPASS_REFLECTIVITY",index:"PREPASS_REFLECTIVITY_INDEX"},{type:0,define:"PREPASS_IRRADIANCE",index:"PREPASS_IRRADIANCE_INDEX"},{type:6,define:"PREPASS_ALBEDO",index:"PREPASS_ALBEDO_INDEX"},{type:5,define:"PREPASS_DEPTHNORMAL",index:"PREPASS_DEPTHNORMAL_INDEX"}];if(t.prePassRenderer&&t.prePassRenderer.enabled&&n){e.PREPASS=!0,e.SCENE_MRT_COUNT=t.prePassRenderer.mrtCount;for(var a=0;a<r.length;a++){var s=t.prePassRenderer.getIndex(r[a].type);s!==-1?(e[r[a].define]=!0,e[r[a].index]=s):e[r[a].define]=!1}}else{e.PREPASS=!1;for(var a=0;a<r.length;a++)e[r[a].define]=!1}e.PREPASS!=i&&(e.markAsUnprocessed(),e.markAsImageProcessingDirty())}},o.PrepareDefinesForLight=function(t,e,n,i,r,a,s){switch(s.needNormals=!0,r["LIGHT"+i]===void 0&&(s.needRebuild=!0),r["LIGHT"+i]=!0,r["SPOTLIGHT"+i]=!1,r["HEMILIGHT"+i]=!1,r["POINTLIGHT"+i]=!1,r["DIRLIGHT"+i]=!1,n.prepareLightSpecificDefines(r,i),r["LIGHT_FALLOFF_PHYSICAL"+i]=!1,r["LIGHT_FALLOFF_GLTF"+i]=!1,r["LIGHT_FALLOFF_STANDARD"+i]=!1,n.falloffType){case Z.FALLOFF_GLTF:r["LIGHT_FALLOFF_GLTF"+i]=!0;break;case Z.FALLOFF_PHYSICAL:r["LIGHT_FALLOFF_PHYSICAL"+i]=!0;break;case Z.FALLOFF_STANDARD:r["LIGHT_FALLOFF_STANDARD"+i]=!0;break}if(a&&!n.specular.equalsFloats(0,0,0)&&(s.specularEnabled=!0),r["SHADOW"+i]=!1,r["SHADOWCSM"+i]=!1,r["SHADOWCSMDEBUG"+i]=!1,r["SHADOWCSMNUM_CASCADES"+i]=!1,r["SHADOWCSMUSESHADOWMAXZ"+i]=!1,r["SHADOWCSMNOBLEND"+i]=!1,r["SHADOWCSM_RIGHTHANDED"+i]=!1,r["SHADOWPCF"+i]=!1,r["SHADOWPCSS"+i]=!1,r["SHADOWPOISSON"+i]=!1,r["SHADOWESM"+i]=!1,r["SHADOWCLOSEESM"+i]=!1,r["SHADOWCUBE"+i]=!1,r["SHADOWLOWQUALITY"+i]=!1,r["SHADOWMEDIUMQUALITY"+i]=!1,e&&e.receiveShadows&&t.shadowsEnabled&&n.shadowEnabled){var f=n.getShadowGenerator();if(f){var l=f.getShadowMap();l&&l.renderList&&l.renderList.length>0&&(s.shadowEnabled=!0,f.prepareDefines(r,i))}}n.lightmapMode!=Z.LIGHTMAP_DEFAULT?(s.lightmapMode=!0,r["LIGHTMAPEXCLUDED"+i]=!0,r["LIGHTMAPNOSPECULAR"+i]=n.lightmapMode==Z.LIGHTMAP_SHADOWSONLY):(r["LIGHTMAPEXCLUDED"+i]=!1,r["LIGHTMAPNOSPECULAR"+i]=!1)},o.PrepareDefinesForLights=function(t,e,n,i,r,a){if(r===void 0&&(r=4),a===void 0&&(a=!1),!n._areLightsDirty)return n._needNormals;var s=0,f={needNormals:!1,needRebuild:!1,lightmapMode:!1,shadowEnabled:!1,specularEnabled:!1};if(t.lightsEnabled&&!a)for(var l=0,c=e.lightSources;l<c.length;l++){var p=c[l];if(this.PrepareDefinesForLight(t,e,p,s,n,i,f),s++,s===r)break}n.SPECULARTERM=f.specularEnabled,n.SHADOWS=f.shadowEnabled;for(var h=s;h<r;h++)n["LIGHT"+h]!==void 0&&(n["LIGHT"+h]=!1,n["HEMILIGHT"+h]=!1,n["POINTLIGHT"+h]=!1,n["DIRLIGHT"+h]=!1,n["SPOTLIGHT"+h]=!1,n["SHADOW"+h]=!1,n["SHADOWCSM"+h]=!1,n["SHADOWCSMDEBUG"+h]=!1,n["SHADOWCSMNUM_CASCADES"+h]=!1,n["SHADOWCSMUSESHADOWMAXZ"+h]=!1,n["SHADOWCSMNOBLEND"+h]=!1,n["SHADOWCSM_RIGHTHANDED"+h]=!1,n["SHADOWPCF"+h]=!1,n["SHADOWPCSS"+h]=!1,n["SHADOWPOISSON"+h]=!1,n["SHADOWESM"+h]=!1,n["SHADOWCLOSEESM"+h]=!1,n["SHADOWCUBE"+h]=!1,n["SHADOWLOWQUALITY"+h]=!1,n["SHADOWMEDIUMQUALITY"+h]=!1);var v=t.getEngine().getCaps();return n.SHADOWFLOAT===void 0&&(f.needRebuild=!0),n.SHADOWFLOAT=f.shadowEnabled&&(v.textureFloatRender&&v.textureFloatLinearFiltering||v.textureHalfFloatRender&&v.textureHalfFloatLinearFiltering),n.LIGHTMAPEXCLUDED=f.lightmapMode,f.needRebuild&&n.rebuild(),f.needNormals},o.PrepareUniformsAndSamplersForLight=function(t,e,n,i,r,a){r===void 0&&(r=null),a===void 0&&(a=!1),r&&r.push("Light"+t),!a&&(e.push("vLightData"+t,"vLightDiffuse"+t,"vLightSpecular"+t,"vLightDirection"+t,"vLightFalloff"+t,"vLightGround"+t,"lightMatrix"+t,"shadowsInfo"+t,"depthValues"+t),n.push("shadowSampler"+t),n.push("depthSampler"+t),e.push("viewFrustumZ"+t,"cascadeBlendFactor"+t,"lightSizeUVCorrection"+t,"depthCorrection"+t,"penumbraDarkness"+t,"frustumLengths"+t),i&&(n.push("projectionLightSampler"+t),e.push("textureProjectionMatrix"+t)))},o.PrepareUniformsAndSamplersList=function(t,e,n,i){i===void 0&&(i=4);var r,a=null;if(t.uniformsNames){var s=t;r=s.uniformsNames,a=s.uniformBuffersNames,e=s.samplers,n=s.defines,i=s.maxSimultaneousLights||0}else r=t,e||(e=[]);for(var f=0;f<i&&n["LIGHT"+f];f++)this.PrepareUniformsAndSamplersForLight(f,r,e,n["PROJECTEDLIGHTTEXTURE"+f],a);n.NUM_MORPH_INFLUENCERS&&r.push("morphTargetInfluences")},o.HandleFallbacksForShadows=function(t,e,n,i){n===void 0&&(n=4),i===void 0&&(i=0);for(var r=0,a=0;a<n&&t["LIGHT"+a];a++)a>0&&(r=i+a,e.addFallback(r,"LIGHT"+a)),t.SHADOWS||(t["SHADOW"+a]&&e.addFallback(i,"SHADOW"+a),t["SHADOWPCF"+a]&&e.addFallback(i,"SHADOWPCF"+a),t["SHADOWPCSS"+a]&&e.addFallback(i,"SHADOWPCSS"+a),t["SHADOWPOISSON"+a]&&e.addFallback(i,"SHADOWPOISSON"+a),t["SHADOWESM"+a]&&e.addFallback(i,"SHADOWESM"+a),t["SHADOWCLOSEESM"+a]&&e.addFallback(i,"SHADOWCLOSEESM"+a));return r++},o.PrepareAttributesForMorphTargetsInfluencers=function(t,e,n){this._TmpMorphInfluencers.NUM_MORPH_INFLUENCERS=n,this.PrepareAttributesForMorphTargets(t,e,this._TmpMorphInfluencers)},o.PrepareAttributesForMorphTargets=function(t,e,n){var i=n.NUM_MORPH_INFLUENCERS;if(i>0&&ce.LastCreatedEngine)for(var r=ce.LastCreatedEngine.getCaps().maxVertexAttribs,a=e.morphTargetManager,s=a&&a.supportsNormals&&n.NORMAL,f=a&&a.supportsTangents&&n.TANGENT,l=a&&a.supportsUVs&&n.UV1,c=0;c<i;c++)t.push(b.PositionKind+c),s&&t.push(b.NormalKind+c),f&&t.push(b.TangentKind+c),l&&t.push(b.UVKind+"_"+c),t.length>r&&de.Error("Cannot add more vertex attributes for mesh "+e.name)},o.PrepareAttributesForBones=function(t,e,n,i){n.NUM_BONE_INFLUENCERS>0&&(i.addCPUSkinningFallback(0,e),t.push(b.MatricesIndicesKind),t.push(b.MatricesWeightsKind),n.NUM_BONE_INFLUENCERS>4&&(t.push(b.MatricesIndicesExtraKind),t.push(b.MatricesWeightsExtraKind)))},o.PrepareAttributesForInstances=function(t,e){(e.INSTANCES||e.THIN_INSTANCES)&&this.PushAttributesForInstances(t)},o.PushAttributesForInstances=function(t){t.push("world0"),t.push("world1"),t.push("world2"),t.push("world3")},o.BindLightProperties=function(t,e,n){t.transferToEffect(e,n+"")},o.BindLight=function(t,e,n,i,r,a){a===void 0&&(a=!1),t._bindLight(e,n,i,r,a)},o.BindLights=function(t,e,n,i,r,a){r===void 0&&(r=4),a===void 0&&(a=!1);for(var s=Math.min(e.lightSources.length,r),f=0;f<s;f++){var l=e.lightSources[f];this.BindLight(l,f,t,n,typeof i=="boolean"?i:i.SPECULARTERM,a)}},o.BindFogParameters=function(t,e,n,i){i===void 0&&(i=!1),t.fogEnabled&&e.applyFog&&t.fogMode!==O.FOGMODE_NONE&&(n.setFloat4("vFogInfos",t.fogMode,t.fogStart,t.fogEnd,t.fogDensity),i?(t.fogColor.toLinearSpaceToRef(this._tempFogColor),n.setColor3("vFogColor",this._tempFogColor)):n.setColor3("vFogColor",t.fogColor))},o.BindBonesParameters=function(t,e,n){if(!(!e||!t)&&(t.computeBonesUsingShaders&&e._bonesComputationForcedToCPU&&(t.computeBonesUsingShaders=!1),t.useBones&&t.computeBonesUsingShaders&&t.skeleton)){var i=t.skeleton;if(i.isUsingTextureForMatrices&&e.getUniformIndex("boneTextureWidth")>-1){var r=i.getTransformMatrixTexture(t);e.setTexture("boneSampler",r),e.setFloat("boneTextureWidth",4*(i.bones.length+1))}else{var a=i.getTransformMatrices(t);a&&(e.setMatrices("mBones",a),n&&t.getScene().prePassRenderer&&t.getScene().prePassRenderer.getIndex(2)&&(n.previousBones[t.uniqueId]&&e.setMatrices("mPreviousBones",n.previousBones[t.uniqueId]),o._CopyBonesTransformationMatrices(a,n.previousBones[t.uniqueId])))}}},o._CopyBonesTransformationMatrices=function(t,e){return e.set(t),e},o.BindMorphTargetParameters=function(t,e){var n=t.morphTargetManager;!t||!n||e.setFloatArray("morphTargetInfluences",n.influences)},o.BindLogDepth=function(t,e,n){t.LOGARITHMICDEPTH&&e.setFloat("logarithmicDepthConstant",2/(Math.log(n.activeCamera.maxZ+1)/Math.LN2))},o.BindClipPlane=function(t,e){ze.BindClipPlane(t,e)},o._TmpMorphInfluencers={NUM_MORPH_INFLUENCERS:0},o._tempFogColor=k.Black(),o}(),Ge=function(){function o(t){this._wrapU=1,this._wrapV=1,this.wrapR=1,this.anisotropicFilteringLevel=4,this.delayLoadState=0,this._texture=null,this._engine=null,this._cachedSize=ue.Zero(),this._cachedBaseSize=ue.Zero(),this._texture=t,this._texture&&(this._engine=this._texture.getEngine())}return Object.defineProperty(o.prototype,"wrapU",{get:function(){return this._wrapU},set:function(t){this._wrapU=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"wrapV",{get:function(){return this._wrapV},set:function(t){this._wrapV=t},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"coordinatesMode",{get:function(){return 0},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"isCube",{get:function(){return this._texture?this._texture.isCube:!1},set:function(t){!this._texture||(this._texture.isCube=t)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"is3D",{get:function(){return this._texture?this._texture.is3D:!1},set:function(t){!this._texture||(this._texture.is3D=t)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"is2DArray",{get:function(){return this._texture?this._texture.is2DArray:!1},set:function(t){!this._texture||(this._texture.is2DArray=t)},enumerable:!1,configurable:!0}),o.prototype.getClassName=function(){return"ThinTexture"},o.prototype.isReady=function(){return this.delayLoadState===4?(this.delayLoad(),!1):this._texture?this._texture.isReady:!1},o.prototype.delayLoad=function(){},o.prototype.getInternalTexture=function(){return this._texture},o.prototype.getSize=function(){if(this._texture){if(this._texture.width)return this._cachedSize.width=this._texture.width,this._cachedSize.height=this._texture.height,this._cachedSize;if(this._texture._size)return this._cachedSize.width=this._texture._size,this._cachedSize.height=this._texture._size,this._cachedSize}return this._cachedSize},o.prototype.getBaseSize=function(){return!this.isReady()||!this._texture?(this._cachedBaseSize.width=0,this._cachedBaseSize.height=0,this._cachedBaseSize):this._texture._size?(this._cachedBaseSize.width=this._texture._size,this._cachedBaseSize.height=this._texture._size,this._cachedBaseSize):(this._cachedBaseSize.width=this._texture.baseWidth,this._cachedBaseSize.height=this._texture.baseHeight,this._cachedBaseSize)},o.prototype.updateSamplingMode=function(t){this._texture&&this._engine&&this._engine.updateTextureSamplingMode(t,this._texture)},o.prototype.releaseInternalTexture=function(){this._texture&&(this._texture.dispose(),this._texture=null)},o.prototype.dispose=function(){this._texture&&(this.releaseInternalTexture(),this._engine=null)},o}(),ke=function(o){j(t,o);function t(e){var n=o.call(this,null)||this;return n.metadata=null,n.reservedDataStore=null,n._hasAlpha=!1,n.getAlphaFromRGB=!1,n.level=1,n.coordinatesIndex=0,n._coordinatesMode=0,n.wrapR=1,n.anisotropicFilteringLevel=t.DEFAULT_ANISOTROPIC_FILTERING_LEVEL,n._isCube=!1,n._gammaSpace=!0,n.invertZ=!1,n.lodLevelInAlpha=!1,n.isRenderTarget=!1,n._prefiltered=!1,n.animations=new Array,n.onDisposeObservable=new re,n._onDisposeObserver=null,n._scene=null,n._texture=null,n._uid=null,e?t._isScene(e)?n._scene=e:n._engine=e:n._scene=ce.LastCreatedScene,n._scene&&(n.uniqueId=n._scene.getUniqueId(),n._scene.addTexture(n),n._engine=n._scene.getEngine()),n._uid=null,n}return Object.defineProperty(t.prototype,"hasAlpha",{get:function(){return this._hasAlpha},set:function(e){this._hasAlpha!==e&&(this._hasAlpha=e,this._scene&&this._scene.markAllMaterialsAsDirty(17))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"coordinatesMode",{get:function(){return this._coordinatesMode},set:function(e){this._coordinatesMode!==e&&(this._coordinatesMode=e,this._scene&&this._scene.markAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wrapU",{get:function(){return this._wrapU},set:function(e){this._wrapU=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wrapV",{get:function(){return this._wrapV},set:function(e){this._wrapV=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isCube",{get:function(){return this._texture?this._texture.isCube:this._isCube},set:function(e){this._texture?this._texture.isCube=e:this._isCube=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"is3D",{get:function(){return this._texture?this._texture.is3D:!1},set:function(e){!this._texture||(this._texture.is3D=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"is2DArray",{get:function(){return this._texture?this._texture.is2DArray:!1},set:function(e){!this._texture||(this._texture.is2DArray=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"gammaSpace",{get:function(){if(this._texture)this._texture._gammaSpace===null&&(this._texture._gammaSpace=this._gammaSpace);else return this._gammaSpace;return this._texture._gammaSpace},set:function(e){if(this._texture){if(this._texture._gammaSpace===e)return;this._texture._gammaSpace=e}else{if(this._gammaSpace===e)return;this._gammaSpace=e}this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isRGBD",{get:function(){return this._texture!=null&&this._texture._isRGBD},set:function(e){this._texture&&(this._texture._isRGBD=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"noMipmap",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lodGenerationOffset",{get:function(){return this._texture?this._texture._lodGenerationOffset:0},set:function(e){this._texture&&(this._texture._lodGenerationOffset=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lodGenerationScale",{get:function(){return this._texture?this._texture._lodGenerationScale:0},set:function(e){this._texture&&(this._texture._lodGenerationScale=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"linearSpecularLOD",{get:function(){return this._texture?this._texture._linearSpecularLOD:!1},set:function(e){this._texture&&(this._texture._linearSpecularLOD=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"irradianceTexture",{get:function(){return this._texture?this._texture._irradianceTexture:null},set:function(e){this._texture&&(this._texture._irradianceTexture=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"uid",{get:function(){return this._uid||(this._uid=Le.RandomId()),this._uid},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return this.name},t.prototype.getClassName=function(){return"BaseTexture"},Object.defineProperty(t.prototype,"onDispose",{set:function(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isBlocking",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.getScene=function(){return this._scene},t.prototype._getEngine=function(){return this._engine},t.prototype.checkTransformsAreIdentical=function(e){return e!==null},t.prototype.getTextureMatrix=function(){return _.IdentityReadOnly},t.prototype.getReflectionTextureMatrix=function(){return _.IdentityReadOnly},t.prototype.isReadyOrNotBlocking=function(){return!this.isBlocking||this.isReady()},t.prototype.scale=function(e){},Object.defineProperty(t.prototype,"canRescale",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype._getFromCache=function(e,n,i,r){var a=this._getEngine();if(!a)return null;for(var s=a.getLoadedTexturesCache(),f=0;f<s.length;f++){var l=s[f];if((r===void 0||r===l.invertY)&&l.url===e&&l.generateMipMaps===!n&&(!i||i===l.samplingMode))return l.incrementReferences(),l}return null},t.prototype._rebuild=function(){},t.prototype.clone=function(){return null},Object.defineProperty(t.prototype,"textureType",{get:function(){return this._texture&&this._texture.type!==void 0?this._texture.type:0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textureFormat",{get:function(){return this._texture&&this._texture.format!==void 0?this._texture.format:5},enumerable:!1,configurable:!0}),t.prototype._markAllSubMeshesAsTexturesDirty=function(){var e=this.getScene();!e||e.markAllMaterialsAsDirty(1)},t.prototype.readPixels=function(e,n,i){if(e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=null),!this._texture)return null;var r=this.getSize(),a=r.width,s=r.height,f=this._getEngine();if(!f)return null;n!=0&&(a=a/Math.pow(2,n),s=s/Math.pow(2,n),a=Math.round(a),s=Math.round(s));try{return this._texture.isCube?f._readTexturePixels(this._texture,a,s,e,n,i):f._readTexturePixels(this._texture,a,s,-1,n,i)}catch{return null}},Object.defineProperty(t.prototype,"_lodTextureHigh",{get:function(){return this._texture?this._texture._lodTextureHigh:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_lodTextureMid",{get:function(){return this._texture?this._texture._lodTextureMid:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_lodTextureLow",{get:function(){return this._texture?this._texture._lodTextureLow:null},enumerable:!1,configurable:!0}),t.prototype.dispose=function(){if(this._scene){this._scene.stopAnimation&&this._scene.stopAnimation(this),this._scene._removePendingData(this);var e=this._scene.textures.indexOf(this);e>=0&&this._scene.textures.splice(e,1),this._scene.onTextureRemovedObservable.notifyObservers(this),this._scene=null}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),o.prototype.dispose.call(this)},t.prototype.serialize=function(){if(!this.name)return null;var e=H.Serialize(this);return H.AppendSerializedAnimations(this,e),e},t.WhenAllReady=function(e,n){var i=e.length;if(i===0){n();return}for(var r=0;r<e.length;r++){var a=e[r];if(a.isReady())--i===0&&n();else{var s=a.onLoadObservable;s&&s.addOnce(function(){--i===0&&n()})}}},t._isScene=function(e){return e.getClassName()==="Scene"},t.DEFAULT_ANISOTROPIC_FILTERING_LEVEL=4,d([m()],t.prototype,"uniqueId",void 0),d([m()],t.prototype,"name",void 0),d([m()],t.prototype,"metadata",void 0),d([m("hasAlpha")],t.prototype,"_hasAlpha",void 0),d([m()],t.prototype,"getAlphaFromRGB",void 0),d([m()],t.prototype,"level",void 0),d([m()],t.prototype,"coordinatesIndex",void 0),d([m("coordinatesMode")],t.prototype,"_coordinatesMode",void 0),d([m()],t.prototype,"wrapU",null),d([m()],t.prototype,"wrapV",null),d([m()],t.prototype,"wrapR",void 0),d([m()],t.prototype,"anisotropicFilteringLevel",void 0),d([m()],t.prototype,"isCube",null),d([m()],t.prototype,"is3D",null),d([m()],t.prototype,"is2DArray",null),d([m()],t.prototype,"gammaSpace",null),d([m()],t.prototype,"invertZ",void 0),d([m()],t.prototype,"lodLevelInAlpha",void 0),d([m()],t.prototype,"lodGenerationOffset",null),d([m()],t.prototype,"lodGenerationScale",null),d([m()],t.prototype,"linearSpecularLOD",null),d([B()],t.prototype,"irradianceTexture",null),d([m()],t.prototype,"isRenderTarget",void 0),t}(Ge),je=function(){function o(){}return o.GenerateBase64StringFromTexture=function(t,e,n){e===void 0&&(e=0),n===void 0&&(n=0);var i=t.getInternalTexture();if(!i)return null;var r=t.readPixels(e,n);if(!r)return null;var a=t.getSize(),s=a.width,f=a.height;if(r instanceof Float32Array){for(var l=r.byteLength/r.BYTES_PER_ELEMENT,c=new Uint8Array(l);--l>=0;){var p=r[l];p<0?p=0:p>1&&(p=1),c[l]=p*255}r=c}var h=document.createElement("canvas");h.width=s,h.height=f;var v=h.getContext("2d");if(!v)return null;var u=v.createImageData(s,f),S=u.data;if(S.set(r),v.putImageData(u,0,0),i.invertY){var E=document.createElement("canvas");E.width=s,E.height=f;var T=E.getContext("2d");return T?(T.translate(0,f),T.scale(1,-1),T.drawImage(h,0,0),E.toDataURL("image/png")):null}return h.toDataURL("image/png")},o}(),V=function(o){j(t,o);function t(e,n,i,r,a,s,f,l,c,p,h,v){i===void 0&&(i=!1),r===void 0&&(r=!0),a===void 0&&(a=t.TRILINEAR_SAMPLINGMODE),s===void 0&&(s=null),f===void 0&&(f=null),l===void 0&&(l=null),c===void 0&&(c=!1);var u=o.call(this,n)||this;u.url=null,u.uOffset=0,u.vOffset=0,u.uScale=1,u.vScale=1,u.uAng=0,u.vAng=0,u.wAng=0,u.uRotationCenter=.5,u.vRotationCenter=.5,u.wRotationCenter=.5,u.homogeneousRotationInUVTransform=!1,u.inspectableCustomProperties=null,u._noMipmap=!1,u._invertY=!1,u._rowGenerationMatrix=null,u._cachedTextureMatrix=null,u._projectionModeMatrix=null,u._t0=null,u._t1=null,u._t2=null,u._cachedUOffset=-1,u._cachedVOffset=-1,u._cachedUScale=0,u._cachedVScale=0,u._cachedUAng=-1,u._cachedVAng=-1,u._cachedWAng=-1,u._cachedProjectionMatrixId=-1,u._cachedURotationCenter=-1,u._cachedVRotationCenter=-1,u._cachedWRotationCenter=-1,u._cachedHomogeneousRotationInUVTransform=!1,u._cachedCoordinatesMode=-1,u._initialSamplingMode=t.BILINEAR_SAMPLINGMODE,u._buffer=null,u._deleteBuffer=!1,u._format=null,u._delayedOnLoad=null,u._delayedOnError=null,u.onLoadObservable=new re,u._isBlocking=!0,u.name=e||"",u.url=e,u._noMipmap=i,u._invertY=r,u._initialSamplingMode=a,u._buffer=l,u._deleteBuffer=c,u._mimeType=h,u._loaderOptions=v,p&&(u._format=p);var S=u.getScene(),E=u._getEngine();if(!E)return u;E.onBeforeTextureInitObservable.notifyObservers(u);var T=function(){u._texture&&(u._texture._invertVScale&&(u.vScale*=-1,u.vOffset+=1),u._texture._cachedWrapU!==null&&(u.wrapU=u._texture._cachedWrapU,u._texture._cachedWrapU=null),u._texture._cachedWrapV!==null&&(u.wrapV=u._texture._cachedWrapV,u._texture._cachedWrapV=null),u._texture._cachedWrapR!==null&&(u.wrapR=u._texture._cachedWrapR,u._texture._cachedWrapR=null)),u.onLoadObservable.hasObservers()&&u.onLoadObservable.notifyObservers(u),s&&s(),!u.isBlocking&&S&&S.resetCachedMaterial()};return u.url?(u._texture=u._getFromCache(u.url,i,a,r),u._texture?u._texture.isReady?me.SetImmediate(function(){return T()}):u._texture.onLoadedObservable.add(T):!S||!S.useDelayedTextureLoading?(u._texture=E.createTexture(u.url,i,r,S,a,T,f,u._buffer,void 0,u._format,null,h,v),c&&(u._buffer=null)):(u.delayLoadState=4,u._delayedOnLoad=T,u._delayedOnError=f),u):(u._delayedOnLoad=T,u._delayedOnError=f,u)}return Object.defineProperty(t.prototype,"noMipmap",{get:function(){return this._noMipmap},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"mimeType",{get:function(){return this._mimeType},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isBlocking",{get:function(){return this._isBlocking},set:function(e){this._isBlocking=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"samplingMode",{get:function(){return this._texture?this._texture.samplingMode:this._initialSamplingMode},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"invertY",{get:function(){return this._invertY},enumerable:!1,configurable:!0}),t.prototype.updateURL=function(e,n,i){n===void 0&&(n=null),this.url&&(this.releaseInternalTexture(),this.getScene().markAllMaterialsAsDirty(1)),(!this.name||Q.StartsWith(this.name,"data:"))&&(this.name=e),this.url=e,this._buffer=n,this.delayLoadState=4,i&&(this._delayedOnLoad=i),this.delayLoad()},t.prototype.delayLoad=function(){if(this.delayLoadState===4){var e=this.getScene();!e||(this.delayLoadState=1,this._texture=this._getFromCache(this.url,this._noMipmap,this.samplingMode,this._invertY),this._texture?this._delayedOnLoad&&(this._texture.isReady?me.SetImmediate(this._delayedOnLoad):this._texture.onLoadedObservable.add(this._delayedOnLoad)):(this._texture=e.getEngine().createTexture(this.url,this._noMipmap,this._invertY,e,this.samplingMode,this._delayedOnLoad,this._delayedOnError,this._buffer,null,this._format,null,this._mimeType,this._loaderOptions),this._deleteBuffer&&(this._buffer=null)),this._delayedOnLoad=null,this._delayedOnError=null)}},t.prototype._prepareRowForTextureGeneration=function(e,n,i,r){e*=this._cachedUScale,n*=this._cachedVScale,e-=this.uRotationCenter*this._cachedUScale,n-=this.vRotationCenter*this._cachedVScale,i-=this.wRotationCenter,D.TransformCoordinatesFromFloatsToRef(e,n,i,this._rowGenerationMatrix,r),r.x+=this.uRotationCenter*this._cachedUScale+this._cachedUOffset,r.y+=this.vRotationCenter*this._cachedVScale+this._cachedVOffset,r.z+=this.wRotationCenter},t.prototype.checkTransformsAreIdentical=function(e){return e!==null&&this.uOffset===e.uOffset&&this.vOffset===e.vOffset&&this.uScale===e.uScale&&this.vScale===e.vScale&&this.uAng===e.uAng&&this.vAng===e.vAng&&this.wAng===e.wAng},t.prototype.getTextureMatrix=function(e){var n=this;if(e===void 0&&(e=1),this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale*e===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng&&this.uRotationCenter===this._cachedURotationCenter&&this.vRotationCenter===this._cachedVRotationCenter&&this.wRotationCenter===this._cachedWRotationCenter&&this.homogeneousRotationInUVTransform===this._cachedHomogeneousRotationInUVTransform)return this._cachedTextureMatrix;this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale*e,this._cachedVScale=this.vScale,this._cachedUAng=this.uAng,this._cachedVAng=this.vAng,this._cachedWAng=this.wAng,this._cachedURotationCenter=this.uRotationCenter,this._cachedVRotationCenter=this.vRotationCenter,this._cachedWRotationCenter=this.wRotationCenter,this._cachedHomogeneousRotationInUVTransform=this.homogeneousRotationInUVTransform,(!this._cachedTextureMatrix||!this._rowGenerationMatrix)&&(this._cachedTextureMatrix=_.Zero(),this._rowGenerationMatrix=new _,this._t0=D.Zero(),this._t1=D.Zero(),this._t2=D.Zero()),_.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix),this.homogeneousRotationInUVTransform?(_.TranslationToRef(-this._cachedURotationCenter,-this._cachedVRotationCenter,-this._cachedWRotationCenter,I.Matrix[0]),_.TranslationToRef(this._cachedURotationCenter,this._cachedVRotationCenter,this._cachedWRotationCenter,I.Matrix[1]),_.ScalingToRef(this._cachedUScale,this._cachedVScale,0,I.Matrix[2]),_.TranslationToRef(this._cachedUOffset,this._cachedVOffset,0,I.Matrix[3]),I.Matrix[0].multiplyToRef(this._rowGenerationMatrix,this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(I.Matrix[1],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(I.Matrix[2],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(I.Matrix[3],this._cachedTextureMatrix),this._cachedTextureMatrix.setRowFromFloats(2,this._cachedTextureMatrix.m[12],this._cachedTextureMatrix.m[13],this._cachedTextureMatrix.m[14],1)):(this._prepareRowForTextureGeneration(0,0,0,this._t0),this._prepareRowForTextureGeneration(1,0,0,this._t1),this._prepareRowForTextureGeneration(0,1,0,this._t2),this._t1.subtractInPlace(this._t0),this._t2.subtractInPlace(this._t0),_.FromValuesToRef(this._t1.x,this._t1.y,this._t1.z,0,this._t2.x,this._t2.y,this._t2.z,0,this._t0.x,this._t0.y,this._t0.z,0,0,0,0,1,this._cachedTextureMatrix));var i=this.getScene();return i?(i.markAllMaterialsAsDirty(1,function(r){return r.hasTexture(n)}),this._cachedTextureMatrix):this._cachedTextureMatrix},t.prototype.getReflectionTextureMatrix=function(){var e=this,n=this.getScene();if(!n)return this._cachedTextureMatrix;if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale===this._cachedUScale&&this.vScale===this._cachedVScale&&this.coordinatesMode===this._cachedCoordinatesMode)if(this.coordinatesMode===t.PROJECTION_MODE){if(this._cachedProjectionMatrixId===n.getProjectionMatrix().updateFlag)return this._cachedTextureMatrix}else return this._cachedTextureMatrix;switch(this._cachedTextureMatrix||(this._cachedTextureMatrix=_.Zero()),this._projectionModeMatrix||(this._projectionModeMatrix=_.Zero()),this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale,this._cachedVScale=this.vScale,this._cachedCoordinatesMode=this.coordinatesMode,this.coordinatesMode){case t.PLANAR_MODE:_.IdentityToRef(this._cachedTextureMatrix),this._cachedTextureMatrix[0]=this.uScale,this._cachedTextureMatrix[5]=this.vScale,this._cachedTextureMatrix[12]=this.uOffset,this._cachedTextureMatrix[13]=this.vOffset;break;case t.PROJECTION_MODE:_.FromValuesToRef(.5,0,0,0,0,-.5,0,0,0,0,0,0,.5,.5,1,1,this._projectionModeMatrix);var i=n.getProjectionMatrix();this._cachedProjectionMatrixId=i.updateFlag,i.multiplyToRef(this._projectionModeMatrix,this._cachedTextureMatrix);break;default:_.IdentityToRef(this._cachedTextureMatrix);break}return n.markAllMaterialsAsDirty(1,function(r){return r.getActiveTextures().indexOf(e)!==-1}),this._cachedTextureMatrix},t.prototype.clone=function(){var e=this;return H.Clone(function(){return new t(e._texture?e._texture.url:null,e.getScene(),e._noMipmap,e._invertY,e.samplingMode,void 0,void 0,e._texture?e._texture._buffer:void 0)},this)},t.prototype.serialize=function(){var e=this.name;t.SerializeBuffers||Q.StartsWith(this.name,"data:")&&(this.name=""),Q.StartsWith(this.name,"data:")&&this.url===this.name&&(this.url="");var n=o.prototype.serialize.call(this);return n?((t.SerializeBuffers||t.ForceSerializeBuffers)&&(typeof this._buffer=="string"&&this._buffer.substr(0,5)==="data:"?(n.base64String=this._buffer,n.name=n.name.replace("data:","")):this.url&&Q.StartsWith(this.url,"data:")&&this._buffer instanceof Uint8Array?n.base64String="data:image/png;base64,"+Q.EncodeArrayBufferToBase64(this._buffer):t.ForceSerializeBuffers&&(n.base64String=je.GenerateBase64StringFromTexture(this))),n.invertY=this._invertY,n.samplingMode=this.samplingMode,this.name=e,n):null},t.prototype.getClassName=function(){return"Texture"},t.prototype.dispose=function(){o.prototype.dispose.call(this),this.onLoadObservable.clear(),this._delayedOnLoad=null,this._delayedOnError=null},t.Parse=function(e,n,i){if(e.customType){var r=ye.Instantiate(e.customType),a=r.Parse(e,n,i);return e.samplingMode&&a.updateSamplingMode&&a._samplingMode&&a._samplingMode!==e.samplingMode&&a.updateSamplingMode(e.samplingMode),a}if(e.isCube&&!e.isRenderTarget)return t._CubeTextureParser(e,n,i);if(!e.name&&!e.isRenderTarget)return null;var s=function(){if(f&&f._texture&&(f._texture._cachedWrapU=null,f._texture._cachedWrapV=null,f._texture._cachedWrapR=null),e.samplingMode){var l=e.samplingMode;f&&f.samplingMode!==l&&f.updateSamplingMode(l)}if(f&&e.animations)for(var c=0;c<e.animations.length;c++){var p=e.animations[c],h=he.GetClass("BABYLON.Animation");h&&f.animations.push(h.Parse(p))}},f=H.Parse(function(){var l=!0;if(e.noMipmap&&(l=!1),e.mirrorPlane){var c=t._CreateMirror(e.name,e.renderTargetSize,n,l);return c._waitingRenderList=e.renderList,c.mirrorPlane=De.FromArray(e.mirrorPlane),s(),c}else if(e.isRenderTarget){var p=null;if(e.isCube){if(n.reflectionProbes)for(var h=0;h<n.reflectionProbes.length;h++){var v=n.reflectionProbes[h];if(v.name===e.name)return v.cubeTexture}}else p=t._CreateRenderTargetTexture(e.name,e.renderTargetSize,n,l),p._waitingRenderList=e.renderList;return s(),p}else{var u;if(e.base64String)u=t.CreateFromBase64String(e.base64String,e.name,n,!l,e.invertY,void 0,s);else{var S=void 0;e.name&&e.name.indexOf("://")>0?S=e.name:S=i+e.name,(Q.StartsWith(e.url,"data:")||t.UseSerializedUrlIfAny&&e.url)&&(S=e.url),u=new t(S,n,!l,e.invertY,void 0,s)}return u}},e,n);return f},t.CreateFromBase64String=function(e,n,i,r,a,s,f,l,c){return s===void 0&&(s=t.TRILINEAR_SAMPLINGMODE),f===void 0&&(f=null),l===void 0&&(l=null),c===void 0&&(c=5),new t("data:"+n,i,r,a,s,f,l,e,!1,c)},t.LoadFromDataString=function(e,n,i,r,a,s,f,l,c,p){return r===void 0&&(r=!1),a===void 0&&(a=!1),s===void 0&&(s=!0),f===void 0&&(f=t.TRILINEAR_SAMPLINGMODE),l===void 0&&(l=null),c===void 0&&(c=null),p===void 0&&(p=5),e.substr(0,5)!=="data:"&&(e="data:"+e),new t(e,i,a,s,f,l,c,n,r,p)},t.SerializeBuffers=!0,t.ForceSerializeBuffers=!1,t._CubeTextureParser=function(e,n,i){throw oe.WarnImport("CubeTexture")},t._CreateMirror=function(e,n,i,r){throw oe.WarnImport("MirrorTexture")},t._CreateRenderTargetTexture=function(e,n,i,r){throw oe.WarnImport("RenderTargetTexture")},t.NEAREST_SAMPLINGMODE=1,t.NEAREST_NEAREST_MIPLINEAR=8,t.BILINEAR_SAMPLINGMODE=2,t.LINEAR_LINEAR_MIPNEAREST=11,t.TRILINEAR_SAMPLINGMODE=3,t.LINEAR_LINEAR_MIPLINEAR=3,t.NEAREST_NEAREST_MIPNEAREST=4,t.NEAREST_LINEAR_MIPNEAREST=5,t.NEAREST_LINEAR_MIPLINEAR=6,t.NEAREST_LINEAR=7,t.NEAREST_NEAREST=1,t.LINEAR_NEAREST_MIPNEAREST=9,t.LINEAR_NEAREST_MIPLINEAR=10,t.LINEAR_LINEAR=2,t.LINEAR_NEAREST=12,t.EXPLICIT_MODE=0,t.SPHERICAL_MODE=1,t.PLANAR_MODE=2,t.CUBIC_MODE=3,t.PROJECTION_MODE=4,t.SKYBOX_MODE=5,t.INVCUBIC_MODE=6,t.EQUIRECTANGULAR_MODE=7,t.FIXED_EQUIRECTANGULAR_MODE=8,t.FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9,t.CLAMP_ADDRESSMODE=0,t.WRAP_ADDRESSMODE=1,t.MIRROR_ADDRESSMODE=2,t.UseSerializedUrlIfAny=!1,d([m()],t.prototype,"url",void 0),d([m()],t.prototype,"uOffset",void 0),d([m()],t.prototype,"vOffset",void 0),d([m()],t.prototype,"uScale",void 0),d([m()],t.prototype,"vScale",void 0),d([m()],t.prototype,"uAng",void 0),d([m()],t.prototype,"vAng",void 0),d([m()],t.prototype,"wAng",void 0),d([m()],t.prototype,"uRotationCenter",void 0),d([m()],t.prototype,"vRotationCenter",void 0),d([m()],t.prototype,"wRotationCenter",void 0),d([m()],t.prototype,"homogeneousRotationInUVTransform",void 0),d([m()],t.prototype,"isBlocking",null),t}(ke);he.RegisteredTypes["BABYLON.Texture"]=V;H._TextureParser=V.Parse;var M=function(){function o(){}return Object.defineProperty(o,"DiffuseTextureEnabled",{get:function(){return this._DiffuseTextureEnabled},set:function(t){this._DiffuseTextureEnabled!==t&&(this._DiffuseTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"DetailTextureEnabled",{get:function(){return this._DetailTextureEnabled},set:function(t){this._DetailTextureEnabled!==t&&(this._DetailTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"AmbientTextureEnabled",{get:function(){return this._AmbientTextureEnabled},set:function(t){this._AmbientTextureEnabled!==t&&(this._AmbientTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"OpacityTextureEnabled",{get:function(){return this._OpacityTextureEnabled},set:function(t){this._OpacityTextureEnabled!==t&&(this._OpacityTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ReflectionTextureEnabled",{get:function(){return this._ReflectionTextureEnabled},set:function(t){this._ReflectionTextureEnabled!==t&&(this._ReflectionTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"EmissiveTextureEnabled",{get:function(){return this._EmissiveTextureEnabled},set:function(t){this._EmissiveTextureEnabled!==t&&(this._EmissiveTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"SpecularTextureEnabled",{get:function(){return this._SpecularTextureEnabled},set:function(t){this._SpecularTextureEnabled!==t&&(this._SpecularTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"BumpTextureEnabled",{get:function(){return this._BumpTextureEnabled},set:function(t){this._BumpTextureEnabled!==t&&(this._BumpTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"LightmapTextureEnabled",{get:function(){return this._LightmapTextureEnabled},set:function(t){this._LightmapTextureEnabled!==t&&(this._LightmapTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"RefractionTextureEnabled",{get:function(){return this._RefractionTextureEnabled},set:function(t){this._RefractionTextureEnabled!==t&&(this._RefractionTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ColorGradingTextureEnabled",{get:function(){return this._ColorGradingTextureEnabled},set:function(t){this._ColorGradingTextureEnabled!==t&&(this._ColorGradingTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"FresnelEnabled",{get:function(){return this._FresnelEnabled},set:function(t){this._FresnelEnabled!==t&&(this._FresnelEnabled=t,R.MarkAllMaterialsAsDirty(4))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ClearCoatTextureEnabled",{get:function(){return this._ClearCoatTextureEnabled},set:function(t){this._ClearCoatTextureEnabled!==t&&(this._ClearCoatTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ClearCoatBumpTextureEnabled",{get:function(){return this._ClearCoatBumpTextureEnabled},set:function(t){this._ClearCoatBumpTextureEnabled!==t&&(this._ClearCoatBumpTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ClearCoatTintTextureEnabled",{get:function(){return this._ClearCoatTintTextureEnabled},set:function(t){this._ClearCoatTintTextureEnabled!==t&&(this._ClearCoatTintTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"SheenTextureEnabled",{get:function(){return this._SheenTextureEnabled},set:function(t){this._SheenTextureEnabled!==t&&(this._SheenTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"AnisotropicTextureEnabled",{get:function(){return this._AnisotropicTextureEnabled},set:function(t){this._AnisotropicTextureEnabled!==t&&(this._AnisotropicTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(o,"ThicknessTextureEnabled",{get:function(){return this._ThicknessTextureEnabled},set:function(t){this._ThicknessTextureEnabled!==t&&(this._ThicknessTextureEnabled=t,R.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),o._DiffuseTextureEnabled=!0,o._DetailTextureEnabled=!0,o._AmbientTextureEnabled=!0,o._OpacityTextureEnabled=!0,o._ReflectionTextureEnabled=!0,o._EmissiveTextureEnabled=!0,o._SpecularTextureEnabled=!0,o._BumpTextureEnabled=!0,o._LightmapTextureEnabled=!0,o._RefractionTextureEnabled=!0,o._ColorGradingTextureEnabled=!0,o._FresnelEnabled=!0,o._ClearCoatTextureEnabled=!0,o._ClearCoatBumpTextureEnabled=!0,o._ClearCoatTintTextureEnabled=!0,o._SheenTextureEnabled=!0,o._AnisotropicTextureEnabled=!0,o._ThicknessTextureEnabled=!0,o}(),Ye="defaultFragmentDeclaration",$e=`uniform vec4 vDiffuseColor;
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
#endif`;g.IncludesShadersStore[Ye]=$e;var Qe="defaultUboDeclaration",Ze=`layout(std140,column_major) uniform;
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
`;g.IncludesShadersStore[Qe]=Ze;var Ke="prePassDeclaration",qe=`#ifdef PREPASS
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
`;g.IncludesShadersStore[Ke]=qe;var Je="helperFunctions",et=`const float PI=3.1415926535897932384626433832795;
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
`;g.IncludesShadersStore[Je]=et;var tt="lightFragmentDeclaration",nt=`#ifdef LIGHT{X}
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
#endif`;g.IncludesShadersStore[tt]=nt;var it="lightUboDeclaration",rt=`#ifdef LIGHT{X}
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
#endif`;g.IncludesShadersStore[it]=rt;var at="lightsFragmentFunctions",ot=`
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
}`;g.IncludesShadersStore[at]=ot;var st="shadowsFragmentFunctions",lt=`#ifdef SHADOWS
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
`;g.IncludesShadersStore[st]=lt;var ft="fresnelFunction",ut=`#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{
float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);
return clamp(fresnelTerm,0.,1.);
}
#endif`;g.IncludesShadersStore[ft]=ut;var ct="reflectionFunction",dt=`vec3 parallaxCorrectNormal( vec3 vertexPos,vec3 origVec,vec3 cubeSize,vec3 cubePos ) {

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
#endif`;g.IncludesShadersStore[ct]=dt;var ht="imageProcessingDeclaration",pt=`#ifdef EXPOSURE
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
#endif`;g.IncludesShadersStore[ht]=pt;var vt="imageProcessingFunctions",mt=`#if defined(COLORGRADING) && !defined(COLORGRADING3D)

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
}`;g.IncludesShadersStore[vt]=mt;var gt="bumpFragmentMainFunctions",_t=`#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
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
`;g.IncludesShadersStore[gt]=_t;var St="bumpFragmentFunctions",Et=`#if defined(BUMP)
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
#endif`;g.IncludesShadersStore[St]=Et;var Tt="clipPlaneFragmentDeclaration",At=`#ifdef CLIPPLANE
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
#endif`;g.IncludesShadersStore[Tt]=At;var Pt="logDepthDeclaration",Ct=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;
varying float vFragmentDepth;
#endif`;g.IncludesShadersStore[Pt]=Ct;var Mt="fogFragmentDeclaration",xt=`#ifdef FOG
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
#endif`;g.IncludesShadersStore[Mt]=xt;var It="clipPlaneFragment",Lt=`#ifdef CLIPPLANE
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
#endif`;g.IncludesShadersStore[It]=Lt;var yt="bumpFragment",Dt=`vec2 uvOffset=vec2(0.0,0.0);
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
#endif`;g.IncludesShadersStore[yt]=Dt;var bt="depthPrePass",Rt=`#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);
return;
#endif`;g.IncludesShadersStore[bt]=Rt;var Ot="lightFragment",Ft=`#ifdef LIGHT{X}
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
#endif`;g.IncludesShadersStore[Ot]=Ft;var Nt="logDepthFragment",wt=`#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif`;g.IncludesShadersStore[Nt]=wt;var Ut="fogFragment",Xt=`#ifdef FOG
float fog=CalcFogFactor();
color.rgb=fog*color.rgb+(1.0-fog)*vFogColor;
#endif`;g.IncludesShadersStore[Ut]=Xt;var Vt="defaultPixelShader",Bt=`#include<__decl__defaultFragment>
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
`;g.ShadersStore[Vt]=Bt;var Wt="defaultVertexDeclaration",Ht=`
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
`;g.IncludesShadersStore[Wt]=Ht;var zt="bonesDeclaration",Gt=`#if NUM_BONE_INFLUENCERS>0
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
#endif`;g.IncludesShadersStore[zt]=Gt;var kt="instancesDeclaration",jt=`#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#ifdef THIN_INSTANCES
uniform mat4 world;
#endif
#else
uniform mat4 world;
#endif`;g.IncludesShadersStore[kt]=jt;var Yt="prePassVertexDeclaration",$t=`#ifdef PREPASS
#ifdef PREPASS_DEPTHNORMAL
varying vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
uniform mat4 previousWorld;
uniform mat4 previousViewProjection;
varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
#endif
#endif`;g.IncludesShadersStore[Yt]=$t;var Qt="bumpVertexDeclaration",Zt=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
varying mat3 vTBN;
#endif
#endif
`;g.IncludesShadersStore[Qt]=Zt;var Kt="clipPlaneVertexDeclaration",qt=`#ifdef CLIPPLANE
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
#endif`;g.IncludesShadersStore[Kt]=qt;var Jt="fogVertexDeclaration",en=`#ifdef FOG
varying vec3 vFogDistance;
#endif`;g.IncludesShadersStore[Jt]=en;var tn="morphTargetsVertexGlobalDeclaration",nn=`#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#endif`;g.IncludesShadersStore[tn]=nn;var rn="morphTargetsVertexDeclaration",an=`#ifdef MORPHTARGETS
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
#endif`;g.IncludesShadersStore[rn]=an;var on="morphTargetsVertex",sn=`#ifdef MORPHTARGETS
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
#endif`;g.IncludesShadersStore[on]=sn;var ln="instancesVertex",fn=`#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);
#ifdef THIN_INSTANCES
finalWorld=world*finalWorld;
#endif
#else
mat4 finalWorld=world;
#endif`;g.IncludesShadersStore[ln]=fn;var un="bonesVertex",cn=`#if NUM_BONE_INFLUENCERS>0
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
#endif`;g.IncludesShadersStore[un]=cn;var dn="prePassVertex",hn=`#ifdef PREPASS_DEPTHNORMAL
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
#endif`;g.IncludesShadersStore[dn]=hn;var pn="bumpVertex",vn=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);
vec3 tbnTangent=normalize(tangentUpdated.xyz);
vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;
vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif`;g.IncludesShadersStore[pn]=vn;var mn="clipPlaneVertex",gn=`#ifdef CLIPPLANE
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
#endif`;g.IncludesShadersStore[mn]=gn;var _n="fogVertex",Sn=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif`;g.IncludesShadersStore[_n]=Sn;var En="shadowsVertex",Tn=`#ifdef SHADOWS
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
#endif`;g.IncludesShadersStore[En]=Tn;var An="pointCloudVertex",Pn=`#ifdef POINTSIZE
gl_PointSize=pointSize;
#endif`;g.IncludesShadersStore[An]=Pn;var Cn="logDepthVertex",Mn=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;
gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif`;g.IncludesShadersStore[Cn]=Mn;var xn="defaultVertexShader",In=`#include<__decl__defaultVertex>

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
`;g.ShadersStore[xn]=In;var Ln=function(){function o(){this._defines={},this._currentRank=32,this._maxRank=-1,this._mesh=null}return o.prototype.unBindMesh=function(){this._mesh=null},o.prototype.addFallback=function(t,e){this._defines[t]||(t<this._currentRank&&(this._currentRank=t),t>this._maxRank&&(this._maxRank=t),this._defines[t]=new Array),this._defines[t].push(e)},o.prototype.addCPUSkinningFallback=function(t,e){this._mesh=e,t<this._currentRank&&(this._currentRank=t),t>this._maxRank&&(this._maxRank=t)},Object.defineProperty(o.prototype,"hasMoreFallbacks",{get:function(){return this._currentRank<=this._maxRank},enumerable:!1,configurable:!0}),o.prototype.reduce=function(t,e){if(this._mesh&&this._mesh.computeBonesUsingShaders&&this._mesh.numBoneInfluencers>0){this._mesh.computeBonesUsingShaders=!1,t=t.replace("#define NUM_BONE_INFLUENCERS "+this._mesh.numBoneInfluencers,"#define NUM_BONE_INFLUENCERS 0"),e._bonesComputationForcedToCPU=!0;for(var n=this._mesh.getScene(),i=0;i<n.meshes.length;i++){var r=n.meshes[i];if(!r.material){!this._mesh.material&&r.computeBonesUsingShaders&&r.numBoneInfluencers>0&&(r.computeBonesUsingShaders=!1);continue}if(!(!r.computeBonesUsingShaders||r.numBoneInfluencers===0)){if(r.material.getEffect()===e)r.computeBonesUsingShaders=!1;else if(r.subMeshes)for(var a=0,s=r.subMeshes;a<s.length;a++){var f=s[a],l=f.effect;if(l===e){r.computeBonesUsingShaders=!1;break}}}}}else{var c=this._defines[this._currentRank];if(c)for(var i=0;i<c.length;i++)t=t.replace("#define "+c[i],"");this._currentRank++}return t},o}(),ne=function(){function o(t){this._texture=null,this.diffuseBlendLevel=1,this.roughnessBlendLevel=1,this.bumpLevel=1,this._normalBlendMethod=ie.MATERIAL_NORMALBLENDMETHOD_WHITEOUT,this._isEnabled=!1,this.isEnabled=!1,this._internalMarkAllSubMeshesAsTexturesDirty=t}return o.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},o.prototype.isReadyForSubMesh=function(t,e){var n=e.getEngine();return!(t._areTexturesDirty&&e.texturesEnabled&&n.getCaps().standardDerivatives&&this._texture&&M.DetailTextureEnabled&&!this._texture.isReady())},o.prototype.prepareDefines=function(t,e){if(this._isEnabled){t.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod;var n=e.getEngine();t._areTexturesDirty&&(n.getCaps().standardDerivatives&&this._texture&&M.DetailTextureEnabled&&this._isEnabled?(A.PrepareDefinesForMergedUV(this._texture,t,"DETAIL"),t.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod):t.DETAIL=!1)}else t.DETAIL=!1},o.prototype.bindForSubMesh=function(t,e,n){!this._isEnabled||((!t.useUbo||!n||!t.isSync)&&this._texture&&M.DetailTextureEnabled&&(t.updateFloat4("vDetailInfos",this._texture.coordinatesIndex,this.diffuseBlendLevel,this.bumpLevel,this.roughnessBlendLevel),A.BindTextureMatrix(this._texture,t,"detail")),e.texturesEnabled&&this._texture&&M.DetailTextureEnabled&&t.setTexture("detailSampler",this._texture))},o.prototype.hasTexture=function(t){return this._texture===t},o.prototype.getActiveTextures=function(t){this._texture&&t.push(this._texture)},o.prototype.getAnimatables=function(t){this._texture&&this._texture.animations&&this._texture.animations.length>0&&t.push(this._texture)},o.prototype.dispose=function(t){var e;t&&((e=this._texture)===null||e===void 0||e.dispose())},o.prototype.getClassName=function(){return"DetailMap"},o.AddUniforms=function(t){t.push("vDetailInfos")},o.AddSamplers=function(t){t.push("detailSampler")},o.PrepareUniformBuffer=function(t){t.addUniform("vDetailInfos",4),t.addUniform("detailMatrix",16)},o.prototype.copyTo=function(t){H.Clone(function(){return t},this)},o.prototype.serialize=function(){return H.Serialize(this)},o.prototype.parse=function(t,e,n){var i=this;H.Parse(function(){return i},t,e,n)},d([B("detailTexture"),P("_markAllSubMeshesAsTexturesDirty")],o.prototype,"texture",void 0),d([m()],o.prototype,"diffuseBlendLevel",void 0),d([m()],o.prototype,"roughnessBlendLevel",void 0),d([m()],o.prototype,"bumpLevel",void 0),d([m(),P("_markAllSubMeshesAsTexturesDirty")],o.prototype,"normalBlendMethod",void 0),d([m(),P("_markAllSubMeshesAsTexturesDirty")],o.prototype,"isEnabled",void 0),o}(),le={effect:null,subMesh:null},yn=function(o){j(t,o);function t(){var e=o.call(this)||this;return e.MAINUV1=!1,e.MAINUV2=!1,e.DIFFUSE=!1,e.DIFFUSEDIRECTUV=0,e.DETAIL=!1,e.DETAILDIRECTUV=0,e.DETAIL_NORMALBLENDMETHOD=0,e.AMBIENT=!1,e.AMBIENTDIRECTUV=0,e.OPACITY=!1,e.OPACITYDIRECTUV=0,e.OPACITYRGB=!1,e.REFLECTION=!1,e.EMISSIVE=!1,e.EMISSIVEDIRECTUV=0,e.SPECULAR=!1,e.SPECULARDIRECTUV=0,e.BUMP=!1,e.BUMPDIRECTUV=0,e.PARALLAX=!1,e.PARALLAXOCCLUSION=!1,e.SPECULAROVERALPHA=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.ALPHAFROMDIFFUSE=!1,e.POINTSIZE=!1,e.FOG=!1,e.SPECULARTERM=!1,e.DIFFUSEFRESNEL=!1,e.OPACITYFRESNEL=!1,e.REFLECTIONFRESNEL=!1,e.REFRACTIONFRESNEL=!1,e.EMISSIVEFRESNEL=!1,e.FRESNEL=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.BONETEXTURE=!1,e.BONES_VELOCITY_ENABLED=!1,e.INSTANCES=!1,e.THIN_INSTANCES=!1,e.GLOSSINESS=!1,e.ROUGHNESS=!1,e.EMISSIVEASILLUMINATION=!1,e.LINKEMISSIVEWITHDIFFUSE=!1,e.REFLECTIONFRESNELFROMSPECULAR=!1,e.LIGHTMAP=!1,e.LIGHTMAPDIRECTUV=0,e.OBJECTSPACE_NORMALMAP=!1,e.USELIGHTMAPASSHADOWMAP=!1,e.REFLECTIONMAP_3D=!1,e.REFLECTIONMAP_SPHERICAL=!1,e.REFLECTIONMAP_PLANAR=!1,e.REFLECTIONMAP_CUBIC=!1,e.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,e.REFLECTIONMAP_PROJECTION=!1,e.REFLECTIONMAP_SKYBOX=!1,e.REFLECTIONMAP_EXPLICIT=!1,e.REFLECTIONMAP_EQUIRECTANGULAR=!1,e.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,e.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,e.INVERTCUBICMAP=!1,e.LOGARITHMICDEPTH=!1,e.REFRACTION=!1,e.REFRACTIONMAP_3D=!1,e.REFLECTIONOVERALPHA=!1,e.TWOSIDEDLIGHTING=!1,e.SHADOWFLOAT=!1,e.MORPHTARGETS=!1,e.MORPHTARGETS_NORMAL=!1,e.MORPHTARGETS_TANGENT=!1,e.MORPHTARGETS_UV=!1,e.NUM_MORPH_INFLUENCERS=0,e.NONUNIFORMSCALING=!1,e.PREMULTIPLYALPHA=!1,e.ALPHATEST_AFTERALLALPHACOMPUTATIONS=!1,e.ALPHABLEND=!0,e.PREPASS=!1,e.PREPASS_IRRADIANCE=!1,e.PREPASS_IRRADIANCE_INDEX=-1,e.PREPASS_ALBEDO=!1,e.PREPASS_ALBEDO_INDEX=-1,e.PREPASS_DEPTHNORMAL=!1,e.PREPASS_DEPTHNORMAL_INDEX=-1,e.PREPASS_POSITION=!1,e.PREPASS_POSITION_INDEX=-1,e.PREPASS_VELOCITY=!1,e.PREPASS_VELOCITY_INDEX=-1,e.PREPASS_REFLECTIVITY=!1,e.PREPASS_REFLECTIVITY_INDEX=-1,e.SCENE_MRT_COUNT=0,e.RGBDLIGHTMAP=!1,e.RGBDREFLECTION=!1,e.RGBDREFRACTION=!1,e.IMAGEPROCESSING=!1,e.VIGNETTE=!1,e.VIGNETTEBLENDMODEMULTIPLY=!1,e.VIGNETTEBLENDMODEOPAQUE=!1,e.TONEMAPPING=!1,e.TONEMAPPING_ACES=!1,e.CONTRAST=!1,e.COLORCURVES=!1,e.COLORGRADING=!1,e.COLORGRADING3D=!1,e.SAMPLER3DGREENDEPTH=!1,e.SAMPLER3DBGRMAP=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.MULTIVIEW=!1,e.IS_REFLECTION_LINEAR=!1,e.IS_REFRACTION_LINEAR=!1,e.EXPOSURE=!1,e.rebuild(),e}return t.prototype.setReflectionMode=function(e){for(var n=["REFLECTIONMAP_CUBIC","REFLECTIONMAP_EXPLICIT","REFLECTIONMAP_PLANAR","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_SKYBOX","REFLECTIONMAP_SPHERICAL","REFLECTIONMAP_EQUIRECTANGULAR","REFLECTIONMAP_EQUIRECTANGULAR_FIXED","REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED"],i=0,r=n;i<r.length;i++){var a=r[i];this[a]=a===e}},t}(be),pe=function(o){j(t,o);function t(e,n){var i=o.call(this,e,n)||this;return i._diffuseTexture=null,i._ambientTexture=null,i._opacityTexture=null,i._reflectionTexture=null,i._emissiveTexture=null,i._specularTexture=null,i._bumpTexture=null,i._lightmapTexture=null,i._refractionTexture=null,i.ambientColor=new k(0,0,0),i.diffuseColor=new k(1,1,1),i.specularColor=new k(1,1,1),i.emissiveColor=new k(0,0,0),i.specularPower=64,i._useAlphaFromDiffuseTexture=!1,i._useEmissiveAsIllumination=!1,i._linkEmissiveWithDiffuse=!1,i._useSpecularOverAlpha=!1,i._useReflectionOverAlpha=!1,i._disableLighting=!1,i._useObjectSpaceNormalMap=!1,i._useParallax=!1,i._useParallaxOcclusion=!1,i.parallaxScaleBias=.05,i._roughness=0,i.indexOfRefraction=.98,i.invertRefractionY=!0,i.alphaCutOff=.4,i._useLightmapAsShadowmap=!1,i._useReflectionFresnelFromSpecular=!1,i._useGlossinessFromSpecularMapAlpha=!1,i._maxSimultaneousLights=4,i._invertNormalMapX=!1,i._invertNormalMapY=!1,i._twoSidedLighting=!1,i.detailMap=new ne(i._markAllSubMeshesAsTexturesDirty.bind(i)),i._renderTargets=new Re(16),i._worldViewProjectionMatrix=_.Zero(),i._globalAmbientColor=new k(0,0,0),i._rebuildInParallel=!1,i._attachImageProcessingConfiguration(null),i.prePassConfiguration=new se,i.getRenderTargetTextures=function(){return i._renderTargets.reset(),t.ReflectionTextureEnabled&&i._reflectionTexture&&i._reflectionTexture.isRenderTarget&&i._renderTargets.push(i._reflectionTexture),t.RefractionTextureEnabled&&i._refractionTexture&&i._refractionTexture.isRenderTarget&&i._renderTargets.push(i._refractionTexture),i._renderTargets},i}return Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(e){this._attachImageProcessingConfiguration(e),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),t.prototype._attachImageProcessingConfiguration=function(e){var n=this;e!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),e?this._imageProcessingConfiguration=e:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){n._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(t.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(e){this.imageProcessingConfiguration.colorCurvesEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(e){this.imageProcessingConfiguration.colorGradingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(e){this._imageProcessingConfiguration.toneMappingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(e){this._imageProcessingConfiguration.exposure=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(e){this._imageProcessingConfiguration.contrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(e){this._imageProcessingConfiguration.colorGradingTexture=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(e){this._imageProcessingConfiguration.colorCurves=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasRenderTargetTextures",{get:function(){return!!(t.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget||t.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"StandardMaterial"},Object.defineProperty(t.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(e){this._useLogarithmicDepth=e&&this.getScene().getEngine().getCaps().fragmentDepthSupported,this._markAllSubMeshesAsMiscDirty()},enumerable:!1,configurable:!0}),t.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromDiffuseTexture()||this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled},t.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===ie.MATERIAL_ALPHATEST)},t.prototype._shouldUseAlphaFromDiffuseTexture=function(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha&&this._useAlphaFromDiffuseTexture&&this._transparencyMode!==ie.MATERIAL_OPAQUE},t.prototype._hasAlphaChannel=function(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha||this._opacityTexture!=null},t.prototype.getAlphaTestTexture=function(){return this._diffuseTexture},t.prototype.isReadyForSubMesh=function(e,n,i){if(i===void 0&&(i=!1),n.effect&&this.isFrozen&&n.effect._wasPreviouslyReady)return!0;n._materialDefines||(n._materialDefines=new yn);var r=this.getScene(),a=n._materialDefines;if(this._isReadyForSubMesh(n))return!0;var s=r.getEngine();if(a._needNormals=A.PrepareDefinesForLights(r,e,a,!0,this._maxSimultaneousLights,this._disableLighting),A.PrepareDefinesForMultiview(r,a),A.PrepareDefinesForPrePass(r,a,this.canRenderToMRT),a._areTexturesDirty){if(a._needUVs=!1,a.MAINUV1=!1,a.MAINUV2=!1,r.texturesEnabled){if(this._diffuseTexture&&t.DiffuseTextureEnabled)if(this._diffuseTexture.isReadyOrNotBlocking())A.PrepareDefinesForMergedUV(this._diffuseTexture,a,"DIFFUSE");else return!1;else a.DIFFUSE=!1;if(this._ambientTexture&&t.AmbientTextureEnabled)if(this._ambientTexture.isReadyOrNotBlocking())A.PrepareDefinesForMergedUV(this._ambientTexture,a,"AMBIENT");else return!1;else a.AMBIENT=!1;if(this._opacityTexture&&t.OpacityTextureEnabled)if(this._opacityTexture.isReadyOrNotBlocking())A.PrepareDefinesForMergedUV(this._opacityTexture,a,"OPACITY"),a.OPACITYRGB=this._opacityTexture.getAlphaFromRGB;else return!1;else a.OPACITY=!1;if(this._reflectionTexture&&t.ReflectionTextureEnabled)if(this._reflectionTexture.isReadyOrNotBlocking()){switch(a._needNormals=!0,a.REFLECTION=!0,a.ROUGHNESS=this._roughness>0,a.REFLECTIONOVERALPHA=this._useReflectionOverAlpha,a.INVERTCUBICMAP=this._reflectionTexture.coordinatesMode===V.INVCUBIC_MODE,a.REFLECTIONMAP_3D=this._reflectionTexture.isCube,a.RGBDREFLECTION=this._reflectionTexture.isRGBD,this._reflectionTexture.coordinatesMode){case V.EXPLICIT_MODE:a.setReflectionMode("REFLECTIONMAP_EXPLICIT");break;case V.PLANAR_MODE:a.setReflectionMode("REFLECTIONMAP_PLANAR");break;case V.PROJECTION_MODE:a.setReflectionMode("REFLECTIONMAP_PROJECTION");break;case V.SKYBOX_MODE:a.setReflectionMode("REFLECTIONMAP_SKYBOX");break;case V.SPHERICAL_MODE:a.setReflectionMode("REFLECTIONMAP_SPHERICAL");break;case V.EQUIRECTANGULAR_MODE:a.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR");break;case V.FIXED_EQUIRECTANGULAR_MODE:a.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR_FIXED");break;case V.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:a.setReflectionMode("REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED");break;case V.CUBIC_MODE:case V.INVCUBIC_MODE:default:a.setReflectionMode("REFLECTIONMAP_CUBIC");break}a.USE_LOCAL_REFLECTIONMAP_CUBIC=!!this._reflectionTexture.boundingBoxSize}else return!1;else a.REFLECTION=!1;if(this._emissiveTexture&&t.EmissiveTextureEnabled)if(this._emissiveTexture.isReadyOrNotBlocking())A.PrepareDefinesForMergedUV(this._emissiveTexture,a,"EMISSIVE");else return!1;else a.EMISSIVE=!1;if(this._lightmapTexture&&t.LightmapTextureEnabled)if(this._lightmapTexture.isReadyOrNotBlocking())A.PrepareDefinesForMergedUV(this._lightmapTexture,a,"LIGHTMAP"),a.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,a.RGBDLIGHTMAP=this._lightmapTexture.isRGBD;else return!1;else a.LIGHTMAP=!1;if(this._specularTexture&&t.SpecularTextureEnabled)if(this._specularTexture.isReadyOrNotBlocking())A.PrepareDefinesForMergedUV(this._specularTexture,a,"SPECULAR"),a.GLOSSINESS=this._useGlossinessFromSpecularMapAlpha;else return!1;else a.SPECULAR=!1;if(r.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&t.BumpTextureEnabled){if(this._bumpTexture.isReady())A.PrepareDefinesForMergedUV(this._bumpTexture,a,"BUMP"),a.PARALLAX=this._useParallax,a.PARALLAXOCCLUSION=this._useParallaxOcclusion;else return!1;a.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap}else a.BUMP=!1;if(this._refractionTexture&&t.RefractionTextureEnabled)if(this._refractionTexture.isReadyOrNotBlocking())a._needUVs=!0,a.REFRACTION=!0,a.REFRACTIONMAP_3D=this._refractionTexture.isCube,a.RGBDREFRACTION=this._refractionTexture.isRGBD;else return!1;else a.REFRACTION=!1;a.TWOSIDEDLIGHTING=!this._backFaceCulling&&this._twoSidedLighting}else a.DIFFUSE=!1,a.AMBIENT=!1,a.OPACITY=!1,a.REFLECTION=!1,a.EMISSIVE=!1,a.LIGHTMAP=!1,a.BUMP=!1,a.REFRACTION=!1;a.ALPHAFROMDIFFUSE=this._shouldUseAlphaFromDiffuseTexture(),a.EMISSIVEASILLUMINATION=this._useEmissiveAsIllumination,a.LINKEMISSIVEWITHDIFFUSE=this._linkEmissiveWithDiffuse,a.SPECULAROVERALPHA=this._useSpecularOverAlpha,a.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,a.ALPHATEST_AFTERALLALPHACOMPUTATIONS=this.transparencyMode!==null,a.ALPHABLEND=this.transparencyMode===null||this.needAlphaBlendingForMesh(e)}if(!this.detailMap.isReadyForSubMesh(a,r))return!1;if(a._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(a),a.IS_REFLECTION_LINEAR=this.reflectionTexture!=null&&!this.reflectionTexture.gammaSpace,a.IS_REFRACTION_LINEAR=this.refractionTexture!=null&&!this.refractionTexture.gammaSpace}if(a._areFresnelDirty&&(t.FresnelEnabled?(this._diffuseFresnelParameters||this._opacityFresnelParameters||this._emissiveFresnelParameters||this._refractionFresnelParameters||this._reflectionFresnelParameters)&&(a.DIFFUSEFRESNEL=this._diffuseFresnelParameters&&this._diffuseFresnelParameters.isEnabled,a.OPACITYFRESNEL=this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled,a.REFLECTIONFRESNEL=this._reflectionFresnelParameters&&this._reflectionFresnelParameters.isEnabled,a.REFLECTIONFRESNELFROMSPECULAR=this._useReflectionFresnelFromSpecular,a.REFRACTIONFRESNEL=this._refractionFresnelParameters&&this._refractionFresnelParameters.isEnabled,a.EMISSIVEFRESNEL=this._emissiveFresnelParameters&&this._emissiveFresnelParameters.isEnabled,a._needNormals=!0,a.FRESNEL=!0):a.FRESNEL=!1),A.PrepareDefinesForMisc(e,r,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e)||this._forceAlphaTest,a),A.PrepareDefinesForAttributes(e,a,!0,!0,!0),A.PrepareDefinesForFrameBoundValues(r,s,a,i,null,n.getRenderingMesh().hasThinInstances),this.detailMap.prepareDefines(a,r),a.isDirty){var f=a._areLightsDisposed;a.markAsProcessed();var l=new Ln;a.REFLECTION&&l.addFallback(0,"REFLECTION"),a.SPECULAR&&l.addFallback(0,"SPECULAR"),a.BUMP&&l.addFallback(0,"BUMP"),a.PARALLAX&&l.addFallback(1,"PARALLAX"),a.PARALLAXOCCLUSION&&l.addFallback(0,"PARALLAXOCCLUSION"),a.SPECULAROVERALPHA&&l.addFallback(0,"SPECULAROVERALPHA"),a.FOG&&l.addFallback(1,"FOG"),a.POINTSIZE&&l.addFallback(0,"POINTSIZE"),a.LOGARITHMICDEPTH&&l.addFallback(0,"LOGARITHMICDEPTH"),A.HandleFallbacksForShadows(a,l,this._maxSimultaneousLights),a.SPECULARTERM&&l.addFallback(0,"SPECULARTERM"),a.DIFFUSEFRESNEL&&l.addFallback(1,"DIFFUSEFRESNEL"),a.OPACITYFRESNEL&&l.addFallback(2,"OPACITYFRESNEL"),a.REFLECTIONFRESNEL&&l.addFallback(3,"REFLECTIONFRESNEL"),a.EMISSIVEFRESNEL&&l.addFallback(4,"EMISSIVEFRESNEL"),a.FRESNEL&&l.addFallback(4,"FRESNEL"),a.MULTIVIEW&&l.addFallback(0,"MULTIVIEW");var c=[b.PositionKind];a.NORMAL&&c.push(b.NormalKind),a.UV1&&c.push(b.UVKind),a.UV2&&c.push(b.UV2Kind),a.VERTEXCOLOR&&c.push(b.ColorKind),A.PrepareAttributesForBones(c,e,a,l),A.PrepareAttributesForInstances(c,a),A.PrepareAttributesForMorphTargets(c,e,a);var p="default",h=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vDiffuseColor","vSpecularColor","vEmissiveColor","visibility","vFogInfos","vFogColor","pointSize","vDiffuseInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vEmissiveInfos","vSpecularInfos","vBumpInfos","vLightmapInfos","vRefractionInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","diffuseMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","specularMatrix","bumpMatrix","normalMatrix","lightmapMatrix","refractionMatrix","diffuseLeftColor","diffuseRightColor","opacityParts","reflectionLeftColor","reflectionRightColor","emissiveLeftColor","emissiveRightColor","refractionLeftColor","refractionRightColor","vReflectionPosition","vReflectionSize","logarithmicDepthConstant","vTangentSpaceParams","alphaCutOff","boneTextureWidth"],v=["diffuseSampler","ambientSampler","opacitySampler","reflectionCubeSampler","reflection2DSampler","emissiveSampler","specularSampler","bumpSampler","lightmapSampler","refractionCubeSampler","refraction2DSampler","boneSampler"],u=["Material","Scene"];ne.AddUniforms(h),ne.AddSamplers(v),se.AddUniforms(h),se.AddSamplers(h),ae&&(ae.PrepareUniforms(h,a),ae.PrepareSamplers(v,a)),A.PrepareUniformsAndSamplersList({uniformsNames:h,uniformBuffersNames:u,samplers:v,defines:a,maxSimultaneousLights:this._maxSimultaneousLights});var S={};this.customShaderNameResolve&&(p=this.customShaderNameResolve(p,h,u,v,a,c,S));var E=a.toString(),T=n.effect,x=r.getEngine().createEffect(p,{attributes:c,uniformsNames:h,uniformBuffersNames:u,samplers:v,defines:E,fallbacks:l,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:a.NUM_MORPH_INFLUENCERS},processFinalCode:S.processFinalCode,multiTarget:a.PREPASS},s);if(x)if(this._onEffectCreatedObservable&&(le.effect=x,le.subMesh=n,this._onEffectCreatedObservable.notifyObservers(le)),this.allowShaderHotSwapping&&T&&!x.isReady()){if(x=T,this._rebuildInParallel=!0,a.markAsUnprocessed(),f)return a._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,r.resetCachedMaterial(),n.setEffect(x,a),this.buildUniformLayout()}return!n.effect||!n.effect.isReady()?!1:(a._renderId=r.getRenderId(),n.effect._wasPreviouslyReady=!0,!0)},t.prototype.buildUniformLayout=function(){var e=this._uniformBuffer;e.addUniform("diffuseLeftColor",4),e.addUniform("diffuseRightColor",4),e.addUniform("opacityParts",4),e.addUniform("reflectionLeftColor",4),e.addUniform("reflectionRightColor",4),e.addUniform("refractionLeftColor",4),e.addUniform("refractionRightColor",4),e.addUniform("emissiveLeftColor",4),e.addUniform("emissiveRightColor",4),e.addUniform("vDiffuseInfos",2),e.addUniform("vAmbientInfos",2),e.addUniform("vOpacityInfos",2),e.addUniform("vReflectionInfos",2),e.addUniform("vReflectionPosition",3),e.addUniform("vReflectionSize",3),e.addUniform("vEmissiveInfos",2),e.addUniform("vLightmapInfos",2),e.addUniform("vSpecularInfos",2),e.addUniform("vBumpInfos",3),e.addUniform("diffuseMatrix",16),e.addUniform("ambientMatrix",16),e.addUniform("opacityMatrix",16),e.addUniform("reflectionMatrix",16),e.addUniform("emissiveMatrix",16),e.addUniform("lightmapMatrix",16),e.addUniform("specularMatrix",16),e.addUniform("bumpMatrix",16),e.addUniform("vTangentSpaceParams",2),e.addUniform("pointSize",1),e.addUniform("refractionMatrix",16),e.addUniform("vRefractionInfos",4),e.addUniform("vSpecularColor",4),e.addUniform("vEmissiveColor",3),e.addUniform("visibility",1),e.addUniform("vDiffuseColor",4),ne.PrepareUniformBuffer(e),e.create()},t.prototype.unbind=function(){if(this._activeEffect){var e=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),e=!0),this._refractionTexture&&this._refractionTexture.isRenderTarget&&(this._activeEffect.setTexture("refraction2DSampler",null),e=!0),e&&this._markAllSubMeshesAsTexturesDirty()}o.prototype.unbind.call(this)},t.prototype.bindForSubMesh=function(e,n,i){var r=this.getScene(),a=i._materialDefines;if(!!a){var s=i.effect;if(!!s){this._activeEffect=s,(!a.INSTANCES||a.THIN_INSTANCES)&&this.bindOnlyWorldMatrix(e),this.prePassConfiguration.bindForSubMesh(this._activeEffect,r,n,e,this.isFrozen),a.OBJECTSPACE_NORMALMAP&&(e.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var f=this._mustRebind(r,s,n.visibility);A.BindBonesParameters(n,s);var l=this._uniformBuffer;if(f){if(l.bindToEffect(s,"Material"),this.bindViewProjection(s),!l.useUbo||!this.isFrozen||!l.isSync){if(t.FresnelEnabled&&a.FRESNEL&&(this.diffuseFresnelParameters&&this.diffuseFresnelParameters.isEnabled&&(l.updateColor4("diffuseLeftColor",this.diffuseFresnelParameters.leftColor,this.diffuseFresnelParameters.power),l.updateColor4("diffuseRightColor",this.diffuseFresnelParameters.rightColor,this.diffuseFresnelParameters.bias)),this.opacityFresnelParameters&&this.opacityFresnelParameters.isEnabled&&l.updateColor4("opacityParts",new k(this.opacityFresnelParameters.leftColor.toLuminance(),this.opacityFresnelParameters.rightColor.toLuminance(),this.opacityFresnelParameters.bias),this.opacityFresnelParameters.power),this.reflectionFresnelParameters&&this.reflectionFresnelParameters.isEnabled&&(l.updateColor4("reflectionLeftColor",this.reflectionFresnelParameters.leftColor,this.reflectionFresnelParameters.power),l.updateColor4("reflectionRightColor",this.reflectionFresnelParameters.rightColor,this.reflectionFresnelParameters.bias)),this.refractionFresnelParameters&&this.refractionFresnelParameters.isEnabled&&(l.updateColor4("refractionLeftColor",this.refractionFresnelParameters.leftColor,this.refractionFresnelParameters.power),l.updateColor4("refractionRightColor",this.refractionFresnelParameters.rightColor,this.refractionFresnelParameters.bias)),this.emissiveFresnelParameters&&this.emissiveFresnelParameters.isEnabled&&(l.updateColor4("emissiveLeftColor",this.emissiveFresnelParameters.leftColor,this.emissiveFresnelParameters.power),l.updateColor4("emissiveRightColor",this.emissiveFresnelParameters.rightColor,this.emissiveFresnelParameters.bias))),r.texturesEnabled){if(this._diffuseTexture&&t.DiffuseTextureEnabled&&(l.updateFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),A.BindTextureMatrix(this._diffuseTexture,l,"diffuse")),this._ambientTexture&&t.AmbientTextureEnabled&&(l.updateFloat2("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level),A.BindTextureMatrix(this._ambientTexture,l,"ambient")),this._opacityTexture&&t.OpacityTextureEnabled&&(l.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),A.BindTextureMatrix(this._opacityTexture,l,"opacity")),this._hasAlphaChannel()&&s.setFloat("alphaCutOff",this.alphaCutOff),this._reflectionTexture&&t.ReflectionTextureEnabled&&(l.updateFloat2("vReflectionInfos",this._reflectionTexture.level,this.roughness),l.updateMatrix("reflectionMatrix",this._reflectionTexture.getReflectionTextureMatrix()),this._reflectionTexture.boundingBoxSize)){var c=this._reflectionTexture;l.updateVector3("vReflectionPosition",c.boundingBoxPosition),l.updateVector3("vReflectionSize",c.boundingBoxSize)}if(this._emissiveTexture&&t.EmissiveTextureEnabled&&(l.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),A.BindTextureMatrix(this._emissiveTexture,l,"emissive")),this._lightmapTexture&&t.LightmapTextureEnabled&&(l.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),A.BindTextureMatrix(this._lightmapTexture,l,"lightmap")),this._specularTexture&&t.SpecularTextureEnabled&&(l.updateFloat2("vSpecularInfos",this._specularTexture.coordinatesIndex,this._specularTexture.level),A.BindTextureMatrix(this._specularTexture,l,"specular")),this._bumpTexture&&r.getEngine().getCaps().standardDerivatives&&t.BumpTextureEnabled&&(l.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,1/this._bumpTexture.level,this.parallaxScaleBias),A.BindTextureMatrix(this._bumpTexture,l,"bump"),r._mirroredCameraPosition?l.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):l.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1)),this._refractionTexture&&t.RefractionTextureEnabled){var p=1;this._refractionTexture.isCube||(l.updateMatrix("refractionMatrix",this._refractionTexture.getReflectionTextureMatrix()),this._refractionTexture.depth&&(p=this._refractionTexture.depth)),l.updateFloat4("vRefractionInfos",this._refractionTexture.level,this.indexOfRefraction,p,this.invertRefractionY?-1:1)}}this.pointsCloud&&l.updateFloat("pointSize",this.pointSize),a.SPECULARTERM&&l.updateColor4("vSpecularColor",this.specularColor,this.specularPower),l.updateColor3("vEmissiveColor",t.EmissiveTextureEnabled?this.emissiveColor:k.BlackReadOnly),l.updateColor4("vDiffuseColor",this.diffuseColor,this.alpha)}if(l.updateFloat("visibility",n.visibility),r.texturesEnabled&&(this._diffuseTexture&&t.DiffuseTextureEnabled&&s.setTexture("diffuseSampler",this._diffuseTexture),this._ambientTexture&&t.AmbientTextureEnabled&&s.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&t.OpacityTextureEnabled&&s.setTexture("opacitySampler",this._opacityTexture),this._reflectionTexture&&t.ReflectionTextureEnabled&&(this._reflectionTexture.isCube?s.setTexture("reflectionCubeSampler",this._reflectionTexture):s.setTexture("reflection2DSampler",this._reflectionTexture)),this._emissiveTexture&&t.EmissiveTextureEnabled&&s.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&t.LightmapTextureEnabled&&s.setTexture("lightmapSampler",this._lightmapTexture),this._specularTexture&&t.SpecularTextureEnabled&&s.setTexture("specularSampler",this._specularTexture),this._bumpTexture&&r.getEngine().getCaps().standardDerivatives&&t.BumpTextureEnabled&&s.setTexture("bumpSampler",this._bumpTexture),this._refractionTexture&&t.RefractionTextureEnabled)){var p=1;this._refractionTexture.isCube?s.setTexture("refractionCubeSampler",this._refractionTexture):s.setTexture("refraction2DSampler",this._refractionTexture)}this.detailMap.bindForSubMesh(l,r,this.isFrozen),A.BindClipPlane(s,r),r.ambientColor.multiplyToRef(this.ambientColor,this._globalAmbientColor),A.BindEyePosition(s,r),s.setColor3("vAmbientColor",this._globalAmbientColor)}(f||!this.isFrozen)&&(r.lightsEnabled&&!this._disableLighting&&A.BindLights(r,n,s,a,this._maxSimultaneousLights,this._rebuildInParallel),(r.fogEnabled&&n.applyFog&&r.fogMode!==O.FOGMODE_NONE||this._reflectionTexture||this._refractionTexture)&&this.bindView(s),A.BindFogParameters(r,n,s),a.NUM_MORPH_INFLUENCERS&&A.BindMorphTargetParameters(n,s),this.useLogarithmicDepth&&A.BindLogDepth(a,s,r),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect)),l.update(),this._afterBind(n,this._activeEffect)}}},t.prototype.getAnimatables=function(){var e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&e.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&e.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&e.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&e.push(this._emissiveTexture),this._specularTexture&&this._specularTexture.animations&&this._specularTexture.animations.length>0&&e.push(this._specularTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&e.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&e.push(this._lightmapTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&e.push(this._refractionTexture),this.detailMap.getAnimatables(e),e},t.prototype.getActiveTextures=function(){var e=o.prototype.getActiveTextures.call(this);return this._diffuseTexture&&e.push(this._diffuseTexture),this._ambientTexture&&e.push(this._ambientTexture),this._opacityTexture&&e.push(this._opacityTexture),this._reflectionTexture&&e.push(this._reflectionTexture),this._emissiveTexture&&e.push(this._emissiveTexture),this._specularTexture&&e.push(this._specularTexture),this._bumpTexture&&e.push(this._bumpTexture),this._lightmapTexture&&e.push(this._lightmapTexture),this._refractionTexture&&e.push(this._refractionTexture),this.detailMap.getActiveTextures(e),e},t.prototype.hasTexture=function(e){return o.prototype.hasTexture.call(this,e)||this._diffuseTexture===e||this._ambientTexture===e||this._opacityTexture===e||this._reflectionTexture===e||this._emissiveTexture===e||this._specularTexture===e||this._bumpTexture===e||this._lightmapTexture===e||this._refractionTexture===e?!0:this.detailMap.hasTexture(e)},t.prototype.dispose=function(e,n){var i,r,a,s,f,l,c,p,h;n&&((i=this._diffuseTexture)===null||i===void 0||i.dispose(),(r=this._ambientTexture)===null||r===void 0||r.dispose(),(a=this._opacityTexture)===null||a===void 0||a.dispose(),(s=this._reflectionTexture)===null||s===void 0||s.dispose(),(f=this._emissiveTexture)===null||f===void 0||f.dispose(),(l=this._specularTexture)===null||l===void 0||l.dispose(),(c=this._bumpTexture)===null||c===void 0||c.dispose(),(p=this._lightmapTexture)===null||p===void 0||p.dispose(),(h=this._refractionTexture)===null||h===void 0||h.dispose()),this.detailMap.dispose(n),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),o.prototype.dispose.call(this,e,n)},t.prototype.clone=function(e){var n=this,i=H.Clone(function(){return new t(e,n.getScene())},this);return i.name=e,i.id=e,i},t.prototype.serialize=function(){return H.Serialize(this)},t.Parse=function(e,n,i){return H.Parse(function(){return new t(e.name,n)},e,n,i)},Object.defineProperty(t,"DiffuseTextureEnabled",{get:function(){return M.DiffuseTextureEnabled},set:function(e){M.DiffuseTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"DetailTextureEnabled",{get:function(){return M.DetailTextureEnabled},set:function(e){M.DetailTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"AmbientTextureEnabled",{get:function(){return M.AmbientTextureEnabled},set:function(e){M.AmbientTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"OpacityTextureEnabled",{get:function(){return M.OpacityTextureEnabled},set:function(e){M.OpacityTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"ReflectionTextureEnabled",{get:function(){return M.ReflectionTextureEnabled},set:function(e){M.ReflectionTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"EmissiveTextureEnabled",{get:function(){return M.EmissiveTextureEnabled},set:function(e){M.EmissiveTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"SpecularTextureEnabled",{get:function(){return M.SpecularTextureEnabled},set:function(e){M.SpecularTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"BumpTextureEnabled",{get:function(){return M.BumpTextureEnabled},set:function(e){M.BumpTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"LightmapTextureEnabled",{get:function(){return M.LightmapTextureEnabled},set:function(e){M.LightmapTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"RefractionTextureEnabled",{get:function(){return M.RefractionTextureEnabled},set:function(e){M.RefractionTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"ColorGradingTextureEnabled",{get:function(){return M.ColorGradingTextureEnabled},set:function(e){M.ColorGradingTextureEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"FresnelEnabled",{get:function(){return M.FresnelEnabled},set:function(e){M.FresnelEnabled=e},enumerable:!1,configurable:!0}),d([B("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),d([P("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"diffuseTexture",void 0),d([B("ambientTexture")],t.prototype,"_ambientTexture",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTexture",void 0),d([B("opacityTexture")],t.prototype,"_opacityTexture",void 0),d([P("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"opacityTexture",void 0),d([B("reflectionTexture")],t.prototype,"_reflectionTexture",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionTexture",void 0),d([B("emissiveTexture")],t.prototype,"_emissiveTexture",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveTexture",void 0),d([B("specularTexture")],t.prototype,"_specularTexture",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"specularTexture",void 0),d([B("bumpTexture")],t.prototype,"_bumpTexture",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture",void 0),d([B("lightmapTexture")],t.prototype,"_lightmapTexture",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"lightmapTexture",void 0),d([B("refractionTexture")],t.prototype,"_refractionTexture",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"refractionTexture",void 0),d([ee("ambient")],t.prototype,"ambientColor",void 0),d([ee("diffuse")],t.prototype,"diffuseColor",void 0),d([ee("specular")],t.prototype,"specularColor",void 0),d([ee("emissive")],t.prototype,"emissiveColor",void 0),d([m()],t.prototype,"specularPower",void 0),d([m("useAlphaFromDiffuseTexture")],t.prototype,"_useAlphaFromDiffuseTexture",void 0),d([P("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"useAlphaFromDiffuseTexture",void 0),d([m("useEmissiveAsIllumination")],t.prototype,"_useEmissiveAsIllumination",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useEmissiveAsIllumination",void 0),d([m("linkEmissiveWithDiffuse")],t.prototype,"_linkEmissiveWithDiffuse",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"linkEmissiveWithDiffuse",void 0),d([m("useSpecularOverAlpha")],t.prototype,"_useSpecularOverAlpha",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useSpecularOverAlpha",void 0),d([m("useReflectionOverAlpha")],t.prototype,"_useReflectionOverAlpha",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useReflectionOverAlpha",void 0),d([m("disableLighting")],t.prototype,"_disableLighting",void 0),d([P("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),d([m("useObjectSpaceNormalMap")],t.prototype,"_useObjectSpaceNormalMap",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useObjectSpaceNormalMap",void 0),d([m("useParallax")],t.prototype,"_useParallax",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallax",void 0),d([m("useParallaxOcclusion")],t.prototype,"_useParallaxOcclusion",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallaxOcclusion",void 0),d([m()],t.prototype,"parallaxScaleBias",void 0),d([m("roughness")],t.prototype,"_roughness",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"roughness",void 0),d([m()],t.prototype,"indexOfRefraction",void 0),d([m()],t.prototype,"invertRefractionY",void 0),d([m()],t.prototype,"alphaCutOff",void 0),d([m("useLightmapAsShadowmap")],t.prototype,"_useLightmapAsShadowmap",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLightmapAsShadowmap",void 0),d([K("diffuseFresnelParameters")],t.prototype,"_diffuseFresnelParameters",void 0),d([P("_markAllSubMeshesAsFresnelDirty")],t.prototype,"diffuseFresnelParameters",void 0),d([K("opacityFresnelParameters")],t.prototype,"_opacityFresnelParameters",void 0),d([P("_markAllSubMeshesAsFresnelAndMiscDirty")],t.prototype,"opacityFresnelParameters",void 0),d([K("reflectionFresnelParameters")],t.prototype,"_reflectionFresnelParameters",void 0),d([P("_markAllSubMeshesAsFresnelDirty")],t.prototype,"reflectionFresnelParameters",void 0),d([K("refractionFresnelParameters")],t.prototype,"_refractionFresnelParameters",void 0),d([P("_markAllSubMeshesAsFresnelDirty")],t.prototype,"refractionFresnelParameters",void 0),d([K("emissiveFresnelParameters")],t.prototype,"_emissiveFresnelParameters",void 0),d([P("_markAllSubMeshesAsFresnelDirty")],t.prototype,"emissiveFresnelParameters",void 0),d([m("useReflectionFresnelFromSpecular")],t.prototype,"_useReflectionFresnelFromSpecular",void 0),d([P("_markAllSubMeshesAsFresnelDirty")],t.prototype,"useReflectionFresnelFromSpecular",void 0),d([m("useGlossinessFromSpecularMapAlpha")],t.prototype,"_useGlossinessFromSpecularMapAlpha",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useGlossinessFromSpecularMapAlpha",void 0),d([m("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),d([P("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),d([m("invertNormalMapX")],t.prototype,"_invertNormalMapX",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapX",void 0),d([m("invertNormalMapY")],t.prototype,"_invertNormalMapY",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapY",void 0),d([m("twoSidedLighting")],t.prototype,"_twoSidedLighting",void 0),d([P("_markAllSubMeshesAsTexturesDirty")],t.prototype,"twoSidedLighting",void 0),d([m()],t.prototype,"useLogarithmicDepth",null),t}(He);he.RegisteredTypes["BABYLON.StandardMaterial"]=pe;O.DefaultMaterialFactory=function(o){return new pe("default material",o)};z._instancedMeshFactory=function(o,t){var e=new Dn(o,t);if(t.instancedBuffers){e.instancedBuffers={};for(var n in t.instancedBuffers)e.instancedBuffers[n]=t.instancedBuffers[n]}return e};var Dn=function(o){j(t,o);function t(e,n){var i=o.call(this,e,n.getScene())||this;i._indexInSourceMeshInstanceArray=-1,n.addInstance(i),i._sourceMesh=n,i._unIndexed=n._unIndexed,i.position.copyFrom(n.position),i.rotation.copyFrom(n.rotation),i.scaling.copyFrom(n.scaling),n.rotationQuaternion&&(i.rotationQuaternion=n.rotationQuaternion.clone()),i.animations=Oe.Slice(n.animations);for(var r=0,a=n.getAnimationRanges();r<a.length;r++){var s=a[r];s!=null&&i.createAnimationRange(s.name,s.from,s.to)}return i.infiniteDistance=n.infiniteDistance,i.setPivotMatrix(n.getPivotMatrix()),i.refreshBoundingInfo(),i._syncSubMeshes(),i}return t.prototype.getClassName=function(){return"InstancedMesh"},Object.defineProperty(t.prototype,"lightSources",{get:function(){return this._sourceMesh._lightSources},enumerable:!1,configurable:!0}),t.prototype._resyncLightSources=function(){},t.prototype._resyncLightSource=function(e){},t.prototype._removeLightSource=function(e,n){},Object.defineProperty(t.prototype,"receiveShadows",{get:function(){return this._sourceMesh.receiveShadows},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"material",{get:function(){return this._sourceMesh.material},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visibility",{get:function(){return this._sourceMesh.visibility},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"skeleton",{get:function(){return this._sourceMesh.skeleton},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"renderingGroupId",{get:function(){return this._sourceMesh.renderingGroupId},set:function(e){!this._sourceMesh||e===this._sourceMesh.renderingGroupId||de.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")},enumerable:!1,configurable:!0}),t.prototype.getTotalVertices=function(){return this._sourceMesh?this._sourceMesh.getTotalVertices():0},t.prototype.getTotalIndices=function(){return this._sourceMesh.getTotalIndices()},Object.defineProperty(t.prototype,"sourceMesh",{get:function(){return this._sourceMesh},enumerable:!1,configurable:!0}),t.prototype.createInstance=function(e){return this._sourceMesh.createInstance(e)},t.prototype.isReady=function(e){return e===void 0&&(e=!1),this._sourceMesh.isReady(e,!0)},t.prototype.getVerticesData=function(e,n){return this._sourceMesh.getVerticesData(e,n)},t.prototype.setVerticesData=function(e,n,i,r){return this.sourceMesh&&this.sourceMesh.setVerticesData(e,n,i,r),this.sourceMesh},t.prototype.updateVerticesData=function(e,n,i,r){return this.sourceMesh&&this.sourceMesh.updateVerticesData(e,n,i,r),this.sourceMesh},t.prototype.setIndices=function(e,n){return n===void 0&&(n=null),this.sourceMesh&&this.sourceMesh.setIndices(e,n),this.sourceMesh},t.prototype.isVerticesDataPresent=function(e){return this._sourceMesh.isVerticesDataPresent(e)},t.prototype.getIndices=function(){return this._sourceMesh.getIndices()},Object.defineProperty(t.prototype,"_positions",{get:function(){return this._sourceMesh._positions},enumerable:!1,configurable:!0}),t.prototype.refreshBoundingInfo=function(e){if(e===void 0&&(e=!1),this._boundingInfo&&this._boundingInfo.isLocked)return this;var n=this._sourceMesh.geometry?this._sourceMesh.geometry.boundingBias:null;return this._refreshBoundingInfo(this._sourceMesh._getPositionData(e),n),this},t.prototype._preActivate=function(){return this._currentLOD&&this._currentLOD._preActivate(),this},t.prototype._activate=function(e,n){if(this._sourceMesh.subMeshes||de.Warn("Instances should only be created for meshes with geometry."),this._currentLOD){var i=this._currentLOD._getWorldMatrixDeterminant()>0!=this._getWorldMatrixDeterminant()>0;if(i)return this._internalAbstractMeshDataInfo._actAsRegularMesh=!0,!0;if(this._internalAbstractMeshDataInfo._actAsRegularMesh=!1,this._currentLOD._registerInstanceForRenderId(this,e),n){if(!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate)return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!0,!0}else if(!this._currentLOD._internalAbstractMeshDataInfo._isActive)return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances=!0,!0}return!1},t.prototype._postActivate=function(){this._sourceMesh.edgesShareWithInstances&&this._sourceMesh._edgesRenderer&&this._sourceMesh._edgesRenderer.isEnabled&&this._sourceMesh._renderingGroup?(this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer),this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())):this._edgesRenderer&&this._edgesRenderer.isEnabled&&this._sourceMesh._renderingGroup&&this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)},t.prototype.getWorldMatrix=function(){if(this._currentLOD&&this._currentLOD.billboardMode!==Fe.BILLBOARDMODE_NONE&&this._currentLOD._masterMesh!==this){var e=this._currentLOD._masterMesh;return this._currentLOD._masterMesh=this,I.Vector3[7].copyFrom(this._currentLOD.position),this._currentLOD.position.set(0,0,0),I.Matrix[0].copyFrom(this._currentLOD.computeWorldMatrix(!0)),this._currentLOD.position.copyFrom(I.Vector3[7]),this._currentLOD._masterMesh=e,I.Matrix[0]}return o.prototype.getWorldMatrix.call(this)},Object.defineProperty(t.prototype,"isAnInstance",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.getLOD=function(e){if(!e)return this;var n=this.getBoundingInfo();return this._currentLOD=this.sourceMesh.getLOD(e,n.boundingSphere),this._currentLOD===this.sourceMesh?this.sourceMesh:this._currentLOD},t.prototype._preActivateForIntermediateRendering=function(e){return this.sourceMesh._preActivateForIntermediateRendering(e)},t.prototype._syncSubMeshes=function(){if(this.releaseSubMeshes(),this._sourceMesh.subMeshes)for(var e=0;e<this._sourceMesh.subMeshes.length;e++)this._sourceMesh.subMeshes[e].clone(this,this._sourceMesh);return this},t.prototype._generatePointsArray=function(){return this._sourceMesh._generatePointsArray()},t.prototype._updateBoundingInfo=function(){var e=this;return this._boundingInfo?this._boundingInfo.update(e.worldMatrixFromCache):this._boundingInfo=new Ne(this.absolutePosition,this.absolutePosition,e.worldMatrixFromCache),this._updateSubMeshesBoundingInfo(e.worldMatrixFromCache),this},t.prototype.clone=function(e,n,i){n===void 0&&(n=null);var r=this._sourceMesh.createInstance(e);if(we.DeepCopy(this,r,["name","subMeshes","uniqueId","parent","lightSources","receiveShadows","material","visibility","skeleton","sourceMesh","isAnInstance","facetNb","isFacetDataEnabled","isBlocked","useBones","hasInstances","collider","edgesRenderer","forward","up","right","absolutePosition","absoluteScaling","absoluteRotationQuaternion","isWorldMatrixFrozen","nonUniformScaling","behaviors","worldMatrixFromCache","hasThinInstances"],[]),this.refreshBoundingInfo(),n&&(r.parent=n),!i)for(var a=0;a<this.getScene().meshes.length;a++){var s=this.getScene().meshes[a];s.parent===this&&s.clone(s.name,r)}return r.computeWorldMatrix(!0),r},t.prototype.dispose=function(e,n){n===void 0&&(n=!1),this._sourceMesh.removeInstance(this),o.prototype.dispose.call(this,e,n)},t}(Ue);z.prototype.edgesShareWithInstances=!1;z.prototype.registerInstancedBuffer=function(o,t){if(this.removeVerticesData(o),!this.instancedBuffers){this.instancedBuffers={};for(var e=0,n=this.instances;e<n.length;e++){var i=n[e];i.instancedBuffers={}}this._userInstancedBuffersStorage={data:{},vertexBuffers:{},strides:{},sizes:{}}}this.instancedBuffers[o]=null,this._userInstancedBuffersStorage.strides[o]=t,this._userInstancedBuffersStorage.sizes[o]=t*32,this._userInstancedBuffersStorage.data[o]=new Float32Array(this._userInstancedBuffersStorage.sizes[o]),this._userInstancedBuffersStorage.vertexBuffers[o]=new b(this.getEngine(),this._userInstancedBuffersStorage.data[o],o,!0,!1,t,!0),this.setVerticesBuffer(this._userInstancedBuffersStorage.vertexBuffers[o]);for(var r=0,a=this.instances;r<a.length;r++){var i=a[r];i.instancedBuffers[o]=null}};z.prototype._processInstancedBuffers=function(o,t){var e=o.length;for(var n in this.instancedBuffers){for(var i=this._userInstancedBuffersStorage.sizes[n],r=this._userInstancedBuffersStorage.strides[n],a=(e+1)*r;i<a;)i*=2;this._userInstancedBuffersStorage.data[n].length!=i&&(this._userInstancedBuffersStorage.data[n]=new Float32Array(i),this._userInstancedBuffersStorage.sizes[n]=i,this._userInstancedBuffersStorage.vertexBuffers[n]&&(this._userInstancedBuffersStorage.vertexBuffers[n].dispose(),this._userInstancedBuffersStorage.vertexBuffers[n]=null));var s=this._userInstancedBuffersStorage.data[n],f=0;if(t){var l=this.instancedBuffers[n];l.toArray?l.toArray(s,f):l.copyToArray(s,f),f+=r}for(var c=0;c<e;c++){var p=o[c],l=p.instancedBuffers[n];l.toArray?l.toArray(s,f):l.copyToArray(s,f),f+=r}this._userInstancedBuffersStorage.vertexBuffers[n]?this._userInstancedBuffersStorage.vertexBuffers[n].updateDirectly(s,0):(this._userInstancedBuffersStorage.vertexBuffers[n]=new b(this.getEngine(),this._userInstancedBuffersStorage.data[n],n,!0,!1,r,!0),this.setVerticesBuffer(this._userInstancedBuffersStorage.vertexBuffers[n]))}};z.prototype._disposeInstanceSpecificData=function(){for(this._instanceDataStorage.instancesBuffer&&(this._instanceDataStorage.instancesBuffer.dispose(),this._instanceDataStorage.instancesBuffer=null);this.instances.length;)this.instances[0].dispose();for(var o in this.instancedBuffers)this._userInstancedBuffersStorage.vertexBuffers[o]&&this._userInstancedBuffersStorage.vertexBuffers[o].dispose();this.instancedBuffers={}};var bn=Object.freeze(new X(0,0,0,0)),Rn=Object.freeze(D.Zero()),On=Object.freeze(Xe.Zero()),Fn=Object.freeze(ue.Zero()),Nn=Object.freeze(k.Black()),wn=function(){function o(t,e,n,i){var r=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=e,this._target=t,this._scene=n,this._host=i,this._activeTargets=[],e._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===y.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=_.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var a={frame:0,value:this._minValue};this._keys.splice(0,0,a)}if(this._target instanceof Array){for(var s=0,f=0,l=this._target;f<l.length;f++){var c=l[f];this._preparePath(c,s),this._getOriginalValues(s),s++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var p=e.getEvents();p&&p.length>0&&p.forEach(function(h){r._events.push(h._clone())}),this._enableBlending=t&&t.animationPropertiesOverride?t.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(o.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),o.prototype._preparePath=function(t,e){e===void 0&&(e=0);var n=this._animation.targetPropertyPath;if(n.length>1){for(var i=t[n[0]],r=1;r<n.length-1;r++)i=i[n[r]];this._targetPath=n[n.length-1],this._activeTargets[e]=i}else this._targetPath=n[0],this._activeTargets[e]=t},Object.defineProperty(o.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),o.prototype.reset=function(t){if(t===void 0&&(t=!1),t)if(this._target instanceof Array)for(var e=0,n=0,i=this._target;n<i.length;n++){var r=i[n];this._originalValue[e]!==void 0&&this._setValue(r,this._activeTargets[e],this._originalValue[e],-1,e),e++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var e=0;e<this._events.length;e++)this._events[e].isDone=!1},o.prototype.isStopped=function(){return this._stopped},o.prototype.dispose=function(){var t=this._animation.runtimeAnimations.indexOf(this);t>-1&&this._animation.runtimeAnimations.splice(t,1)},o.prototype.setValue=function(t,e){if(this._targetIsArray){for(var n=0;n<this._target.length;n++){var i=this._target[n];this._setValue(i,this._activeTargets[n],t,e,n)}return}this._setValue(this._target,this._directTarget,t,e,0)},o.prototype._getOriginalValues=function(t){t===void 0&&(t=0);var e,n=this._activeTargets[t];n.getRestPose&&this._targetPath==="_matrix"?e=n.getRestPose():e=n[this._targetPath],e&&e.clone?this._originalValue[t]=e.clone():this._originalValue[t]=e},o.prototype._setValue=function(t,e,n,i,r){if(this._currentActiveTarget=e,this._weight=i,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var a=e[this._targetPath];a.clone?this._originalBlendValue=a.clone():this._originalBlendValue=a}this._originalBlendValue.m?y.AllowMatrixDecomposeForInterpolation?this._currentValue?_.DecomposeLerpToRef(this._originalBlendValue,n,this._blendingFactor,this._currentValue):this._currentValue=_.DecomposeLerp(this._originalBlendValue,n,this._blendingFactor):this._currentValue?_.LerpToRef(this._originalBlendValue,n,this._blendingFactor,this._currentValue):this._currentValue=_.Lerp(this._originalBlendValue,n,this._blendingFactor):this._currentValue=y._UniversalLerp(this._originalBlendValue,n,this._blendingFactor);var s=t&&t.animationPropertiesOverride?t.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=s}else this._currentValue=n;i!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[r]):e[this._targetPath]=this._currentValue,t.markAsDirty&&t.markAsDirty(this._animation.targetProperty)},o.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},o.prototype.goToFrame=function(t){var e=this._animation.getKeys();t<e[0].frame?t=e[0].frame:t>e[e.length-1].frame&&(t=e[e.length-1].frame);var n=this._events;if(n.length)for(var i=0;i<n.length;i++)n[i].onlyOnce||(n[i].isDone=n[i].frame<t);this._currentFrame=t;var r=this._animation._interpolate(t,this._animationState);this.setValue(r,-1)},o.prototype._prepareForSpeedRatioChange=function(t){var e=this._previousDelay*(this._animation.framePerSecond*t)/1e3;this._ratioOffset=this._previousRatio-e},o.prototype.animate=function(t,e,n,i,r,a){a===void 0&&(a=-1);var s=this._animation,f=s.targetPropertyPath;if(!f||f.length<1)return this._stopped=!0,!1;var l=!0;(e<this._minFrame||e>this._maxFrame)&&(e=this._minFrame),(n<this._minFrame||n>this._maxFrame)&&(n=this._maxFrame);var c=n-e,p,h=t*(s.framePerSecond*r)/1e3+this._ratioOffset,v=0;if(this._previousDelay=t,this._previousRatio=h,!i&&n>=e&&h>=c)l=!1,v=s._getKeyValue(this._maxValue);else if(!i&&e>=n&&h<=c)l=!1,v=s._getKeyValue(this._minValue);else if(this._animationState.loopMode!==y.ANIMATIONLOOPMODE_CYCLE){var u=n.toString()+e.toString();if(!this._offsetsCache[u]){this._animationState.repeatCount=0,this._animationState.loopMode=y.ANIMATIONLOOPMODE_CYCLE;var S=s._interpolate(e,this._animationState),E=s._interpolate(n,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),s.dataType){case y.ANIMATIONTYPE_FLOAT:this._offsetsCache[u]=E-S;break;case y.ANIMATIONTYPE_QUATERNION:this._offsetsCache[u]=E.subtract(S);break;case y.ANIMATIONTYPE_VECTOR3:this._offsetsCache[u]=E.subtract(S);case y.ANIMATIONTYPE_VECTOR2:this._offsetsCache[u]=E.subtract(S);case y.ANIMATIONTYPE_SIZE:this._offsetsCache[u]=E.subtract(S);case y.ANIMATIONTYPE_COLOR3:this._offsetsCache[u]=E.subtract(S)}this._highLimitsCache[u]=E}v=this._highLimitsCache[u],p=this._offsetsCache[u]}if(p===void 0)switch(s.dataType){case y.ANIMATIONTYPE_FLOAT:p=0;break;case y.ANIMATIONTYPE_QUATERNION:p=bn;break;case y.ANIMATIONTYPE_VECTOR3:p=Rn;break;case y.ANIMATIONTYPE_VECTOR2:p=On;break;case y.ANIMATIONTYPE_SIZE:p=Fn;break;case y.ANIMATIONTYPE_COLOR3:p=Nn}var T;if(this._host&&this._host.syncRoot){var x=this._host.syncRoot,w=(x.masterFrame-x.fromFrame)/(x.toFrame-x.fromFrame);T=e+(n-e)*w}else T=l&&c!==0?e+h%c:n;var L=this._events;if((c>0&&this.currentFrame>T||c<0&&this.currentFrame<T)&&(this._onLoop(),L.length))for(var F=0;F<L.length;F++)L[F].onlyOnce||(L[F].isDone=!1);this._currentFrame=T,this._animationState.repeatCount=c===0?0:h/c>>0,this._animationState.highLimitValue=v,this._animationState.offsetValue=p;var q=s._interpolate(T,this._animationState);if(this.setValue(q,a),L.length){for(var F=0;F<L.length;F++)if(c>0&&T>=L[F].frame&&L[F].frame>=e||c<0&&T<=L[F].frame&&L[F].frame<=e){var N=L[F];N.isDone||(N.onlyOnce&&(L.splice(F,1),F--),N.isDone=!0,N.action(T))}}return l||(this._stopped=!0),l},o}(),Un=function(o){j(t,o);function t(e,n,i,r,a,s,f){i===void 0&&(i=null),r===void 0&&(r=null),a===void 0&&(a=null),s===void 0&&(s=null),f===void 0&&(f=null);var l=o.call(this,e,n.getScene())||this;return l.name=e,l.children=new Array,l.animations=new Array,l._index=null,l._absoluteTransform=new _,l._invertedAbsoluteTransform=new _,l._scalingDeterminant=1,l._worldTransform=new _,l._needToDecompose=!0,l._needToCompose=!1,l._linkedTransformNode=null,l._waitingTransformNodeId=null,l._skeleton=n,l._localMatrix=r?r.clone():_.Identity(),l._restPose=a||l._localMatrix.clone(),l._bindPose=l._localMatrix.clone(),l._baseMatrix=s||l._localMatrix.clone(),l._index=f,n.bones.push(l),l.setParent(i,!1),(s||r)&&l._updateDifferenceMatrix(),l}return Object.defineProperty(t.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(e){this._localMatrix.copyFrom(e),this._needToDecompose=!0},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"Bone"},t.prototype.getSkeleton=function(){return this._skeleton},t.prototype.getParent=function(){return this._parent},t.prototype.getChildren=function(){return this.children},t.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},t.prototype.setParent=function(e,n){if(n===void 0&&(n=!0),this._parent!==e){if(this._parent){var i=this._parent.children.indexOf(this);i!==-1&&this._parent.children.splice(i,1)}this._parent=e,this._parent&&this._parent.children.push(this),n&&this._updateDifferenceMatrix(),this.markAsDirty()}},t.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},t.prototype.getBaseMatrix=function(){return this._baseMatrix},t.prototype.getRestPose=function(){return this._restPose},t.prototype.setRestPose=function(e){this._restPose.copyFrom(e)},t.prototype.getBindPose=function(){return this._bindPose},t.prototype.setBindPose=function(e){this._bindPose.copyFrom(e)},t.prototype.getWorldMatrix=function(){return this._worldTransform},t.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},t.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},t.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},t.prototype.linkTransformNode=function(e){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=e,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},t.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(t.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(e){this._decompose(),this._localPosition.copyFrom(e),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this.getRotation()},set:function(e){this.setRotation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(e){this.setRotationQuaternion(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scaling",{get:function(){return this.getScale()},set:function(e){this.setScale(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),t.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=D.Zero(),this._localRotation=X.Zero(),this._localPosition=D.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},t.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,_.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},t.prototype.updateMatrix=function(e,n,i){n===void 0&&(n=!0),i===void 0&&(i=!0),this._baseMatrix.copyFrom(e),n&&this._updateDifferenceMatrix(),i?(this._needToCompose=!1,this._localMatrix.copyFrom(e),this._markAsDirtyAndDecompose()):this.markAsDirty()},t.prototype._updateDifferenceMatrix=function(e,n){if(n===void 0&&(n=!0),e||(e=this._baseMatrix),this._parent?e.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(e),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),n)for(var i=0;i<this.children.length;i++)this.children[i]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},t.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},t.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},t.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},t.prototype.translate=function(e,n,i){n===void 0&&(n=C.LOCAL);var r=this.getLocalMatrix();if(n==C.LOCAL)r.addAtIndex(12,e.x),r.addAtIndex(13,e.y),r.addAtIndex(14,e.z);else{var a=null;i&&(a=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var s=t._tmpMats[0],f=t._tmpVecs[0];this._parent?i&&a?(s.copyFrom(this._parent.getAbsoluteTransform()),s.multiplyToRef(a,s)):s.copyFrom(this._parent.getAbsoluteTransform()):_.IdentityToRef(s),s.setTranslationFromFloats(0,0,0),s.invert(),D.TransformCoordinatesToRef(e,s,f),r.addAtIndex(12,f.x),r.addAtIndex(13,f.y),r.addAtIndex(14,f.z)}this._markAsDirtyAndDecompose()},t.prototype.setPosition=function(e,n,i){n===void 0&&(n=C.LOCAL);var r=this.getLocalMatrix();if(n==C.LOCAL)r.setTranslationFromFloats(e.x,e.y,e.z);else{var a=null;i&&(a=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var s=t._tmpMats[0],f=t._tmpVecs[0];this._parent?(i&&a?(s.copyFrom(this._parent.getAbsoluteTransform()),s.multiplyToRef(a,s)):s.copyFrom(this._parent.getAbsoluteTransform()),s.invert()):_.IdentityToRef(s),D.TransformCoordinatesToRef(e,s,f),r.setTranslationFromFloats(f.x,f.y,f.z)}this._markAsDirtyAndDecompose()},t.prototype.setAbsolutePosition=function(e,n){this.setPosition(e,C.WORLD,n)},t.prototype.scale=function(e,n,i,r){r===void 0&&(r=!1);var a=this.getLocalMatrix(),s=t._tmpMats[0];_.ScalingToRef(e,n,i,s),s.multiplyToRef(a,a),s.invert();for(var f=0,l=this.children;f<l.length;f++){var c=l[f],p=c.getLocalMatrix();p.multiplyToRef(s,p),p.multiplyAtIndex(12,e),p.multiplyAtIndex(13,n),p.multiplyAtIndex(14,i),c._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),r)for(var h=0,v=this.children;h<v.length;h++){var c=v[h];c.scale(e,n,i,r)}},t.prototype.setScale=function(e){this._decompose(),this._localScaling.copyFrom(e),this._markAsDirtyAndCompose()},t.prototype.getScale=function(){return this._decompose(),this._localScaling},t.prototype.getScaleToRef=function(e){this._decompose(),e.copyFrom(this._localScaling)},t.prototype.setYawPitchRoll=function(e,n,i,r,a){if(r===void 0&&(r=C.LOCAL),r===C.LOCAL){var s=t._tmpQuat;X.RotationYawPitchRollToRef(e,n,i,s),this.setRotationQuaternion(s,r,a);return}var f=t._tmpMats[0];if(!!this._getNegativeRotationToRef(f,a)){var l=t._tmpMats[1];_.RotationYawPitchRollToRef(e,n,i,l),f.multiplyToRef(l,l),this._rotateWithMatrix(l,r,a)}},t.prototype.rotate=function(e,n,i,r){i===void 0&&(i=C.LOCAL);var a=t._tmpMats[0];a.setTranslationFromFloats(0,0,0),_.RotationAxisToRef(e,n,a),this._rotateWithMatrix(a,i,r)},t.prototype.setAxisAngle=function(e,n,i,r){if(i===void 0&&(i=C.LOCAL),i===C.LOCAL){var a=t._tmpQuat;X.RotationAxisToRef(e,n,a),this.setRotationQuaternion(a,i,r);return}var s=t._tmpMats[0];if(!!this._getNegativeRotationToRef(s,r)){var f=t._tmpMats[1];_.RotationAxisToRef(e,n,f),s.multiplyToRef(f,f),this._rotateWithMatrix(f,i,r)}},t.prototype.setRotation=function(e,n,i){n===void 0&&(n=C.LOCAL),this.setYawPitchRoll(e.y,e.x,e.z,n,i)},t.prototype.setRotationQuaternion=function(e,n,i){if(n===void 0&&(n=C.LOCAL),n===C.LOCAL){this._decompose(),this._localRotation.copyFrom(e),this._markAsDirtyAndCompose();return}var r=t._tmpMats[0];if(!!this._getNegativeRotationToRef(r,i)){var a=t._tmpMats[1];_.FromQuaternionToRef(e,a),r.multiplyToRef(a,a),this._rotateWithMatrix(a,n,i)}},t.prototype.setRotationMatrix=function(e,n,i){if(n===void 0&&(n=C.LOCAL),n===C.LOCAL){var r=t._tmpQuat;X.FromRotationMatrixToRef(e,r),this.setRotationQuaternion(r,n,i);return}var a=t._tmpMats[0];if(!!this._getNegativeRotationToRef(a,i)){var s=t._tmpMats[1];s.copyFrom(e),a.multiplyToRef(e,s),this._rotateWithMatrix(s,n,i)}},t.prototype._rotateWithMatrix=function(e,n,i){n===void 0&&(n=C.LOCAL);var r=this.getLocalMatrix(),a=r.m[12],s=r.m[13],f=r.m[14],l=this.getParent(),c=t._tmpMats[3],p=t._tmpMats[4];l&&n==C.WORLD?(i?(c.copyFrom(i.getWorldMatrix()),l.getAbsoluteTransform().multiplyToRef(c,c)):c.copyFrom(l.getAbsoluteTransform()),p.copyFrom(c),p.invert(),r.multiplyToRef(c,r),r.multiplyToRef(e,r),r.multiplyToRef(p,r)):n==C.WORLD&&i?(c.copyFrom(i.getWorldMatrix()),p.copyFrom(c),p.invert(),r.multiplyToRef(c,r),r.multiplyToRef(e,r),r.multiplyToRef(p,r)):r.multiplyToRef(e,r),r.setTranslationFromFloats(a,s,f),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},t.prototype._getNegativeRotationToRef=function(e,n){var i=t._tmpMats[2];return e.copyFrom(this.getAbsoluteTransform()),n&&(e.multiplyToRef(n.getWorldMatrix(),e),_.ScalingToRef(n.scaling.x,n.scaling.y,n.scaling.z,i)),e.invert(),isNaN(e.m[0])?!1:(i.multiplyAtIndex(0,this._scalingDeterminant),e.multiplyToRef(i,e),!0)},t.prototype.getPosition=function(e,n){e===void 0&&(e=C.LOCAL),n===void 0&&(n=null);var i=D.Zero();return this.getPositionToRef(e,n,i),i},t.prototype.getPositionToRef=function(e,n,i){if(e===void 0&&(e=C.LOCAL),e==C.LOCAL){var r=this.getLocalMatrix();i.x=r.m[12],i.y=r.m[13],i.z=r.m[14]}else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var s=t._tmpMats[0];n&&a?(s.copyFrom(this.getAbsoluteTransform()),s.multiplyToRef(a,s)):s=this.getAbsoluteTransform(),i.x=s.m[12],i.y=s.m[13],i.z=s.m[14]}},t.prototype.getAbsolutePosition=function(e){e===void 0&&(e=null);var n=D.Zero();return this.getPositionToRef(C.WORLD,e,n),n},t.prototype.getAbsolutePositionToRef=function(e,n){this.getPositionToRef(C.WORLD,e,n)},t.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var e=this._skeleton.getPoseMatrix();e&&this._absoluteTransform.multiplyToRef(e,this._absoluteTransform)}for(var n=this.children,i=n.length,r=0;r<i;r++)n[r].computeAbsoluteTransforms()},t.prototype.getDirection=function(e,n){n===void 0&&(n=null);var i=D.Zero();return this.getDirectionToRef(e,n,i),i},t.prototype.getDirectionToRef=function(e,n,i){n===void 0&&(n=null);var r=null;n&&(r=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=t._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),n&&r&&a.multiplyToRef(r,a),D.TransformNormalToRef(e,a,i),i.normalize()},t.prototype.getRotation=function(e,n){e===void 0&&(e=C.LOCAL),n===void 0&&(n=null);var i=D.Zero();return this.getRotationToRef(e,n,i),i},t.prototype.getRotationToRef=function(e,n,i){e===void 0&&(e=C.LOCAL),n===void 0&&(n=null);var r=t._tmpQuat;this.getRotationQuaternionToRef(e,n,r),r.toEulerAnglesToRef(i)},t.prototype.getRotationQuaternion=function(e,n){e===void 0&&(e=C.LOCAL),n===void 0&&(n=null);var i=X.Identity();return this.getRotationQuaternionToRef(e,n,i),i},t.prototype.getRotationQuaternionToRef=function(e,n,i){if(e===void 0&&(e=C.LOCAL),n===void 0&&(n=null),e==C.LOCAL)this._decompose(),i.copyFrom(this._localRotation);else{var r=t._tmpMats[0],a=this.getAbsoluteTransform();n?a.multiplyToRef(n.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.decompose(void 0,i,void 0)}},t.prototype.getRotationMatrix=function(e,n){e===void 0&&(e=C.LOCAL);var i=_.Identity();return this.getRotationMatrixToRef(e,n,i),i},t.prototype.getRotationMatrixToRef=function(e,n,i){if(e===void 0&&(e=C.LOCAL),e==C.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(i);else{var r=t._tmpMats[0],a=this.getAbsoluteTransform();n?a.multiplyToRef(n.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.getRotationMatrixToRef(i)}},t.prototype.getAbsolutePositionFromLocal=function(e,n){n===void 0&&(n=null);var i=D.Zero();return this.getAbsolutePositionFromLocalToRef(e,n,i),i},t.prototype.getAbsolutePositionFromLocalToRef=function(e,n,i){n===void 0&&(n=null);var r=null;n&&(r=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=t._tmpMats[0];n&&r?(a.copyFrom(this.getAbsoluteTransform()),a.multiplyToRef(r,a)):a=this.getAbsoluteTransform(),D.TransformCoordinatesToRef(e,a,i)},t.prototype.getLocalPositionFromAbsolute=function(e,n){n===void 0&&(n=null);var i=D.Zero();return this.getLocalPositionFromAbsoluteToRef(e,n,i),i},t.prototype.getLocalPositionFromAbsoluteToRef=function(e,n,i){n===void 0&&(n=null);var r=null;n&&(r=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=t._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),n&&r&&a.multiplyToRef(r,a),a.invert(),D.TransformCoordinatesToRef(e,a,i)},t.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},t._tmpVecs=ge.BuildArray(2,D.Zero),t._tmpQuat=X.Identity(),t._tmpMats=ge.BuildArray(5,_.Identity),t}(Ve),Te=function(){function o(t,e,n,i,r,a,s,f,l,c){n===void 0&&(n=0),i===void 0&&(i=100),r===void 0&&(r=!1),a===void 0&&(a=1),c===void 0&&(c=!1),this.target=e,this.fromFrame=n,this.toFrame=i,this.loopAnimation=r,this.onAnimationEnd=s,this.onAnimationLoop=l,this.isAdditive=c,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new re,this.onAnimationLoopObservable=new re,this._scene=t,f&&this.appendAnimations(e,f),this._speedRatio=a,t._activeAnimatables.push(this)}return Object.defineProperty(o.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"weight",{get:function(){return this._weight},set:function(t){if(t===-1){this._weight=-1;return}this._weight=Math.min(Math.max(t,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(t){for(var e=0;e<this._runtimeAnimations.length;e++){var n=this._runtimeAnimations[e];n._prepareForSpeedRatioChange(t)}this._speedRatio=t},enumerable:!1,configurable:!0}),o.prototype.syncWith=function(t){if(this._syncRoot=t,t){var e=this._scene._activeAnimatables.indexOf(this);e>-1&&(this._scene._activeAnimatables.splice(e,1),this._scene._activeAnimatables.push(this))}return this},o.prototype.getAnimations=function(){return this._runtimeAnimations},o.prototype.appendAnimations=function(t,e){for(var n=this,i=0;i<e.length;i++){var r=e[i],a=new wn(t,r,this._scene,this);a._onLoop=function(){n.onAnimationLoopObservable.notifyObservers(n),n.onAnimationLoop&&n.onAnimationLoop()},this._runtimeAnimations.push(a)}},o.prototype.getAnimationByTargetProperty=function(t){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)if(e[n].animation.targetProperty===t)return e[n].animation;return null},o.prototype.getRuntimeAnimationByTargetProperty=function(t){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)if(e[n].animation.targetProperty===t)return e[n];return null},o.prototype.reset=function(){for(var t=this._runtimeAnimations,e=0;e<t.length;e++)t[e].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},o.prototype.enableBlending=function(t){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)e[n].animation.enableBlending=!0,e[n].animation.blendingSpeed=t},o.prototype.disableBlending=function(){for(var t=this._runtimeAnimations,e=0;e<t.length;e++)t[e].animation.enableBlending=!1},o.prototype.goToFrame=function(t){var e=this._runtimeAnimations;if(e[0]){var n=e[0].animation.framePerSecond,i=e[0].currentFrame,r=this.speedRatio===0?0:(t-i)/n*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=r}for(var a=0;a<e.length;a++)e[a].goToFrame(t)},o.prototype.pause=function(){this._paused||(this._paused=!0)},o.prototype.restart=function(){this._paused=!1},o.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},o.prototype.stop=function(t,e){if(t||e){var n=this._scene._activeAnimatables.indexOf(this);if(n>-1){for(var i=this._runtimeAnimations,r=i.length-1;r>=0;r--){var a=i[r];t&&a.animation.name!=t||e&&!e(a.target)||(a.dispose(),i.splice(r,1))}i.length==0&&(this._scene._activeAnimatables.splice(n,1),this._raiseOnAnimationEnd())}}else{var r=this._scene._activeAnimatables.indexOf(this);if(r>-1){this._scene._activeAnimatables.splice(r,1);for(var i=this._runtimeAnimations,r=0;r<i.length;r++)i[r].dispose();this._raiseOnAnimationEnd()}}},o.prototype.waitAsync=function(){var t=this;return new Promise(function(e,n){t.onAnimationEndObservable.add(function(){e(t)},void 0,void 0,t,!0)})},o.prototype._animate=function(t){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=t),!0;if(this._localDelayOffset===null?(this._localDelayOffset=t,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=t-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var e=!1,n=this._runtimeAnimations,i;for(i=0;i<n.length;i++){var r=n[i],a=r.animate(t-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);e=e||a}if(this.animationStarted=e,!e){if(this.disposeOnEnd)for(i=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(i,1),i=0;i<n.length;i++)n[i].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return e},o}();O.prototype._animate=function(){if(!!this.animationsEnabled){var o=We.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=o}this.deltaTime=this.useConstantAnimationDeltaTime?16:(o-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=o;var t=this._activeAnimatables;if(t.length!==0){this._animationTime+=this.deltaTime;for(var e=this._animationTime,n=0;n<t.length;n++){var i=t[n];!i._animate(e)&&i.disposeOnEnd&&n--}this._processLateAnimationBindings()}}};O.prototype.beginWeightedAnimation=function(o,t,e,n,i,r,a,s,f,l,c){n===void 0&&(n=1),r===void 0&&(r=1),c===void 0&&(c=!1);var p=this.beginAnimation(o,t,e,i,r,a,s,!1,f,l,c);return p.weight=n,p};O.prototype.beginAnimation=function(o,t,e,n,i,r,a,s,f,l,c){i===void 0&&(i=1),s===void 0&&(s=!0),c===void 0&&(c=!1),t>e&&i>0&&(i*=-1),s&&this.stopAnimation(o,void 0,f),a||(a=new Te(this,o,t,e,n,i,r,void 0,l,c));var p=f?f(o):!0;if(o.animations&&p&&a.appendAnimations(o,o.animations),o.getAnimatables)for(var h=o.getAnimatables(),v=0;v<h.length;v++)this.beginAnimation(h[v],t,e,n,i,r,a,s,f,l);return a.reset(),a};O.prototype.beginHierarchyAnimation=function(o,t,e,n,i,r,a,s,f,l,c,p){r===void 0&&(r=1),f===void 0&&(f=!0),p===void 0&&(p=!1);var h=o.getDescendants(t),v=[];v.push(this.beginAnimation(o,e,n,i,r,a,s,f,l,void 0,p));for(var u=0,S=h;u<S.length;u++){var E=S[u];v.push(this.beginAnimation(E,e,n,i,r,a,s,f,l,void 0,p))}return v};O.prototype.beginDirectAnimation=function(o,t,e,n,i,r,a,s,f){f===void 0&&(f=!1),r===void 0&&(r=1),e>n&&r>0&&(r*=-1);var l=new Te(this,o,e,n,i,r,a,t,s,f);return l};O.prototype.beginDirectHierarchyAnimation=function(o,t,e,n,i,r,a,s,f,l){l===void 0&&(l=!1);var c=o.getDescendants(t),p=[];p.push(this.beginDirectAnimation(o,e,n,i,r,a,s,f,l));for(var h=0,v=c;h<v.length;h++){var u=v[h];p.push(this.beginDirectAnimation(u,e,n,i,r,a,s,f,l))}return p};O.prototype.getAnimatableByTarget=function(o){for(var t=0;t<this._activeAnimatables.length;t++)if(this._activeAnimatables[t].target===o)return this._activeAnimatables[t];return null};O.prototype.getAllAnimatablesByTarget=function(o){for(var t=[],e=0;e<this._activeAnimatables.length;e++)this._activeAnimatables[e].target===o&&t.push(this._activeAnimatables[e]);return t};O.prototype.stopAnimation=function(o,t,e){for(var n=this.getAllAnimatablesByTarget(o),i=0,r=n;i<r.length;i++){var a=r[i];a.stop(t,e)}};O.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var o=0;o<this._activeAnimatables.length;o++)this._activeAnimatables[o].stop();this._activeAnimatables=[]}for(var t=0,e=this.animationGroups;t<e.length;t++){var n=e[t];n.stop()}};O.prototype._registerTargetForLateAnimationBinding=function(o,t){var e=o.target;this._registeredForLateAnimationBindings.pushNoDuplicate(e),e._lateAnimationHolders||(e._lateAnimationHolders={}),e._lateAnimationHolders[o.targetPath]||(e._lateAnimationHolders[o.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:t}),o.isAdditive?(e._lateAnimationHolders[o.targetPath].additiveAnimations.push(o),e._lateAnimationHolders[o.targetPath].totalAdditiveWeight+=o.weight):(e._lateAnimationHolders[o.targetPath].animations.push(o),e._lateAnimationHolders[o.targetPath].totalWeight+=o.weight)};O.prototype._processLateAnimationBindingsForMatrices=function(o){if(o.totalWeight===0&&o.totalAdditiveWeight===0)return o.originalValue;var t=1,e=I.Vector3[0],n=I.Vector3[1],i=I.Quaternion[0],r=0,a=o.animations[0],s=o.originalValue,f=1,l=!1;if(o.totalWeight<1)f=1-o.totalWeight,s.decompose(n,i,e);else{if(r=1,t=o.totalWeight,f=a.weight/t,f==1)if(o.totalAdditiveWeight)l=!0;else return a.currentValue;a.currentValue.decompose(n,i,e)}if(!l){n.scaleInPlace(f),e.scaleInPlace(f),i.scaleInPlace(f);for(var c=r;c<o.animations.length;c++){var p=o.animations[c];if(p.weight!==0){var f=p.weight/t,h=I.Vector3[2],v=I.Vector3[3],u=I.Quaternion[1];p.currentValue.decompose(v,u,h),v.scaleAndAddToRef(f,n),u.scaleAndAddToRef(f,i),h.scaleAndAddToRef(f,e)}}}for(var S=0;S<o.additiveAnimations.length;S++){var p=o.additiveAnimations[S];if(p.weight!==0){var h=I.Vector3[2],v=I.Vector3[3],u=I.Quaternion[1];p.currentValue.decompose(v,u,h),v.multiplyToRef(n,v),D.LerpToRef(n,v,p.weight,n),i.multiplyToRef(u,u),X.SlerpToRef(i,u,p.weight,i),h.scaleAndAddToRef(p.weight,e)}}var E=a?a._animationState.workValue:I.Matrix[0].clone();return _.ComposeToRef(n,i,e,E),E};O.prototype._processLateAnimationBindingsForQuaternions=function(o,t){if(o.totalWeight===0&&o.totalAdditiveWeight===0)return t;var e=o.animations[0],n=o.originalValue,i=t;if(o.totalWeight===0&&o.totalAdditiveWeight>0)i.copyFrom(n);else if(o.animations.length===1){if(X.SlerpToRef(n,e.currentValue,Math.min(1,o.totalWeight),i),o.totalAdditiveWeight===0)return i}else if(o.animations.length>1){var r=1,a=void 0,s=void 0;if(o.totalWeight<1){var f=1-o.totalWeight;a=[],s=[],a.push(n),s.push(f)}else{if(o.animations.length===2&&(X.SlerpToRef(o.animations[0].currentValue,o.animations[1].currentValue,o.animations[1].weight/o.totalWeight,t),o.totalAdditiveWeight===0))return t;a=[],s=[],r=o.totalWeight}for(var l=0;l<o.animations.length;l++){var c=o.animations[l];a.push(c.currentValue),s.push(c.weight/r)}for(var p=0,h=0;h<a.length;){if(!h){X.SlerpToRef(a[h],a[h+1],s[h+1]/(s[h]+s[h+1]),t),i=t,p=s[h]+s[h+1],h+=2;continue}p+=s[h],X.SlerpToRef(i,a[h],s[h]/p,i),h++}}for(var v=0;v<o.additiveAnimations.length;v++){var c=o.additiveAnimations[v];c.weight!==0&&(i.multiplyToRef(c.currentValue,I.Quaternion[0]),X.SlerpToRef(i,I.Quaternion[0],c.weight,i))}return i};O.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var o=0;o<this._registeredForLateAnimationBindings.length;o++){var t=this._registeredForLateAnimationBindings.data[o];for(var e in t._lateAnimationHolders){var n=t._lateAnimationHolders[e],i=n.animations[0],r=n.originalValue,a=y.AllowMatrixDecomposeForInterpolation&&r.m,s=t[e];if(a)s=this._processLateAnimationBindingsForMatrices(n);else{var f=r.w!==void 0;if(f)s=this._processLateAnimationBindingsForQuaternions(n,s||X.Identity());else{var l=0,c=1;if(n.totalWeight<1)i&&r.scale?s=r.scale(1-n.totalWeight):i?s=r*(1-n.totalWeight):r.clone?s=r.clone():s=r;else if(i){c=n.totalWeight;var p=i.weight/c;p!==1?i.currentValue.scale?s=i.currentValue.scale(p):s=i.currentValue*p:s=i.currentValue,l=1}for(var h=l;h<n.animations.length;h++){var v=n.animations[h],u=v.weight/c;if(u)v.currentValue.scaleAndAddToRef?v.currentValue.scaleAndAddToRef(u,s):s+=v.currentValue*u;else continue}for(var S=0;S<n.additiveAnimations.length;S++){var v=n.additiveAnimations[S],u=v.weight;if(u)v.currentValue.scaleAndAddToRef?v.currentValue.scaleAndAddToRef(u,s):s+=v.currentValue*u;else continue}}}t[e]=s}t._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}};Un.prototype.copyAnimationRange=function(o,t,e,n,i){n===void 0&&(n=!1),i===void 0&&(i=null),this.animations.length===0&&(this.animations.push(new y(this.name,"_matrix",o.animations[0].framePerSecond,y.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var r=o.animations[0].getRange(t);if(!r)return!1;for(var a=r.from,s=r.to,f=o.animations[0].getKeys(),l=o.length,c=o.getParent(),p=this.getParent(),h=n&&c&&l&&this.length&&l!==this.length,v=h&&p&&c?p.length/c.length:1,u=n&&!p&&i&&(i.x!==1||i.y!==1||i.z!==1),S=this.animations[0].getKeys(),E,T,x,w=0,L=f.length;w<L;w++)E=f[w],E.frame>=a&&E.frame<=s&&(n?(x=E.value.clone(),h?(T=x.getTranslation(),x.setTranslation(T.scaleInPlace(v))):u&&i?(T=x.getTranslation(),x.setTranslation(T.multiplyInPlace(i))):x=E.value):x=E.value,S.push({frame:E.frame+e,value:x}));return this.animations[0].createRange(t,a+e,s+e),!0};const fe=[-1,0,1],_e=[[[0,.3,.7],[0,-te,0]],[[0,.6,.3],[0,te,0]],[[1,1,1],[te,0,0]],[[1,.8,0],[-te,0,0]],[[.7,0,.2],[0,0,0]],[[1,.3,0],[Math.PI,0,0]]],Bn=o=>{const t=Se.CreateBox("",{size:1},o),e=fe.flatMap(n=>fe.flatMap(i=>fe.map(r=>{const a=t.createInstance("");return a.position.set(n,i,r),a})));for(const[n,i]of Be.entries()){const r=Ee.CreatePlane("",{size:.9},o);r.material=new pe("",o),r.material.ambientColor.set(..._e[n][0]),r.isVisible=!1;for(const a of e){const s=a.position.add(i);if(e.some(l=>l.position.equals(s)))continue;const f=r.createInstance("");f.parent=a,f.rotation.set(..._e[n][1]),f.position.set(...i).scaleInPlace(.501)}}return e},Wn=(...o)=>new Promise(async t=>{y.CreateAndStartAnimation("",...o).onAnimationEnd=t});export{Wn as animate,Bn as createCubies};
//# sourceMappingURL=geometry.73316cf1.js.map

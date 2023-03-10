
import React from "react";
import { useGLTF } from "@react-three/drei";
import dtr from "../config/degreeconverter"
import { motion } from "framer-motion-3d"
import { backgroundAnim } from "../config/animation"
import { mouseAnim, bookAnim, coffeeAnim } from "../config/animation"

export function WorkAreaModel(props) {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/assets/models/joinedGLFT.gltf");

    return (

        <motion.group transition={{ repeat: Infinity, duration: 35 }} variants={backgroundAnim} initial="initial" animate="animate"  {...props} dispose={null} rotation={[dtr(35), dtr(145), 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2.geometry}
                material={materials.wood}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_1.geometry}
                material={materials.metal}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_2.geometry}
                material={materials.Mat}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_3.geometry}
                material={materials.ComputerMouse_mat1}
                animate={props.loc == "/courseandbonus" ? mouseAnim : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_4.geometry}
                material={materials.mat21}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_5.geometry}
                material={materials.mat22}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_6.geometry}
                material={materials.mat16}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_7.geometry}
                material={materials.mat9}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_8.geometry}
                material={materials.FFEB3B}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_9.geometry}
                material={materials["795548"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_10.geometry}
                material={materials.F44336}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_11.geometry}
                material={materials.lambert3SG}
                animate={props.loc == "/aboutme" ? coffeeAnim : {}}
                transition={{duration: 0.7}}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_12.geometry}
                material={materials.lambert2SG}
                animate={props.loc == "/aboutme" ? coffeeAnim : {}}
                transition={{duration: 0.7}}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_13.geometry}
                material={materials.mat17}
                animate={props.loc == "/onlineconsultation" ? bookAnim : {}}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_14.geometry}
                material={materials["mat21.001"]}
                animate={props.loc == "/onlineconsultation" ? bookAnim : {}}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_15.geometry}
                material={materials.mat8}
                animate={props.loc == "/onlineconsultation" ? bookAnim : {}}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_16.geometry}
                material={materials.mat23}
                animate={props.loc == "/onlineconsultation" ? bookAnim : {}}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_17.geometry}
                material={materials.mat12}
                animate={props.loc == "/onlineconsultation" ? bookAnim : {}}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_18.geometry}
                material={materials.mat3}
                animate={props.loc == "/onlineconsultation" ? bookAnim : {}}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_19.geometry}
                material={materials.mat20}
                animate={props.loc == "/onlineconsultation" ? bookAnim : {}}
            />
            <motion.mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_20.geometry}
                material={materials["mat9.001"]}
                animate={props.loc == "/onlineconsultation" ? bookAnim : {}}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_21.geometry}
                material={materials.FiddleleafFigPottedPlant_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_22.geometry}
                material={materials.mat15}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_23.geometry}
                material={materials["mat23.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_24.geometry}
                material={materials["mat12.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_2_25.geometry}
                material={materials["mat16.001"]}
            />
        </motion.group>

    );
}

useGLTF.preload("/joinedGLFT.gltf");
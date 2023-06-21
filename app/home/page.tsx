"use client";

import { useEffect, useState } from "react";
import Modal from "../components/modal/Modal";
import checkInfo from "../utils/checkinfo";

export default async function Home() {
  const [missingInfo, setMissingInfo] = useState<boolean | undefined>(false);
  const [showMissingInfoModal, setShowMissingInfoModal] =
    useState<boolean>(false);

  const missing = await checkInfo();
  setMissingInfo(missing);

  useEffect(() => {
    if (missingInfo) {
      setShowMissingInfoModal(true);
    }
  }, []);

  return (
    <main className="w-full p-3 sm:ml-60">
      <Modal display={showMissingInfoModal} />
      <p className="text-3xl">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        dignissim venenatis nibh, sit amet accumsan diam interdum non. Fusce sit
        amet vehicula nibh, a placerat dolor. Aliquam ornare sed odio ac
        commodo. Fusce feugiat sagittis nisl, eu luctus ante iaculis ut.
        Vestibulum a nisl facilisis, efficitur lectus eu, volutpat dui.
        Phasellus justo ipsum, euismod eget enim in, dignissim congue massa.
        Fusce vitae dui ipsum. Praesent justo augue, congue et tellus id,
        accumsan posuere libero. Nam et eros laoreet, luctus leo id, aliquet
        sem. Donec sed leo at tortor fringilla molestie. Curabitur egestas
        semper ligula, in sagittis urna cursus vitae. Sed tincidunt dictum
        egestas. Vestibulum id enim in enim lobortis ornare. Aliquam in interdum
        nunc. Integer lorem nibh, fermentum non erat a, dignissim tristique
        tortor. Vivamus suscipit eu massa vitae rutrum. Praesent rutrum turpis
        sit amet eros accumsan cursus. Aliquam id finibus augue. Quisque
        sollicitudin sit amet magna a porta. Vestibulum sodales ligula velit, id
        pulvinar sapien iaculis eleifend. Vivamus sed quam a risus congue
        vehicula ac eu tortor. Etiam porttitor ornare feugiat. Nulla ut velit
        orci. Praesent ac libero tincidunt, molestie nisi et, pulvinar lectus.
        Nam mi magna, tempor nec lectus sed, tempus tempus felis. Quisque mollis
        orci in sem scelerisque pellentesque. Nulla a augue nec elit iaculis
        pharetra vitae ut metus. Quisque ac sagittis lacus. Pellentesque
        elementum interdum congue. Maecenas aliquet lectus justo, eu sodales
        ipsum efficitur ullamcorper. Quisque ornare sollicitudin ante, et dictum
        tortor eleifend nec. Proin quis urna pulvinar, vulputate lectus sit
        amet, aliquet augue. Nam lobortis lectus sit amet tortor accumsan
        maximus. Nulla eu vulputate diam. Suspendisse vulputate, est a commodo
        aliquet, lacus mauris tristique dui, at cursus quam magna viverra lacus.
        Curabitur vel odio tempor, euismod nibh sit amet, pharetra augue.
        Suspendisse congue dolor volutpat porttitor interdum. Suspendisse eget
        interdum ligula. Quisque in metus vitae sapien sodales tristique eget
        placerat dolor. Aliquam pharetra enim dolor, non pharetra lorem
        imperdiet ut. Integer sit amet leo ante. Mauris et enim accumsan erat
        elementum molestie. Etiam rutrum ipsum at justo scelerisque, quis
        commodo eros ullamcorper. Duis cursus feugiat ipsum a egestas. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin
        ipsum eu tristique ullamcorper. Vivamus tristique eget leo at varius.
        Donec feugiat nisl et eros dapibus pretium. Fusce fermentum magna sit
        amet quam hendrerit, ut aliquam enim efficitur. Integer a enim tellus.
        Pellentesque ornare sem non consectetur varius. Suspendisse in purus nec
        turpis porttitor mollis. Cras in pretium purus. Cras tellus diam,
        vulputate id volutpat a, sollicitudin quis ante. Morbi ut risus est.
        Maecenas sit amet nunc eu nisl malesuada bibendum id sit amet massa.
      </p>
    </main>
  );
}
